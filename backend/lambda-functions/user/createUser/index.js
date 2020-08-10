const uuid = require('uuid');
const moment = require('moment');
const { insertOrReplace } = require('./../../util/dynamo/operations');
const { USER_TABLE_NAME } = process.env;

exports.handler = async (event) => {
  console.log('');
  console.log('--------------------');
  console.log('---- createUser/index.js');
  console.log('--------------------');
  console.log({event});

  try {
    const createUserInput = event.payload.input;
  
    const dateNowStr = moment().format();
    const cognitoSub = (process.env.IS_OFFLINE) 
      ? 'MOCKED_' + uuid()
      : event.identity.sub
    ;

    const newUser = {
      id: cognitoSub,
      cognitoSub,
      ...createUserInput,
      createdAt: dateNowStr,
      updatedAt: dateNowStr
    };
    console.log({newUser});

    const user = await insertOrReplace(newUser, USER_TABLE_NAME);
    console.log({user});

    return user;
  } catch (err) {
    console.log(err);
    return {id: 11};
  }
  
};
