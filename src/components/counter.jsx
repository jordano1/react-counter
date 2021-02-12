import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
    }

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div className="container">
                <span className={this.getButtonClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        )
    }
    getButtonClasses() {
        let cssClasses = 'badge m-2 badge-'
        cssClasses += this.state.count === 0 ? 'warning' : 'primary p-2'
        return cssClasses
    }

    formatCount() {
        const { count } = this.state
        const x = <h6>Zero</h6>
        return count === 0 ? x : count
    }
}

export default Counter
