# Project You-Anime

"An interactive web application called You-anime, designed to enhance the anime viewing experience. 
With sentiment analysis-powered recommendations, 
engaging quiz games, and expert cosplay suggestions, 
You-anime brings personalized excitement to every anime enthusiast's screen."

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [About Technology](#about-tech)
- [License](#license)

## Getting Started

These instructions are designed for a windows based bash terminals will get you a copy of the project up and running on your local machine for development and testing purposes.

clone the project via git

```git clone https://github.com/hashir-00/SDGP-CS38.git```

once cloned install the node packages in the react files which are in you-anime directory through the terminal.

navigate to the you-anime directory:

```cd you-anime```

once in the you anime directory 

```npm i ```

after installation run the react app

``` npm start```

### Prerequisites

#ML model to be run

do a git lfs to initiate the hugging face model

for the ml models to be run locally install these packages

``` pip install torch```
``` pip install flask```
```pip install flask-cors```
``` pip install transformers```
```pip install textblob```
```pip install bs4```

if pip  is not recognized use 
``` python -m pip``` instead of ```pip```

## Contributing

always do a git pull for any recent changes 
``` git pull origin master```

create a seperate branch 

```git checkout -b branchName```

after each change 

``` git add --a``` - for all changes to be add
``` git add filename.ext``` -for the specifi files

after addition commit the changes
``` git commit -m "commit message"``` (include a simple message about the task done)

push to the branch 

```git push origin branchName``` 

to approve your changes create a pull request and add a reviewer 

## about-tech

project You-anime utilizes the free hugging face model ``mistralai/Mixtral-8x7B-Instruct-v0.1``
as its chatbot to converse with the user freely.

we were planning to use `michellejieli/emotion_text_classifier` sentiment analyser which has 7 emotions to be detected but in the middle of the project it broke down in our server.
there a simple textblob library of python which can predict emotions but only returns 3 emotions named `postive,negative and neutral` has been used.

firebase has been utilised as the database for the user to store his own collection of memes in which he has total control of.also user logging is being used in the same database.

react is being used as the front end for the project and a flask server is used as the backend for the project.




