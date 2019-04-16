import React from 'react'
import './index.css'

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <div>
                Loading
            </div>
        )
    }
}


export default Loading