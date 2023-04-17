const express = require ('express');
const router = express.Router();
const aute = require('../../middelware/auth')
const Profile = require('../../MODELS/Profile')
const User = require('../../MODELS/User')
// get api/profile/me
// get current user profile
// access Private
router.get('/me',aute,async(req,res) =>{
    try{
        const profile = await Profile.findOne({user:req.user.id}).populate('user',['name','avatar'])
        if(!profile){
            return res.status(500).json({mag:'ther is no profile for this user'})
        }
        res.json(profile)
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error')
    }
})

module.exports = router;