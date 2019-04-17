import React from 'react'


class Home extends React.Component {
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
                Home
            </div>
        )
    }
}


export default Home