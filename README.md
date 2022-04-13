<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Lettuce-Eat Project

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

- _Date Created_: 10 APR 2022
- _Last Modification Date_: 10 APR 2022
- _Lab URL_: https://lettuce-eat-app.herokuapp.com/
- _Git URL_: https://git.cs.dal.ca/ashaikh/csci-5709_group-01

## Authors

- [Aadil Sadik Mohmed Shaikh](ad979991@dal.ca) - _Full Stack Developer_
- [Arpan Nayankumar Bhatt](ar205025@dal.ca) - _Full Stack Developer_
- [Deeksha Sareen](dk930654@dal.ca) - _Full Stack Developer_
- [Pavan Abburi](pv696088@dal.ca) - _Full Stack Developer_
- [Rahul Moje](rahul.reddyp@dal.ca) - _Full Stack Developer_
- [Rahul Reddy Puchakayla](rh547954@dal.ca) - _Full Stack Developer_

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
type `npm run setup-frontend` to install the node modules for front end
type `npm run setup-backend` to install the node modules for backend
```

```
type `npm start` to run the application
```

After the successfull installation and running, You should see the web page running on `http://localhost:3000` with the Main Menu Page Design being displayed.

To access the admin portal, the credentials are,
Email : group01@gmail.com
Password : 12345678

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

