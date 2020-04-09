# Balcony Inspection Vents

This is the repo for the website [www.balconyinspectionvents.com](www.balconyinspectionvents.com). Balcony Inspection Vents uses a [Node.js](www.nodejs.org) web server with the [Express](www.expressjs.com) web framework and the [EJS](www.ejs.co) templating engine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have installed the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.

### Installing

Clone the bacony-inspection-vents repo.

```
$ git clone https://github.com/Shane325/balcony-inspection-vents.git
```

This will clone the latest version of the Balcony Inspection Vents repository to a **balcony-inspection-vents** folder.

To install the dependencies, run this in the application folder from the command-line:

```
$ npm install
```

Run the application in development mode using npm

```
$ npm start
```

The application will now be running at [localhost:3000](localhost:3000)

Run the application in production mode using npm

```
$ npm run start:prod
```

The application will now be running at [localhost:8443](localhost:8443)

## Deployment

The project is hosted on a [Digital Ocean](www.digitalocean.com) droplet. The server is running [Ubuntu](www.ubuntu.com) and the application is running inside of a [Docker](www.docker.com) container on the web server.

Here are the deploy steps:

Push you local development changes to the master branch

```
$ git push origin master
```

Log in to the webserver via an ssh tunnel

```
$ ssh username@ip-address
```

On the webserver cd into the project directory

```
$ cd balcony-inspection-vents
```

Pull your latest changes down onto the server

```
$ sudo git pull origin master
```

Run the following docker command to restart the docker containers and push your changes live.

```
$ sudo docker-compose up -d --no-deps --build nodejs
```

The website is now updated with your latest changes.

