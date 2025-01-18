const express = require('express');
const usersRepo = require('../../repositories/users')
const signupTemplate = require('../../views/admin/auth/signup')
const signinTemplate = require('../../views/admin/auth/signin')

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
})
//BODY PARSER WRITTEN BY HAND AND REPLACED BY INJECTED LIBRARY bodyParser.urlencoded
// const bodyParser = (req, res, next) => {
//     if (req.method === 'POST'){
//         req.on('data', data => {
//             const parsed = data.toString('utf8').split('&');
//             const formData = {};
//             for(let pair of parsed){
//              const [key, value] = pair.split('='); 
//              formData[key] = value; 
//             };
//             req.body = formData;
//             next();
//             });
//     } else {
//         next();
//     }
//  };

router.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser = await usersRepo.getOneBy({ email });
    if(existingUser) {
        return res.send('Email in use');
    }

    if (password !== passwordConfirmation){
        return res.send('Passwords must match');
    }
    //creating a user in our repo 
    const user = await usersRepo.create( {email: email, password: password});
    //store the id of that user 
    req.session.userId = user.id; 

    res.send('Account created!!!');
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate())
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await usersRepo.getOneBy({ email: email });

    if (!user) {
        return res.send('Email not found');
    }

    const validPassword = await usersRepo.comparePasswords(
        user.password, 
        password
    );
    if(!validPassword){
        return res.send('Invalid password');
    }

    req.session.userId = user.id;

    res.send('You are signed in!!!')
})

module.exports = router; //it helps to share this file to the other in a project