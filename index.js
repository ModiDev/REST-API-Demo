//import express node backend framework -- npm i -g express
const express = require('express')

const app = express() // express object in to app param
app.use(express.json()) // use app param express json type

//books json data array
const books = [
    {title:'Java',id: 1},
    {title:'C',id: 2},
    {title:'Dart',id: 3},
    {title:'JavaScript',id: 4},
    {title:'TypeScript',id: 5},
]
//get request sample message
app.get('/',(req,resp)=>{
    resp.send('Welcome to study automation to learn REST API with Node JS ')
})
//get books object
app.get('/api/books',(req,resp)=>{
    resp.send(books)
})
//get books by id
app.get('/api/books/:id',(req,resp)=>{ // pass the parameter id
   const book = books.find(v=>v.id === parseInt(req.params.id)) // find the books by id-- parseint because id save as a string
   if(!book) resp.status(404).send('Request not found') // if book object null or undefined
   else resp.send(book) // else send the response object
})
//api server port
app.listen(3000)


//install package.json --- npm init
// rename main as index.js
//install express----- nodejs backend framework
//install nodemon-----nodemon is a api compiler for nodejs it hotreaload the api pcg when changing



