import React from 'react'
import './404.scss'


class ErrorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div className="not-page">
                404 页面飞去火星啦
            </div>
        )
    }
}


export default ErrorPage