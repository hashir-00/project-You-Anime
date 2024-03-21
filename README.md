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
- [About Deployment](#about-Deployment)
- [CI-CD pipeline] (#CI-CD pipeline)
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

## CI-CD pipeline

This project uses the github actions workflow to manage its CI-CD pipeline in regards to the build and deployment.

To initiate a workflow go to the git repos action tab and select the workflow necessary for the project.
(for this we have used node.js workflow)
after it automatically creates the workflow file.commit the file to the branch and let github take care of the deployment.
 
 `https://github.com/marketplace/actions/deploy-to-github-pages` page offers the yml code necessary for the workflow setup.

 use `working-directory` to specify the path to the module files.

## about-Deployment

this page is deployed in github pages for  hosting services.

### steps
- Add a homepage property in this format*: https://{username}.github.io/{repo-name}
    inside the react projects package.json right above the name of the project
- add the relevant deployment scripts
    
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",} 
- build the build folder
    use ```npm run build`` to build the deploying folder
- deploy the project 
    use ```npm run deploy``` to publish the project

## issue with page refresh giving a 404 
the issue has been corrected with introducing a 404.html page in public folder and few tweeks in index.html. look at them yo get an idea


