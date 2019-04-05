import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { withUser } from '../context/UserProvider.js'

class AuthContainer extends Component {
    constructor(){
          super()
          this.state = {
                username: "",
                password: "",
                authToggle: false

          }
    }

    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    handleSignUp = e => {
        e.preventDefault()

        const credentials={
          username: this.state.username,
          password: this.state.password
        }
        this.props.signup(credentials)

    }

    handleLogin = e =>{
      e.preventDefault()

      const credentials = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.login(credentials)
    }

    toggler = () => {
        this.setState(prevState => ({
            authToggle: !prevState.authToggle
        }))
    }

    render(){
      return(
          <div>
            { this.state.authToggle ?

            <AuthForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSignUp}
                username={this.state.username}
                password={this.state.password}
                btnText="Sign Up"
            
            />

            :

            <AuthForm
                handleChange={this.handleChange}
                handleSubmit={this.handleLogin}
                username={this.state.username}
                password={this.state.password}
                btnText="Log In"
            />  

            }
          </div>
      )
    }
}

export default withUser(AuthContainer)