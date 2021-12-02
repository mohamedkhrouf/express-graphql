const express = require("express")


const {typeDefs,resolvers} = require('./type-resolver-merge')

const { ApolloServer}= require ('apollo-server-express')
const mongoose = require('mongoose')
async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app:app});
    app.use((req,res)=>{
        res.send("hello from express apollo server")
    })
    await mongoose.connect('mongodb://localhost:27017/post-db',{
        useUnifiedTopology:true
    ,  useNewurlParser:true,
    });
    console.log("mongoose connected")
    app.listen(4000,()=>console.log('server runing on port 4000'))
}
startServer();