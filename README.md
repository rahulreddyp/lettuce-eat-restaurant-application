# Project Proposal: Wesite Design - Prototype

* *Date Created*: 23 FEB 2022
* *Last Modification Date*: 23 FEB 2022
* *Deployment URL*: https://group01-web-design.herokuapp.com/
* *Git URL*: https://git.cs.dal.ca/ashaikh/csci-5709_group-01/-/tree/rahulreddy_puchakayala


## Authors

* [Rahul Reddy Puchakayala](rahul.reddyp@dal.ca) - *(Maintainer)*
* [Aadil Sadik Mohmed Shaikh](ad979991@dal.ca) - *(Maintainer)*
* [Arpan Nayankumar Bhatt](ar205025@dal.ca) - *(Maintainer)*
* [Deeksha Sareen](dk930654@dal.ca) - *(Maintainer)*
* [Pavan Abburi](pv696088@dal.ca) - *(Maintainer)*
* [Rahul Sunil Moje](rahulmoje@dal.ca) - *(Maintainer)*


## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Web Browser i.e., Google Chrome or Mozilla Firefox

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Please follow the below series of steps to get a local development environment running
open terminal and type

```
`git clone git@git.cs.dal.ca:ashaikh/csci-5709_group-01.git` - To clone the repository to local system

```

```

`cd csci-5709_group-01` - Change to cloned directory
```

```
type `npm install` to install the node modules
```

```
type `npm start` to run the application
```

After the successfull installation and running, You should see the web page running on `http://localhost:3000` with the Main Menu Page Design being displayed

## Running the tests

```
Not Applicable
```

### Break down into end to end tests

```
Not Applicable
```

### And coding style tests

```
Not Applicable
```


## Deployment

```
Heroku Deployment
```
The application has been deployed on Heroku using Heroku Git which provides the CLI commands as shown below:

`heroku login`

`cd csci-5709_group-01`

`heroku git:remote -a group01-web-design`

`git add .`

`git commit -am "deploying project design prototype"`

`git push heroku master`


## Built With

* [Node.js](https://nodejs.org/en/download/) - Package Management
* [React](https://reactjs.org/) - frontend framework used
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - CLI to deploy the app to Heroku Git
* [React-Boostrap](https://react-bootstrap.github.io/forms/overview/) - React Bootstrap for UI styling
* [React Card Groups](https://react-bootstrap.github.io/components/cards/) - Card Groups for Menu Grid
* [Lorem Ipsum Generator](https://loremipsum.io/generator/) - Placehoder text
* [Flaticon](https://www.flaticon.com/premium-icon/hot_2515249?term=food&page=1&position=24&page=1 position=24&related_id=2515249&origin=tag) - Page Logo
* [ColorPalette] (https://abhijitrawool.com/restaurant-website-color-palettes)
* [Pexels] (https://www.pexels.com/photo/bread-with-soup-2474661/) - Food Image for Menu


## Sources Used

This application contains a web design prototype of Menu Page for the "Lettuce Eat" restaurant ordering application project


The code was created by adapting the codebase in [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) -`npx create-react-app app_name`

The React Router Dom was used for routing in the application by following [React Router v5](https://reacttraining.com/blog/react-router-v5/): 


## Source Code Changes

### App.js

*All Lines *
```
Removed as unused
```

### Index.js

*Lines 13*

* Before 
```
<App />

```

* After
```
<Routes />
```

### Menu.js

*Lines 25-43*

Created the card group using `React Card Groups`

## Acknowledgments

* Official Developers at React and Community : https://reactjs.org/acknowledgements.html
* Learn Code Online for React Course - https://courses.learncodeonline.in/learn/home/Build-an-E-Commerce-with-ReactJS/section/52453/lesson/262133
* Tutorial 3 Lab Video Creators - https://ca-lti.bbcollab.com/recording/09ed33d5f6de404393e7b8a168e13dc1
