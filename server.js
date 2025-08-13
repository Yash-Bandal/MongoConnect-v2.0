// const express = require('express')  //cjs

import mongoose from 'mongoose'
import express from 'express';
import { } from 'dotenv/config'   //emca type:module

//Import database with schema
import { MongoConnectDB } from './models/MongoConnectDB.js';

// let conn = await mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("Connection error", err));

let conn = await mongoose.connect("mongodb://localhost:27017/MongoConnectDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Connection error", err));

const app = express()
const port = 4000


app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Middleware to Parse our Form Data
app.use(express.urlencoded({ extended: true }));


//For Trial of successfull connection and checking Schema working

// app.get('/', (req, res) => {

//   //try fail schema
//   // const MDB = new MongoConnectDB({ title: "Hey Yash, this is my code ", desc: "Description", isDone: true })
//   const MDB = new MongoConnectDB({
//     Subject: "Web Development",
//     UserName: "Yash Bandal",
//     RBT: "RBT22IT014",
//     division: "A",
//     mail: "yash@example.com",
//     content: "Add more practicals"
//   });

//   MDB.save()

//   res.render("index", {name: "Yash" })
// })


//To see trial sent document from above

// app.get('/seeData', async (req, res) => {
//   let MDB = await MongoConnectDB.findOne({})
//   MDB.save()

//   res.json({ title: MDB.title, desc: MDB.desc })
// })


//Note : Forms only support Get and Post, not PUT

//<form method="post" action="/insert">
app.post('/insert', async (req, res) => {
  // console.log('BODY RECEIVED:', req.body);  //debug..check if data received

  try {
    const newNoteDoc = new MongoConnectDB({
      Subject: req.body.Subject,
      UserName: req.body.UserName,
      RBT: req.body.RBT,
      division: req.body.division,
      mail: req.body.mail,
      content: req.body.content
    });

    await newNoteDoc.save();

    console.log("New note saved:", newNoteDoc);

    res.redirect('/'); // Redirect back to homepage

  } catch (err) {
    console.error("Error saving note:", err.message);
    res.status(500).send("Failed to save note.");
  }
});



//<form method="post" action="/update">
app.post('/update', async (req, res) => {
  try {
    const filter = { RBT: req.body.originalRBT }; // original RBT
    const update = {
      UserName: req.body.UserName,
      RBT: req.body.RBT,  // updated RBT
      division: req.body.division,
      mail: req.body.mail,     
      content: req.body.content
    };

    // const updatedDoc = await MongoConnectDB.findOneAndUpdate(filter, update, {
    //   new: true
    // });


    if (updatedDoc) {
      console.log("Updated document:", updatedDoc);
      res.redirect('/');
    } else {
      res.status(404).send("No document found for the Given Roll Number.");
    }
// to catch errors of wrong Schema / existing email..etc
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).send("Failed to update note. Check if you entered An existing Email");
  }
});


//<form method="post" action="/delete">
app.post('/delete', async (req, res) => {
  try {
    // const rbt = req.body.originalRBT;
    const rbt = req.body.deleteRBT;

    const result = await MongoConnectDB.deleteOne({ RBT: rbt });

    if (result.deletedCount === 1) {
      console.log(`Document with RBT ${rbt} deleted.`);
      res.redirect('/');
    } else {
      res.status(404).send("No document found with the given RBT.");
    }

  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).send("Failed to delete note.");
  }
});


// <form id="retrieveForm" method="post" action="/retrieve">
// app.post('/retrieve', async (req, res) => {
//   try {
//     const rbtValue = req.body.originalRBT;
//     const retrievedDoc = await MongoConnectDB.findOne({ RBT: rbtValue });

//     if (retrievedDoc) {
//       res.render("index", { retrievedData: retrievedDoc });
//     } else {
//       res.render("index", { retrievedData: null });
//     }

//   } catch (err) {
//     console.error("Retrieve error:", err.message);
//     res.status(500).send("Failed to retrieve data.");
//   }
// });


//with sweet alert
app.post('/retrieve', async (req, res) => {
  const rbtToFind = req.body.originalRBT;
  try {
    const retrieved = await MongoConnectDB.findOne({ RBT: rbtToFind });

    if (retrieved) {
      res.render('index', {
        retrievedData: retrieved,
        retrievalSuccess: true
      });
    } else {
      res.render('index', {
        retrievedData: undefined,
        retrievalSuccess: false
      });
    }
  } catch (err) {
    console.error(err);
    res.render('index', {
      retrievedData: undefined,
      retrievalSuccess: false
    });
  }
});



//Display page and retrieved data
app.get("/", (req, res) => {
  res.render("index", { retrievedData: null });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

