const uuid = require('uuid');
const { list } = require('./../../util/dynamo/operations');

const USER_TABLE_NAME = process.env.USER_TABLE_NAME;

exports.handler = async (event) => {
  console.log('');
  console.log('--------------------');
  console.log('---- listUsers/index.js');
  console.log('--------------------');
  console.log({event, USER_TABLE_NAME});
    
  try {
    const {payload} = event;
    const {nextToken, limit} = payload;
    
    const users = await list({
      limit,
      nextToken,
      tableName: USER_TABLE_NAME
    });
    console.log('users:', users.items);

    console.log('--------------------');
    return users;
  } catch (err) {
    console.log({err});
    return [];
  }
  
};
