import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import { withUser} from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'

class App extends Component{
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }

  render(){
      const { token, logout } = this.props
      return (
        <div>
            {token && <button onClick={logout}>Logout</button>}
            <Switch>
                <Route  exact path="/" render={rProps => <Auth {...rProps}/>} />
                <Route path="/posts" render={rProps => <PostList {...rProps} />} />
            </Switch>
        </div>
      )
  }
}

export default withUser(App)