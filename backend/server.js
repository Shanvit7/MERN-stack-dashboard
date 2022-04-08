const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port=8080;
const cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Shanvit:1234@testCluster.1dq2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Server is Alive!');
})

app.get('/get_data',(req,res)=>{
    MongoClient.connect(uri,{useUnifiedTopology:true})
    .then(async client=>{
        const data = await client.db('main').collection('load').findOne({type:'main_page'});
        delete data._id;
        delete data.type;
        res.send(JSON.stringify(data));
    })
});

app.get('/get_graph_data',(req,res)=>{
    MongoClient.connect(uri,{useUnifiedTopology:true})
    .then(async client=>{
        const data = await client.db('main').collection('graphs').findOne({type:'graph_data'});
        res.send(JSON.stringify(data.graphData));
    })
})

app.get('/get_map_data',(req,res)=>{
    MongoClient.connect(uri,{useUnifiedTopology:true})
    .then(async client=>{
        const data = await client.db('main').collection('graphs').findOne({type:'world_map'});
        console.log(data);
        delete data._id;
        delete data.type;
        res.send(JSON.stringify(data));
    })
});

