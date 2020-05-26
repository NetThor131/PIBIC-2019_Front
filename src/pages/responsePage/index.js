import React, { Component } from 'react';
import "./styles.css"
import { Link } from "react-router-dom";

export default class responsePage extends Component {

    render() {
        return (
            <>
                <textarea value={this.props.resposta}/>
                <button>
                    <Link to="/">Voltar</Link>
                </button>
            </>
        )
    }
}