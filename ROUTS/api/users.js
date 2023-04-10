const express = require('express');
const router = express.Router()
const gravater = require('gravatar');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require("express-validator/check");

router.post('/',
   [ 
    check('name','name is required').not().isEmpty(),
    check('email','please include a valid email').isEmail(),
    check('password','pleas enter a password whit 6 or more cherters').isLength({min:6})
   ],
   (req,res )=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });
    }

    const { name ,email,password} = req.body;

    try { 
        let user = await user.finsOne({ email })

        if(user){
            res.status(400).json({errors: [{ msg: 'user already exists'}]})
        }

        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        user = new user({
            name,
            email,
            avatar,
            password
        });

        res.send('user route');
    }
    catch(err){
}


});

module.exports = router;