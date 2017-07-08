// import React from 'react';
//
// export default class ServiceRundown extends React.Component {
//   render () {
//     return (
//       <div>
//         ServiceRundown Panel
//       </div>
//     );
//   };
// };

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class ServiceRundown extends React.Component {
  render() {
    return (
      <div>
        ServiceRundown Panel
      </div>
    );
  }
}

ServiceRundown.propTypes = {
  loginWithPassword: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, ServiceRundown);
