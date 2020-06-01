import React, { Component } from 'react';
import "./styles.css"
import api from "../../services/api"
import Select from 'react-select'

import java from "../../assets/linguagens/java.png"
import cpp from "../../assets/linguagens/c++.png"
import python from "../../assets/linguagens/python.png"
import c from "../../assets/linguagens/c.png"

const options = [
    { value:'.java', label:'Java' },
    { value:'.c', label:'C' },
    { value:'.cpp', label:'C++' },
    { value:'.py', label:'Python' }
]

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
        this.setState({ response: response });
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
                    <div className="textarea">
                        <textarea
                            name="errorMsg"
                            placeholder="Cole sua mensagem de erro aqui"
                            onChange={this.handleChange}
                        />
                        <textarea placeholder=">" value={this.state.response} />
                    </div>
                    <div className="select">
                        <div
                            className="click"
                            onClick={e => this.setState({
                                extension: ".java"
                            })}
                        >
                            <img className="image-click" src={java} alt="java" />
                        </div>
                        <div
                            className="click"
                            onClick={e => this.setState({
                                extension: ".c"
                            })}
                        >
                            <img className="image-click" src={c} alt="c" />
                        </div>
                        <div
                            className="click"
                            onClick={e => this.setState({
                                extension: ".cpp"
                            })}
                        >
                            <img className="image-click" src={cpp} alt="cpp" />
                        </div>
                        <div
                            className="click"
                            onClick={e => this.setState({
                                extension: ".py"
                            })}
                        >
                            <img className="image-click" src={python} alt="python" />
                        </div>
                    </div>
                    <button className="button" type="submit">Traduzir</button>
                </form>
            </>
        )
    }
}