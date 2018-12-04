# Milestone Project1 - Running Club Soho Striders

Live site: https://harryphelps2.github.io/milestoneproject1/

## Overview

### What is the app for?

This app is for members of the running club to find information on training and sign up for training sessions and races.

#### Persona 1 Mia

Mia is moved to London from the West Country. She is looking to join a local social running club to keep fit and make friends. She is 24, works in sales, studied drama at University and is gregarious and outgoing. She is adept at social media and has moderate tech ability.

- Goals
	- Find out about training and socials
	- Sign up for club
	- Join club in social media
	- Contact club with form query

- Tasks
	- Browse training schedule
	- Sign up for races
	- Sign up for club

#### Persona 2 Carl

Carl was born in Norwich and now works for a bank in the city. He is extremely competitive and ran to county level as a child. He is single and his social life revolve around traing and racing with the club, and going to the gym. He competes for the club at meets and likes to keep track of his times and where he places. Carl is cash rich but time-poor. He has only limited time to didicate to training so he needs to know that the sessions he does attend will bring him maximum speed benefit.

- Goals
	- Browse races
	- Sign up for races
	- Plan training

- Tasks
	- Browse races
	- Browse training sessions
	- Opt in to training sessions and build weekly training schedule
	- Seek support from Club admin if required.

### What does it do?

The site allows users to learn about the club and the training sessions, sign up for training sessions and upcoming races and tells them how much it will cost. 

#User Experience Notes

## Strategy

- Goals
	- Keep fit
	- Get faster
	- Make friends
	- Get out of the house

- User Constituencies
	- Members
	- Non-members
	- Staff

- Usage contexts
	- Track
	- Road
	- Forest

## Scope
- User tasks
	- Join
	- Leave
	- Sign up for races
	- Buy kit
	- Find out about training times
	- Find out about social events

## Structure
 	### Home
		
	### Training

	### Racing

	### Social

## Skeleton and Surface

See Mockups for designs:
https://github.com/harryphelps2/milestoneproject1/tree/master/Mockups

## Features

- Home landing page with about us and video.
- Navbar with links to each page.

- Join us button that takes you to the training page.

- Button to sign up for training session that adds it to the schedule table and adds the cost to a variable and stores it in local storage.

- Next button that takes you to race list.

- Table of races with links to sign up.
- Next button that takes you to the schedules

- Schedule of choosen weekly training sessions.
- Questions? button that takes you to support page.

- Support page with social media links and email enquiry form.
- Button cancel training session and remove it from the list.

### Testing

There is a testing suite to:

1. test the toggle add and remove a training session from the selectedActivities array in local storage.

2. test the creation of a personalised schedule from the index-array

Testing can be found here:

https://github.com/harryphelps2/milestoneproject1/blob/master/javascript_testing/spec/scheduleSpec.js


## Tech Used

- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks

## Contributing
 
### Getting the code up and running

Need to redo this on virtual env and set up remote server again
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
