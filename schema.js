/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 11:07:49
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-18 11:07:49
 * @Description: file content
 */ 
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql')

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fileds: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
})

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fileds: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  })
})