import React, {Component} from 'react';


class ParentWrapper extends Component{
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

// export default ParentWrapper


// Always export using Component instead of other custom components
// Or Alternatively do this to extend (share) Parent Components
function AlertBox(props) {
    return (
        <div>
            <h1 className={"alert alert-" + props.alertType}>Hello World</h1>
        </div>
    )
    
}

function WelcomeDialog() {
    return <AlertBox alertType="success">Some New Content</AlertBox>
}

export default WelcomeDialog

// the component default can be of different name that the one being imported

// only one default export can be done 
// other export should be done like this:
export {AlertBox, ParentWrapper}