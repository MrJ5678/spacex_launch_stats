/*
 * @Author: hhhhhq
 * @Date: 2020-06-18 17:46:16
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-19 10:06:10
 * @Description: file content
 */

import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <>
        <h1 className="display-4 my-3">launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return '网络超时...'
            else {
              return (
                <>
                  {
                    data.launches.map((launch) => {
                      return (
                        <LaunchItem key={launch.flight_number} launch={launch} />
                    );
                  })}
                </>
              );

            }
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
