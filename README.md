# Meteor User Account

This is a meteor application with some user account functionality.

User can:
  - Register for an account
  - Login to their registered account


# setup
`meteor npm install` - would install the required node packages

`meteor` - would run the meteor app at `http://localhost:3000` by default


# The project structure
This project is a MeteorJS application with following addon installed:
  - `iron:router` for routing
  - `accounts-password` for simple user account backend management
  - `twbs:bootstrap` for simple styling

All client related file are stored in `client` folder.

Client side Blaze template can be found inside `client/template` folder.

Server side code are stored in `server` folder.

`lib/router` contains the routing information


# The problem story
Joyce registered on the website and forgot what she typed for her password.


# The proposed solution
As a registered user, I would like to reset my password so that I can regain
my account access.


## The basic challenge
Allow user to reset their password via a specially crafted url.


- Created a route to reset-password where user can change thier password. 
- This option is only available for login user.
- Solution branch: thebasicchallenge

## The pro challenge
Send the specially crafted url via email to the user.

- Created a route for user to submit a request to reset password. 
- Created a route for user to reset password with the token.
- To send the email, MAIL_URL need to be set up in the environment. 
- Solution branch: theprochallenge

## The bonus challenge
Fix the design flaw in the registration form that allow this problem to happen.

- Setup backend valiation for password field and confirm-password field.
- Setup forntend validation for password field and confirm-password field. The border of the confirm-password field will turn green if it matches eith the password field.
- Solution branch: thebonus
