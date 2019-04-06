import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser} from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import NotFound from './components/NotFound.js'
import AuthContainer from './components/AuthContainer.js';
import Home from './components/Home.js'
import Test from './components/Test.js'
import Navbar from './components/Nav.js'

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
                    component={PostList}
                    token={token} />
                  
                    {/* <Route path="*" component={NotFound} />   */}
                <ProtectedRoute path="/Home" component={Home} token={token} redirectTo="/" />
                <ProtectedRoute path="/Test" component={Test} token={token} redirectTo="/" />
                <ProtectedRoute path="*" redirectTo="" component={NotFound} /> 
             </Switch>
             {token && <Navbar  logout={logout}/>}
        </div>
      )
  }
}

export default withUser(App)