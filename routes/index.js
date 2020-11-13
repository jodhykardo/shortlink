const express = require('express');
const router = express.Router();

const Url = require('../models/url');

//route     GET /:code
//desc      Redirect to original URL
router.get('/:code', async (req, res) =>{
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('No url found or not created yet!');
        }
    } catch (error) {
        console.error(err);
        res.status(500).json('Server error, please come back again later!');
    }
})

module.exports = router;