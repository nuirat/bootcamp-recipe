const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
console.log(path.join(__dirname, 'node_modules'));
let players=[]
let axios=require('axios')

const getRecpe = function(recipeName)
{
    axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${recipeName}`)
    .then(res => {
        console.log(res.data);
    
    })
    
}




  const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
app.get('/sanity', function(request, response){
    
    response.send('ok')
})
app.get('/recipes/:ingredient', function(request, response){
    getRecpe(request.params.ingredient);
})




