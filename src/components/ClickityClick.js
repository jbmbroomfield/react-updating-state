import React from 'react'

export default class ClickityClick extends React.Component {

    constructor() {
        super()

        this.state = {
            hasBeenClicked: false,
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
        }, () => console.log(this.state.hasBeenClicked))
        console.log(this.state.hasBeenClicked)
    }

    render() {
        const state = this.state
        return (
            <div>
                <p>I have {state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
