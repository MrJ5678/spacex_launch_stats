/*
 * @Author: hhhhhq
 * @Date: 2020-06-19 09:48:55
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-19 10:27:42
 * @Description: file content
 */ 
import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch (flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

export default class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params
    flight_number = parseInt(flight_number)
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {
            ({ loading, error, data }) => {
              if(loading) return <h4>loading...</h4>
              if(error) {
                console.log(error);
                return <div>出错</div>
              } else {
                const {
                  flight_number,
                  mission_name,
                  launch_year,
                  launch_success,
                  rocket: {
                    rocket_id,
                    rocket_name,
                    rocket_type,
                  }
                } = data.launch

                return (
                  <div>
                    <h1 className="display-4 my-3">
                      <span className="text-dark">Mission: </span>
                      {mission_name}
                    </h1>
                    <h4 className="mb-3">
                      launch details
                    </h4>
                    <ul className="list-group">
                      <li className="list-group-item">Flight number: {flight_number}</li>
                      <li className="list-group-item">Flight year: {launch_year}</li>
                      <li className="list-group-item">Flight successful: {launch_success ? 'Yes': 'no'}</li>
                    </ul>

                    <h4 className="mb-3">
                      rocket details
                    </h4>
                    <ul className="list-group">
                      <li className="list-group-item">Rocket id: {rocket_id}</li>
                      <li className="list-group-item">Rocket name: {rocket_name}</li>
                      <li className="list-group-item">Rocket type: {rocket_type}</li>
                    </ul>
                    <hr/>
                    <Link to="/" className="btn btn-secondary" >back home</Link>
                  </div>
                )
              }
            }
          }
        </Query>
      </>
    )
  }
}
