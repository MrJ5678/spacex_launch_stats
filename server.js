/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 11:01:24
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-18 18:09:50
 * @Description: file content
 */ 
const express = require('express')
const cors = require('cors')

const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is running on ${PORT}`))