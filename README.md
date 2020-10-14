# Task-Manager-Backend

Backend code for the Task Manager application

## Available Scripts

To run the Node Express application:

From the root of the project:

```
node server/app.js
```

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Docker scripts

If you wish to run the dockerised version of this application:

The Docker container is mapped to localhost port 5020 as default. You should map the host machines port to a port of your choosing.
( HostPort:DockerPort )

```
docker run -it -p 5020:5000 task-manager-backend
```

Open [http://localhost:5020](http://localhost:5020) to view it in the browser.

## Frontend repository

https://github.com/tony-griffin/Task-Manager-Frontend
