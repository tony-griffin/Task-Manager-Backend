# Task-Manager-Backend

Backend code for the Task Manager application

## Available Scripts

From the root of the project:

```
node server/app.js
```

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Docker scripts

The Docker container runs on port 5020 as default. You should map the host machines port to a port of your choosing. Below I have chosen to map to port 5020 on the host machine.
( HostPort:DockerPort )

```
docker run -it -p 5020:5020 task-manager-backend
```

You can specify which port the docker container will run on by passing in an environmental variable when running the container, eg:

```
docker run -it -e PORT=<CHOSEN-PORT-NUMBER> -p 5020:<CHOSEN-PORT-NUMBER> task-manager-backend
```

Your Docker container will now be available at CHOSEN-PORT-NUMBER

## Frontend repository

https://github.com/tony-griffin/Task-Manager-Frontend
