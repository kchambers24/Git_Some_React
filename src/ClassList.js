import React, {Component} from 'react'
import { Link } from 'react-router'
import UserInfo from './UserInfo'


class ClassList extends Component {

  render() {
    return (
  <div>
    <ul>
      <li><Link to="/classlist/linsydeanna">Linsy</Link></li>
       <li><Link to="/classlist/lakeblack">Lake</Link></li>
       <li><Link to="/classlist/kchambers24">Kevin</Link></li>
       <li><Link to="/classlist/eddanieles">Ed</Link></li>
       <li><Link to="/classlist/brandonkhilton">Brandon</Link></li>
       <li><Link to="/classlist/josephrstraub">Joe</Link></li>
       <li><Link to="/classlist/bheptin">Bama</Link></li>
    </ul>
  {this.props.children}
    </div>
   )
  }
}

export default ClassList
