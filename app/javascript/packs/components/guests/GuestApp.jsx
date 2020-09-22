import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import setAxiosHeaders from "../AxiosHeaders";

class GuestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      errors: {
        name: '',
        email: ''
      }
    };
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.submitRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {

  // }
  handleSubmit(e) {
    e.preventDefault();
    setAxiosHeaders();
    const name = this.nameRef.current.value
    const email = this.emailRef.current.value
    this.setState({
      name: name,
      email: email
    })
    axios
      .post('/api/v1/guests', {
        guest: {
          name: name,
          email: email,
        }
      })
      .then(response => {
        const guest = response.data
        const errors = guest.errors
        console.log(guest)
        if (Object.keys(errors).length) {
          this.setState({
            errors: { ...errors },
          });
          this.submitRef.current.disabled = false
        } else {
          window.location.href = '/guests/new';
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const errors = this.state.errors
    console.log(!!(errors.name))
    return(
      <form onSubmit={this.handleSubmit}>
        <p>名前</p>
        <input
          type="text"
          name="guest[name]"
          id="guest_name"
          ref={this.nameRef}
          className={`form-control ${!!(errors.name) ? `is-invalid` : ``}`}
        />
        <span className="invalid-feedback">{errors.name}</span>
        <p>メールアドレス</p>
        <input
          type="text"
          name="guest[email]"
          id="guest_email"
          ref={this.emailRef}
          className={`form-control ${!!(errors.name) ? `is-invalid` : ``}`}
        />
        <span className="invalid-feedback">{errors.email}</span>
        <input
          type="submit"
          name="commit"
          value="保存"
          data-disable-with="保存中..."
          ref={this.submitRef}
        />
      </form>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('guest-app')
  app && ReactDOM.render(<GuestApp />, app)
})
