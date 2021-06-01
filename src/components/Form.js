import React, {Component} from 'react';


// Reusable React Input
// Using function
function MyEmailInput(props) {
    function handleChange(e){
        //check if there is a prop name onChange and attaches the event within the function
        if (props.onChange) {
            props.onChange(e)
        }
    }

    return(
        <p>
            <input type="email" placeholder="Your Email here" value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange}/>
        </p>
    )
}

//Using Component class  -> an Input block
class MyCustomComponent extends Component {
    constructor(props){
        super(props)
        this.textInput = null
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.focusTextInput = element => {
            if(this.textInput){
                this.textInput.focus()
            }
        }
    }

    handleChange = (e) => {
        if (this.props.onChange) this.props.onChange(e)
    }

    componentDidMount() {
        this.focusTextInput()
    }

    render() {
        return(
            <div>
                <p><input ref={this.setTextInputRef} type="text" placeholder="Your name" name={this.props.inputUsername} onChange={this.handleChange}/></p>
                <p><textarea ref={node => this.inputContentRef = node} placeholder="Your message" name={this.props.inputContent} required={true} onChange={this.handleChange}></textarea></p>
            </div>
        )
    }
}


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
        }
        // In order to focus on an input with a ref 
        this.inputUsernameRef = React.createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(data);
        // console.log(this.inputUsernameRef.current.value)
    }

    handleInputChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({
            // in order to make the change dynamic the target.name has been used
            // notice that the state key name and the name of the input are both the same
            [e.target.name]: e.target.value
        })
    }

    // componentDidMount() {
    //     this.inputUsernameRef.current.focus()
    //     // this.setState({
    //     //     username: 'James'
    //     // })
    // }

    handleFocusClick = e => {
        e.preventDefault()
        this.inputEmailRef.focus()
        // this.inputUsernameRef.current.focus()
    }
    handleClearClick = e => {
        e.preventDefault()
        this.inputUsernameRef.current.value = ''
        this.setState({
            username: ''
        })
    }

    render() {
        const username = this.state.username
        const email = this.state.email
        return(
            <div>
                <h2>Forms and Inputs</h2>
                <p>Username: {username}</p>
                <form onSubmit={this.handleSubmit}>
                    {/* <p><input ref={this.inputUsernameRef} type="text" placeholder="Your name" name="username" value={username} onChange={this.handleInputChange}/></p> */}
                    <MyEmailInput value={email} name="email" inputRef={node => this.inputEmailRef = node} onChange={this.handleInputChange} />
                    {/* Inline Refs */}
                    {/* <p><textarea ref={node => this.inputContentRef = node} placeholder="Your message" name="content" required={true} ></textarea></p> */}
                    <MyCustomComponent onChange={this.handleInputChange} inputUsername="username" inputContent="content" />
                    <p><button>Submit</button></p>
                    <p><button onClick={this.handleFocusClick}>Focus</button></p>
                    <p><button onClick={this.handleClearClick}>Clear</button></p>
                </form>
            </div>
        )
    }
}

export default Form

