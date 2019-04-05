import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser} from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import NotFound from './components/NotFound.js'
import AuthContainer from './components/AuthContainer.js';

class App extends Component{
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }

  render(){
      const { token, logout, signup, login } = this.props
      return (
        <div>
            {/* {!token && <button onClick={() => this.props.history.push("/")}>Login</button>} */}
            {token && <button onClick={logout}>Logout</button>}
            <Switch>
                <Route  exact path="/" render={rProps => 
                                                token
                                                ? <Redirect to ="/posts" />
                                                : <AuthContainer
                                                       {...rProps}
                                                       signup={signup}
                                                       login={login}/>} />
                <ProtectedRoute 
                    path={"/posts"} 
                    redirectTo="/" 
                    component={PostList} />
                <ProtectedRoute path="*" redirectTo="" component={NotFound}/>   
                {/* <Route path="*" component={NotFound} />   */}
            </Switch>
        </div>
      )
  }
}

export default withUser(App)