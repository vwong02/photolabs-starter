# PhotoLabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.


## Table of Contents
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Project Features](#project-features)
- [Project Link](#live-link)


## Getting Started

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

Testing Library
- [Jest-Dom](https://github.com/testing-library/jest-dom)
- [React Testing](https://www.npmjs.com/package/@testing-library/react)
- [User-Event](https://github.com/testing-library/user-event)

Frontend 
- [React](https://react.dev/)
- [React-Dom](https://www.npmjs.com/package/react-dom)
- [React-Scripts](https://www.npmjs.com/package/react-scripts)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals#readme)

Backend 
- [bodyParser](https://expressjs.com/en/resources/middleware/body-parser.html)
- [Cors](https://github.com/expressjs/cors#readme)
- [Dotenv](https://www.dotenv.org/)
- [Express](https://expressjs.com/)
- [Helmet.js](https://helmetjs.github.io/)
- [Node-Postgres](https://node-postgres.com/)
- [Socket.io](https://socket.io/)
- [WebSocket](https://github.com/websockets/ws?tab=readme-ov-file)


## Demo



## Project Features

* Users can click on a specific topic in the navigation bar to view photos in that category
* Users can click on the PhotoLabs logo to view all photos in the app
* Users can favourite a photo by click on the heart icon
* When there are favourited photos, the heart icon in the top right notifies the users that they have photos favourited
* Users can select a photo to view a larger version in a modal
* Similar photos to the selected photo appear in the modal
