import { client } from "@gradio/client";

const app = await client("http://127.0.0.1:7860/");
const result = await app.predict("/chat", [		
				"Hello!!", // string  in 'Message' Textbox component		
				"Hello!!", // string  in 'System Prompt' Textbox component		
				0, // number (numeric value between 0.0 and 1.0) in 'Temperature' Slider component		
				0, // number (numeric value between 0 and 1048) in 'Max new tokens' Slider component		
				0, // number (numeric value between 0.0 and 1) in 'Top-p (nucleus sampling)' Slider component		
				1, // number (numeric value between 1.0 and 2.0) in 'Repetition penalty' Slider component
	]);


	
console.log(result.data); // Adjust response handling based on actual response structure