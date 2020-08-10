const uuid = require('uuid');
const { find } = require('./../../util/dynamo/operations');

const USER_TABLE_NAME = process.env.USER_TABLE_NAME;

exports.handler = async (event) => {
  console.log('');
  console.log('--------------------');
  console.log('---- getUser/index.js');
  console.log('--------------------');
  console.log({event});

  const id = event.payload.id;
  
  const userObject = await find(id, USER_TABLE_NAME);
  console.log({userObject});

  console.log('--------------------');
  return userObject;
};
