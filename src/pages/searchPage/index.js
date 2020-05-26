import React, { Component } from 'react';
import "./styles.css"
import api from "../../services/api"

export default class searchPage extends Component {

    state = {
        errorMsg: '',
        extension: '',
        response: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        var response;
        await api
            .post('/json', {
                errorMsg: this.state.errorMsg,
                extension: this.state.extension
            })
            .then(function (res) {
                response = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
        this.props.history.push({
            pathname: '/res',
            state: { detail: response }
        })
        console.log(response);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    render() {
        return (
            <>
                <form
                    onSubmit={this.handleSubmit}>
                    <textarea
                        name="errorMsg"
                        placeholder="Cole seu código aqui"
                        onChange={this.handleChange}
                    />
                    <select
                        name="extension"
                        placeholder="Selecione a linguagem"
                        onChange={e => this.setState({
                            extension: e.target.value
                        })}
                    >
                        <option selected>Selecione a linguagem</option>
                        <option value=".java">Java</option>
                        <option value=".c">C</option>
                        <option value=".cpp">C++</option>
                        <option value=".py">Python</option>
                    </select>
                    <button type="submit">Traduzir</button>
                </form>
            </>
        )
    }
}