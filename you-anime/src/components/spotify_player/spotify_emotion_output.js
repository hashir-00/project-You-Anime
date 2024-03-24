function EmotionSetter(emotion){
   
    emotion = emotion.toLowerCase();
    //need to write the logic here where it recommends the anime-music based on the emotion
    if(emotion==="positive"){
        return "happy";
    }
    else if(emotion==="negative"){
        return "sad";
    }
    else if(emotion==="extreme negativity"){
        return "angry";
    }
    else if(emotion==="neutral"){
        return "neutral";
    }
    else{
        return "neutral";
    }   
}

export default EmotionSetter;


//i get the array-json format(or database)
//i pass the emotion to the function
//it returns the relavent music array

//i pass the array to the spotify player
//spotify player plays the music
