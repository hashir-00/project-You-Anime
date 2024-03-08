from bs4 import BeautifulSoup
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from huggingface_hub import InferenceClient
from textblob import TextBlob

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


client = InferenceClient("mistralai/Mixtral-8x7B-Instruct-v0.1")

def format_prompt(message, history):
    prompt = "<s>"
    for user_prompt, bot_response in history:
        prompt += f"[INST] {user_prompt} [/INST]"
        prompt += f" {bot_response}</s> "
    prompt += f"[INST] {message} [/INST]"
    return prompt

def generate_response(message, history, system_prompt, temperature=0.9, max_new_tokens=256, top_p=0.95, repetition_penalty=1.0):
    temperature = float(temperature)
    if temperature < 1e-2:
        temperature = 1e-2
    top_p = float(top_p)

    generate_kwargs = dict(
        temperature=temperature,
        max_new_tokens=max_new_tokens,
        top_p=top_p,
        repetition_penalty=repetition_penalty,
        do_sample=True,
        seed=42,
    )

    formatted_prompt = format_prompt(f"{system_prompt}, {message}", history)
    stream = client.text_generation(formatted_prompt, **generate_kwargs, stream=True, details=True, return_full_text=False)
    output = ""

    
    for response in stream:
        text = response.token.text
        clean_text = BeautifulSoup(text, "html.parser").get_text()

        output+= clean_text
       

    return output

def analyze_sentiment(text):
    """
    Analyzes the sentiment of the given text.

    Args:
        text (str): The text to analyze.

    Returns:
        str: The sentiment of the text ('positive', 'negative', or 'neutral').
    """
    blob = TextBlob(text)
    sentiment_score = blob.sentiment.polarity

    if sentiment_score > 0:
        return 'positive'
    elif sentiment_score < 0:
        return 'negative'
    else:
        return 'neutral'



@cross_origin()
@app.route("/chat", methods=["POST"])
def chat():
    try:
        # Get input data from the request
        data = request.json
        message = data.get("message")
        history = data.get("history", [])
        system_prompt = data.get("system_prompt")
        temperature = data.get("temperature", 0.9)
        max_new_tokens = data.get("max_new_tokens", 64)
        top_p = data.get("top_p", 0.95)
        repetition_penalty = data.get("repetition_penalty", 1.0)

        # Generate response using the model
        response_generator = generate_response(
            message, history, system_prompt, temperature, max_new_tokens, top_p, repetition_penalty
        )

        # Collect all responses from the generator into a list
        response_texts = list(response_generator)

        # Concatenate the responses into a single string
        response_text = ''.join(response_texts)

        # Analyze the sentiment of the response
        sentiment =analyze_sentiment(response_text)

        # Return the concatenated response
        return jsonify({"output": response_text}),200

    except Exception as e:
        return jsonify({"error": str(e)}),

if __name__ == "__main__":
    app.run(debug=True)

#note
    #this is the main file for the chatbot. It uses the 
    #huggingface_hub to generate the response for the user input.
    #The response is then analyzed for sentiment using the textblob library.
    #The response is then returned to a music recommendation system.


 
    #     message = data.get("message") - this is the user input
    #     history = data.get("history", []) - this is the conversation history
    #     system_prompt = data.get("system_prompt") - this is the system prompt(can modify to give context to the chat(such as act like a profession etc))
    #     temperature = data.get("temperature", 0.9) - this is the temperature for the response
    #     max_new_tokens = data.get("max_new_tokens", 64) - this is the maximum number of tokens for the response(number of words)
    

