/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 11:01:24
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-18 11:17:24
 * @Description: file content
 */ 
const express = require('express')

const graphqlHTTP = require('express-graphql')
const schema = require('./schemas')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)