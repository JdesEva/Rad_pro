import React from 'react'


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this)
        this.props.api.post('/process_post').then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                INDEX
            </div>
        )
    }
}


export default Index