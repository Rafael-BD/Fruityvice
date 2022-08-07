var express = require('express');
var router = express.Router();
const axios = require('axios')

router.get('/', function(req, resp, next) {
  axios
    .get("https://www.fruityvice.com/api/fruit/all")
    .then(res => { 
        resp.json(res.data);  
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    }
    ); 
});

module.exports = router;
