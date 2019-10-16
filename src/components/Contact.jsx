import React from 'react';
import './Contacts.css';

class Contact extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: props.online /** Au départ user: false - c'est le bonus react challenge 5 */
    };
  }
  render() {
    return (
      <div className="Contact">
        <img src={this.props.avatar} className = "avatar" alt = {this.props.avatar}/> 
        <div className="status">
          <h4 className="name">{this.props.name}</h4>
          <div className="status-bloc" onClick={event => {
            const newuser = !this.state.user;
            this.setState({ user: newuser }); /** setState manova an i user lasa newuser **/
            }}>
            <p className={this.state.user ? 'status-online' : "status-offline"}></p>
            <p className="status-text">{this.state.user ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;


