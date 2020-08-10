# Code server Serverless and fronted React

Backend
  - Serverless
  - AppSync
  - DynamoDB
  - Layers
  - Lamdas

Frontend
  - Typescript
  - React
  - Redux
  - Apollo CLI
  - Functional Web Development.

### Installation

Requires [Node.js]

Requires [Ruby] and [Rails]

Install the dependencies and devDependencies and start the server.

```sh
$ docker-compose up -d --build
```

TEST Graphql

```sh
$ header "x-api-key": "API"

Query 

query listUsers {
    listUsers {
        items {
            id
            username
            birthDate
            email
        }
    }
}


Mutation


mutation {
    createUser (
        input: {
            username: "testUsername",
            password: "12345£1234",
            email: "mail@test.com",
            birthDate: "1990-01-01"
        }
    ) {
        id
        username
        password
        birthDate
    }
}
```

