const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/flowers_of_bad';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err) => {
  console.log('connected successfully');
  console.log(err);
  client.close();
});

function performDBOperation(operation) {
  client.connect((err) => {
    operation();
    console.log(err);
    client.close();
  });
}

performDBOperation(() => {
  console.log('eat crackers');
});
