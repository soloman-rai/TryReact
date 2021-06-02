import React, {Component} from 'react';


class Timer extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        const count = this.state.count
        return(
            <div>
                <h1>Current Count: {count}</h1>
            </div>
        )
    }

    // Default JS methods setInterval and clearInterval
    componentDidMount() {
        const startCount = this.props.startCount
        this.setState({
            count: startCount
        })
        this.changeInterval()
    }

    changeInterval() {
        this.myInterval = setInterval(() => {
            // this.setState({
            //     count: this.state.count + 1
            // })
            //OR
            if (this.state.count < 10){
                this.setState(prevState => ({
                    count: prevState.count + 1
                }))
            } 
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.myInterval)
    }
}

export default Timer