/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 11:01:24
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-18 17:04:34
 * @Description: file content
 */ 
const express = require('express')

const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is running on ${PORT}`))