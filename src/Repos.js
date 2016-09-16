import React, {Component} from 'react'
import UserInfo from './UserInfo'

class Repos extends Component {
  render() {
    return (
    <div>
      <h3>Student Profile</h3>
      <p>{this.props.params.userName}</p>
    </div>
   )
  }
}


  export default Repos
