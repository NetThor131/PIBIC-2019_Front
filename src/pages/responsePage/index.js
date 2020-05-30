import React, { Component } from 'react';
import "./styles.css"

export default class responsePage extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/',
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <textarea id="textarea" value={this.props.location.state.detail} />
                    <button className="button" >Voltar</button>
                </form>
            </>
        )
    }
}