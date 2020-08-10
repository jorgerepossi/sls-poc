const AWS = require('aws-sdk');
const _ = require('lodash');

const DEFAULT_LIMIT = process.env.DEFAULT_LIST_LIMIT;
const IS_OFFLINE = process.env.IS_OFFLINE;
const REGION = IS_OFFLINE 
  ? 'localhost'
  : process.env.REGION
;
const DYNAMODB_ENDPOINT = IS_OFFLINE 
  ? process.env.DYNAMODB_ENDPOINT
  : null
;

const dynamoOpts = {region: REGION};
if (IS_OFFLINE) {
  dynamoOpts.endpoint = DYNAMODB_ENDPOINT;
}

const docClient = new AWS.DynamoDB.DocumentClient(dynamoOpts);

const insertOrReplace = async (item, tableName) => {
  const params = {
    TableName: tableName,
    Item: item,
  };

  const result = await docClient.put(params).promise();

  return item;
}

const find = async (id, tableName) => {
  const params = {
    Key: {id},
    TableName: tableName,
  };

  const result = await docClient.get(params).promise();

  if (_.isEmpty(result)) {
    return null;
  } else {
    return result.Item;
  }
}

const getWhereIdIn = async (ids, tableName) => {
  const keys = [];
  for (const id of ids) {
    keys.push({id});
  }

  const params = {RequestItems: {}};
  params.RequestItems[tableName] = {Keys: keys};

  try{
    const result = await docClient.batchGet(params).promise();

    const items = result.Responses[tableName];

    if (_.isEmpty(items)) {
      return [];
    }
    return items;
  } catch(err) {
    return [];
  }
}

const list = async ({tableName, limit, nextToken}) => {
  if (!limit) {
    limit = DEFAULT_LIMIT;
  }

  const params = {
    Limit: limit,
    TableName: tableName,
  };
  if (nextToken) {
    params.ExclusiveStartKey = {id: nextToken};
  }

  const result = await docClient.scan(params).promise();

  let newNextToken = null;
  if (_.has(result, 'LastEvaluatedKey')) {
    newNextToken = result.LastEvaluatedKey.id;
  }

  return {
    nextToken: newNextToken,
    items: result.Items
  };
}

const query = async ({
  tableName, 
  indexName, 
  hashIndexOpts, 
  rangeIndexOpts={}
}) => {
  const {attrName, attrValue, operator} = hashIndexOpts;

  const params = {
    TableName: tableName,
    IndexName: indexName, 
    KeyConditionExpression: `${attrName} ${operator} :hkey`,
    ExpressionAttributeValues: {
      ':hkey': attrValue,
    }
  };

  const result = await docClient.query(params).promise();

  return result.Items;
}

const update = async ({tableName, id, data}) => {
  const updateExpressions = [];
  const expressionsValues = {};
  for (const fieldName of Object.keys(data)) {
    const fieldValue = data[fieldName];
    updateExpressions.push(`${fieldName} = :${fieldName}`);
    expressionsValues[`:${fieldName}`] = fieldValue;
  }
  const updateExpression = 'set ' + updateExpressions.join(', ');

  const params = {
    TableName: tableName, 
    Key: {id},
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionsValues
  };

  const result = await docClient.update(params).promise();

  return result;
}


module.exports = {
  find,
  list,
  query,
  update,
  getWhereIdIn,
  insertOrReplace
};