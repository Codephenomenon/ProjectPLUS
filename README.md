# Project PLUS
Project PLUS is my senior project for the Honors College at the University of Central Missouri. This app allows users to sign in either by creating an account or
through Google & Facebook authentication. Users can create plans for group projects then flesh out *objectives* that structure the project timeline.
Users can add other users through email and link them to the project to help teams collaborate.

## Getting Started
You must have Node and NPM installed to access this application locally. Navigate to the project's server folder in your terminal and run the following command:
```
npm run dev
```
This will boot up the application in your preferred web browser. The development environment is configured to communicate with a testing database set up on mLab using MongoDB.
The official deployment of this application to Heroku will be configured to use a production environment database.
You can find the official deployment of project PLUS [here](https://dc-project-plus.herokuapp.com/).

### Server Documentation
The server for project PLUS was built using NodeJS and Express. Express is used to handle all the routing of traffic and communication between the remote MongoDB database
and the server, as well as communication between Redux in the client and the server. Mongoose was used to model Schemas and store data into the remote database. Sendgrid
was implemented to send emails to team members in mass at the time of a projects creation using the Sendgrid API. Passport was used to create strategies that handled
creating and authenticating user accounts using various methods. Bcrypt was implemented alongside passport to encrypt sensitive user information and ensure its integrity.

### Client Documentation
The client portion of the project was built using React and Redux to handle state passed between components. All HTML and CSS is custom, using SASS compiled into CSS to
effectively style components and pages. A proxy was created to pass data from the client to the server using the Axios library. Application wide state is managed by Redux
ensuring user data is passed to all components, and ReduxThunk was used to handle asynchronous actions. React routing was implemented to set up the various pages of the application
and help ensure users cant reach certain pages without being authenticated. The handling of authentication was the combination of traditional registration as well as Google and
Facebook oAuth.

#### Built With
- React and Redux
- Axios
- Lodash
- ReduxThunk and ReduxForm
- React RouterDOM
- Node and Express
- MongoDB and Mongoose
- Sendgrid
- Passport and bcrypt
- SASS
