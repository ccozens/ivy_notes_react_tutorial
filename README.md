# Notes app tutorial

Created following Dennis Ivy's 2-part [react](https://www.youtube.com/watch?v=6fM3ueN9nYM) / [django-REST tutorial](https://www.youtube.com/watch?v=tYKRAXIio28&t=61s)

I chose to use create-react-app and browser-router depsite this being recently deprecated so I could focus on learning other aspects of this tutorial, for example I liked how he was setting out the component structure which is something I have struggled to find good introductory resources on. In any case the main reason I am following this is for the Django REST, not react, and I intend to refactor/repurpose the app into something I want to use using a production framework and TypeScript.

1. use of components to render out data in map
2. props = immutable form of data (ie cannout udpate once passed from parent to child)
3. state = data that can be udpated
4. key prop needed to identify individual list item in virtual DOM
5. destructuring prop import. if function ListItem({props}), can access using {props.note}, whereas function ListItem({note}) allows access with {note}.
6. icons from mumbleui
7. [json server](https://www.npmjs.com/package/json-server) to create fake REST API for prototyping and mocking.
   1. `json-server --watch db.json --port 8000` creates mock json file and runs server on port 8000 (default is 3000, same as react).
   2. copy paste in new data from data.json
   3. edit `package.json` so can run `npm run server`:
      {"scripts": {
      ....
      "server": "json-server --watch db.json --port 8000"
      }}
8.