- [Node.js](https://nodejs.org/en/download/) - Package Management
- [React](https://reactjs.org/) - frontend framework used
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - CLI to deploy the app to Heroku Git
- [React-Boostrap](https://react-bootstrap.github.io/forms/overview/) - React Bootstrap for UI styling
- [React Card Groups](https://react-bootstrap.github.io/components/cards/) - Card Groups for Menu Grid
- [Lorem Ipsum Generator](https://loremipsum.io/generator/) - Placehoder text
- [Flaticon](https://www.flaticon.com/premium-icon/hot_2515249?term=food&page=1&position=24&page=1 position=24&related_id=2515249&origin=tag) - Page Logo
- [ColorPalette] (https://abhijitrawool.com/restaurant-website-color-palettes)
- [Pexels] (https://www.pexels.com/photo/bread-with-soup-2474661/) - Food Image for Menu
- [MaterialUI] (https://mui.com/) - Material UI for UI Design

## Sources Used

This application contains a web design prototype of Menu Page for the "Lettuce Eat" restaurant ordering application project

The code was created by adapting the codebase in [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) -`npx create-react-app app_name`

The React Router Dom was used for routing in the application by following [React Router v5](https://reacttraining.com/blog/react-router-v5/):

### user.models.js



*Lines 05 - 16*



```
const User = new mongoose.Schema(
{
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, required:true, unique:true},
password:{type:String, required:true},
address:{type:String, required:true},
},
{
collection: 'user-data'
}
)



```



The code above was created by adapting the code in [Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) as shown below:



```
// Define schema
var Schema = mongoose.Schema;



var SomeModelSchema = new Schema({
a_string: String,
a_date: Date
});



// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );




```



The code in [Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) was implemented by me in order to create a model in the application
[Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose))'s Code was not used but taken as a reference to create a schema of DB
[Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)'s Code was modified by me for creating schema




### otp.models.js



*Lines 03 - 12*



```
const otpSchema = new mongoose.Schema(
{
email: { type: String, required: true },
code: { type: String, required: true },
expireIn: { type: Number, required: true },
},
{
collection: "otp-data",
}
);



```



The code above was created by adapting the code in [Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) as shown below:



```
// Define schema
var Schema = mongoose.Schema;



var SomeModelSchema = new Schema({
a_string: String,
a_date: Date
});



// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );



```



The code in [Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) was implemented by me in order to create a model in the application
[Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose))'s Code was not used but taken as a reference to create a schema of DB
[Creating Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)'s Code was modified by me for creating schema




### user.controllers.js



*Lines 27 - 46*



```
const login = async (req,res) => {
const user = await User.findOne({
email:req.body.email,
password:req.body.password
})
if(user){
const token = jwt.sign({
id:user._id,
firstName: user.firstName,
lastName: user.lastName,
email: user.email,
address:user.address
},
process.env.TOKEN_SECRET_KEY
)
res.status(200).json({success: true, token:token,id:user._id,
firstName: user.firstName,
lastName: user.lastName,
email: user.email,
address:user.address});



```



The code above was created by adapting the code in [API development using JWT token for authentication in Node.js](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) as shown below:



```
app.post("/register", async (req, res) => {



// Our register logic starts here
try {
// Get user input
const { first_name, last_name, email, password } = req.body;



// Validate user input
if (!(email && password && first_name && last_name)) {
res.status(400).send("All input is required");
}



// check if user already exist
// Validate if user exist in our database
const oldUser = await User.findOne({ email });



if (oldUser) {
return res.status(409).send("User Already Exist. Please Login");
}



//Encrypt user password
encryptedPassword = await bcrypt.hash(password, 10);



// Create user in our database
const user = await User.create({
first_name,
last_name,
email: email.toLowerCase(), // sanitize: convert email to lowercase
password: encryptedPassword,
});



// Create token
const token = jwt.sign(
{ user_id: user._id, email },
process.env.TOKEN_KEY,
{
expiresIn: "2h",
}
);
// save user token
user.token = token;



// return new user
res.status(201).json(user);
} catch (err) {
console.log(err);
}
// Our register logic ends here
});




```

The code in [API development using JWT token for authentication in Node.js](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) was implemented by me in order to develop backend API calls for user authentication feature.
[API development using JWT token for authentication in Node.js](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was not used but taken as a reference to verify token in Node.js
[API development using JWT token for authentication in Node.js](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was modified by me for authentication in Node.js

### Menu.js

*Lines 38- 44*

```
    {menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={false} title="Click to view item details" />
            </div>
          );
        })}

```

The code above was created by adapting the code in [Fullstack MERN Bootcamp](https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp) as shown below: 

```
   <div className="row text-center">
                <h1 className="text-white">All of T-Shirts</h1>
                <div className="row">
                    {products.map((product, index) => {
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card product={product}/>
                            </div>
                        )
                    })}
                </div>

```

### MenuCard.js

*Lines 186- 199*

```
  const successMessage = () => (
    <div className="alert alert-info alert-dismissable fade show" role="alert">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"             
        onClick={() => navigate("/admin/menu/manage")}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
```

The code above was created by adapting the code in [Fullstack MERN Bootcamp](https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp) as shown below: 

```

    const successMessage = () => (
        <div className="alert alert-success mt-3"
        style={{display: createdProduct? "": "None"}}>
            <h4>{createdProduct} created Successfully!</h4>
        </div>
    );

```

### menu.controllers.js

* Lines 10 - 29
```
const uploadFile = (fileContent, fileName) => {
  const { s3, params } = AWSConfig;

  // Setting up S3 upload parameters
  const params1 = {
    Bucket: params.Bucket,
    Key: fileName,
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params1, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);

    return data.Location;
  });
};
```

The code above was created by adapting the code in [Uploading Files to AWS S3 with Node.js](https://stackabuse.com/uploading-files-to-aws-s3-with-node-js/) as shown below: 

```
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

```

### menu.controllers.js

* Lines 34 - 81

```
  let form = new formidable.IncomingForm();
    form.keepExtensions = true;    

    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "Error in form, please try again",
          err,
        });
      }

      const menuItem = new Menu(fields);

      if (fields.customization) {
        const userCustomizations = JSON.parse(fields.customization);

        console.log('usercu', userCustomizations)
        menuItem.customization = userCustomizations;
        console.log('user', menuItem)
      }
  
      if (file.photo) {
        if (file.photo.size > 5000000) {
          return res.status(400).json({
            error: "File size is big, Max: 5 MB",
          });
        }

        menuItem.save((err, item) => {
        if (err) {
          res.status(400).json({
            error: "Error occurred when saving Item to database!",
            err,
          });
        } else {
          res.status(200).json({ message: "Item added to menu successfully!" });
        }
      });
    });  

```

The code above was created by adapting the code in [Fullstack MERN Bootcamp](https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp) as shown below: 

```
   let form = new formidable.IncomingForm();
    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
        if(err){
            return res.status(400).json({
                error: "problem with Image"
            })
        }

        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size too big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType =file.photo.type
        }

        // save to DB
        product.save((err, item) => {
            if(err){
                res.status(400).json({
                    error: "Saving product to DB Failed!"
                })
            }
            res.json(item)
        })
    })

```

* Lines 91 - 108

```
 AWSConfig.s3.getObject(
    {
      Bucket: AWSConfig.params.Bucket,
      Key: req.menuitem.photo.data,
    },
    function (errtxt, file) {
      if (errtxt) {
        console.Log("lireFic", "ERR " + errtxt);
        return res.json({error: errtxt});
      } else {
        res.send(file.Body);

      }
    }
```

The code above was created by adapting the code in [ retrieve image from s3 with nodejs](https://stackoverflow.com/questions/48296569/how-to-retrieve-image-from-s3-with-nodejs) as shown below:

```
let imageTest =document.getElementById('imgTest')
s3.getObject({
    Bucket: 'myBucket',
    Key: "test/myimage.png"
}, function (errtxt, file) {
    if (errtxt) {
        console.Log("lireFic", "ERR " + errtxt);
    } else {
        console.log('lecture OK')
        imageTest.src = "data:image/png;base64," + encode(file.Body);
    }
});
```

## Images Used
The following images were used for Menu:
1. https://images.pexels.com/photos/6941008/pexels-photo-6941008.jpeg
2. https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg
3. https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg"
4. https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg
5. https://static.trip101.com/paragraph_media/pictures/002/453/331/large/bread-with-soup-2474661.jpg?1622516716
6. https://images.pexels.com/photos/2732921/pexels-photo-2732921.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
7. https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 

## Source Code Changes

```
Not Applicable
```

## Acknowledgments

- Official Developers at React and Community : https://reactjs.org/acknowledgements.html
- Learn Code Online for React Course - https://courses.learncodeonline.in/learn/home/Build-an-E-Commerce-with-ReactJS/section/52453/lesson/262133
- Learn Code Online for MERN bootcamp course (Hitesh Chowdary) - https://www.youtube.com/watch?v=niWLnh8aQNk, https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp
- Formidable - https://www.tabnine.com/code/javascript/functions/formidable/Files/photo
- React Forms: https://react-bootstrap.github.io/forms/overview/
- AWS - https://us-east-1.console.aws.amazon.com/
- Upload Image to S3 - https://aws.plainenglish.io/upload-images-on-aws-s3-using-node-js-32ae3775662a
- AWS SDK - https://aws.amazon.com/sdk-for-javascript/
- Bootstrap Modal - https://www.c-sharpcorner.com/article/how-to-create-boostrap-modal-in-reactjs/
- Form validation has been implemented in multiple files using useForm, Yup library for dynamic validation using below lines of code in brief. [useForm](https://react-hook-form.com/api/useform)

```
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object().shape({
name: yup.string().required(),
age: yup.number().required(),
}).required();



const App = () => {
const { register, handleSubmit } = useForm({
resolver: yupResolver(schema),
});



return (
<form onSubmit={handleSubmit(d => console.log(d))}>
<input {...register("name")} />
<input type="number" {...register("age")} />
<input type="submit" />
</form>
);
};



```
* Referred numerous youtube videos from starting of the development for User Management module inorder to get the whole idea of developing the flow in the application.

```
