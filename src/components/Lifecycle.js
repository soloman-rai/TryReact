import React, {Component} from 'react';


class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true, 
            text: 'Welcome guys'
        }
        //base of the component
    }

    updateHeading = event => {
        this.setState({
            text: "Hello there!"
        })
    }

    render() {
        const loading = this.state.loading
        return (
            <div>
                <h1 onClick={this.updateHeading}>{loading === true ? "Hello World!" : this.state.text}</h1>
            </div>
        )
    }

    componentDidMount() {
        //states can be changed
        // can include async code and API calls
        this.setState({
            loading: false
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshop) {
    //     if(this.props != prevProps) {
    //         this.setState({
    //             loading: true
    //         })
    //         console.log('component updated')
    //     }
    // }

    componentWillUnmount(){
        this.setState({
            loading: true
        })
        console.log(this.state)
    }
}

export default Lifecycle