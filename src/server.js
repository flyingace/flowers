/* eslint no-underscore-dangle: off */

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const { ObjectID } = mongodb;

const POEMS_COLLECTION = 'poems';

const app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback
// to reuse the connection pool in your app.
let db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
  (err, client) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log('Database connection ready');

    // Initialize the app.
    const server = app.listen(process.env.PORT || 8080, () => {
      const { port } = server.address();
      console.log('App now running on port', port);
    });
  }
);

// CONTACTS API ROUTES BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log(`ERROR:  ${reason}`);
  res.status(code || 500).json({ error: message });
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get('/api/poems', (req, res) => {
  db.collection(POEMS_COLLECTION)
    .find({})
    .toArray((err, docs) => {
      if (err) {
        handleError(res, err.message, 'Failed to get poems.');
      } else {
        res.status(200).json(docs);
      }
    });
});

app.post('/api/poems', (req, res) => {
  const newContact = req.body;

  if (!req.body.title) {
    handleError(res, 'Invalid input', 'Poem must have a title.', 400);
  } else {
    db.collection(POEMS_COLLECTION).insertOne(newContact, (err, doc) => {
      if (err) {
        handleError(res, err.message, 'Failed to create new poem.');
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get('/api/poems/:id', (req, res) => {
  db.collection(POEMS_COLLECTION).findOne(
    { _id: new ObjectID(req.params.id) },
    (err, doc) => {
      if (err) {
        handleError(res, err.message, 'Failed to get poem');
      } else {
        res.status(200).json(doc);
      }
    }
  );
});

app.put('/api/poems/:id', (req, res) => {
  const updateDoc = req.body;
  delete updateDoc._id;

  db.collection(POEMS_COLLECTION).updateOne(
    { _id: new ObjectID(req.params.id) },
    updateDoc,
    (err, doc) => {
      if (err) {
        handleError(res, err.message, 'Failed to update poem');
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
    }
  );
});

app.delete('/api/poems/:id', (req, res) => {
  db.collection(POEMS_COLLECTION).deleteOne(
    { _id: new ObjectID(req.params.id) },
    (err, result) => {
      if (err) {
        handleError(res, err.message, 'Failed to delete poem');
      } else {
        res.status(200).json(req.params.id);
      }
    }
  );
});
