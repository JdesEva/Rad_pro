import React from 'react';
import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// 引入renderToString
import { renderToString } from 'react-dom/server';
// 服务端是没有BrowserRouter 所以用StaticRouter
import { StaticRouter } from "react-router-dom";
// 引入reducer
import reducers from "../src/store/combineReducer";
// 引入前端路由
import Routers from '../src/route/router'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
));

const express = require('express')
const path = require('path')

const app = new express()

const router = express.Router()

router.get('*', (req, res, next) => {
    const context = {}
    const frontComponents = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>
                <Routers />
            </StaticRouter>
        </Provider>
    )
    res.send(frontComponents)
})

app.use(router)

app.use('/', express.static(path.resolve('./build')))


app.listen(1234, function () {
    console.log(`The server is running at localhost:1234`)
})