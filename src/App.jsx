import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import api from './api/api' //api,将api挂载到react props上之后全局都可以通过props进行调用

import './App.scss'

import routes from './route/router'
import RouteIntercept from './components/RouteIntercept' //路由守卫

/**
 * 辅助函数 方便进行 路由配置,路由拦截等操作
 * @param {路由} route 
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <RouteIntercept api={api} {...route} {...props} />
      )}
    />
  );
}

class App extends Component {

  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <Router>

          {
            routes.map((row, index) => {
              return (
                <RouteWithSubRoutes key={index} {...row} />
              )
            })
          }
        </Router>
      </div>
    )
  }
}

export default App
