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

## The pro challenge
Send the specially crafted url via email to the user.

## The bonus challenge
Fix the design flaw in the registration form that allow this problem to happen.
