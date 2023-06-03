# Todo tasks application
A monorepo containing a Nest.js backend and a React frontend applications.

## Description
This repository contains a monorepo setup for developing a TODO list full-stack web application using Nest.js for the backend API and React for the frontend UI. The monorepo structure allows for better code organization, shared dependencies, and easier development and deployment.

## Features
- Backend API built with Nest.js
- Frontend UI built with React
- Shared code and dependencies between the backend and frontend
- Easier development and deployment with a monorepo structure

## Installation
To get started with the project, follow these steps:

- Clone the repository: git clone git@github.com:SierikovMark/todo-list-app.git
- Navigate to the project directory: `cd todo-list-app`
- Install the dependencies: `npm install`


## Usage
## Configuration
The project can be configured using environment variables. Create a .env file in the respective backend and frontend directories and specify the required variables. Refer to the .env.example files for the list of variables.  
Please specify env variables which doesn't have default values 
```
MONGO_URI = <mongo uri | default - mongodb://localhost:27017>
MONGO_AUTH_SOURCE = <mongo auth database | default - admin>
MONGO_TODO_LIST_DB = <database name | default todo-list-app>
MONGO_USERNAME = <mongo database username>
MONGO_PASSWORD = <mongo database password>
PASSWORD_SALT = salt for hashing algoritm, has priority over NUMBER_OF_ROUNDS
NUMBER_OF_ROUNDS = <number of rounds for hashing algorithm, PASSWORD_SALT has priority
JWT_SECRET = <jwt secret | default jwt_secret>
```

## Development
To run the project in development mode, use the following commands:

### Backend
Navigate to the backend directory: cd backend
Start the development server: `npm run start:dev`  
The Nest.js API will be available at http://localhost:3000  

### Frontend
Navigate to the frontend directory: `cd frontend`
Start the development server: `npm start`  
The React app will be available at http://localhost:3001

### FE + BE
Navigate to root folder of monorepo
Run: `npm start`  
Both applications will be available at http://localhost:3000

### FE + BE + MongoDB with docker-compose
Navigate to root folder of monorepo  
Run: `docker-compose up`  
The Nest.js API will be available at http://localhost:3000  
The React app will be available at http://localhost  
The MongoDB will be available at [localhost:27017](localhost:27017) (no auth)

Or if you use WebStorm you can just go to the docker-compose file in the root directory of the project and run it right from IDE

## Production
To build and run the project in production mode, use the following commands:

### Backend
Navigate to the backend directory: `cd backend`  
Build the project: `npm run build`  
Start the production server: `npm start`  
The Nest.js API will be available at http://localhost:3000

### Frontend
Navigate to the frontend directory: `cd frontend`  
Build the project: `npm run build`  
Serve the production build: `npm run serve`  
The React app will be available at http://localhost:3001

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Please follow the existing code style and commit message conventions.

## Possible improvements
- Logging on backend side
- Encryption of JWT token
- configuration for different environments
- CI/CD integration
- Token refresh mechanism
- UI/UX is a huge area for improvement

## License
This project is licensed under the MIT License.

## Acknowledgements
Nest.js
React
...
Feel free to modify and expand this README to suit the specific needs and details of your Nest.js and React monorepo project.
