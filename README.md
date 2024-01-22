# A D&D 5e API webpage application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is for Phase 2 of the Flat-iron school's flex online program. It contains a react router setup as well as a local server `json-server`.
This project communicates with an open source API for D&D fifth edition `https://www.dnd5eapi.co` and creates a webpage for basic information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

This starts the JSON-Server.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Functionality

### Home

A landing hub for accessing all other pages. Nothing more than an intro to the webpage.

### Class Page

Contains all the base D&D fifth edition classes with infromation from the API. 
This includes Hit dice, a link to the spell list page (Routes to the spell list page), Saving throw dice, Proficiencies the class is capable of, additional proficiencies the class is capable of learning / choosing, and a list of equipment the class is able to choose.

### Spell Page

Lists out in no particular order the spells the class is able to learn / use. Upon clicking a spell the webpage will change the main body to a spell information page containing all of the spell information.
This includes the spells' School, range of efficacy, concentration status, a description of the spell, and a redirect to all classes that can use that spell.

### Class Form Page

This page creates the form to add a new party member! It asks for class, name, proficiencies, and starting equipment. Proficiencies are exclusive and cannot be doubled up in the form. These characters are added to a party list in db.json and then are spit out into the party page.

### Party Page

This page lists all party members that are currently in the db.json. 
