import React, { Component } from 'react';
import "./styles.css"
import api from "../../services/api"


import java from "../../assets/linguagens/java.png"
import cpp from "../../assets/linguagens/c++.png"
import python from "../../assets/linguagens/python.png"
import c from "../../assets/linguagens/c.png"

export default class searchPage extends Component {
    state = {
        errorMsg: '',
        extension: '',
        response: '',
        links: []
    }

    handleSubmit = async e=> {
        e.preventDefault();
        var response;
        var links;
        await api
            .post('/json', {
                errorMsg: this.state.errorMsg,
                extension: this.state.extension
            })
            .then(function (res) {
                response = res.data.data[0].eme_msg;
                links = res.data.data[0].help_links;
                console.log(res.data.data);
                console.log(links);
            })
            .catch((err) => {
                console.log(err);
            });
        this.setState({ response: response });
        if (links !== '') { this.setState({ links: links }) };
        console.log(this.state.links);
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
                    <nav>
                        <div className="select">
                            <div
                                className="click"
                                onClick={e => this.setState({
                                    extension: ".java"
                                })}
                            >
                                <img className={this.state.extension === ".java" ? "image-click-selected" : "image-click"} src={java} alt="java" />
                            </div>
                            <div
                                className="click"
                                onClick={e => this.setState({
                                    extension: ".c"
                                })}
                            >
                                <img className={this.state.extension === ".c" ? "image-click-selected" : "image-click"} src={c} alt="c" />
                            </div>
                            <div
                                className="click"
                                onClick={e => this.setState({
                                    extension: ".cpp"
                                })}
                            >
                                <img className={this.state.extension === ".cpp" ? "image-click-selected" : "image-click"} src={cpp} alt="cpp" />
                            </div>
                            <div
                                className="click"
                                onClick={e => this.setState({
                                    extension: ".py"
                                })}
                            >
                                <img className={this.state.extension === ".py" ? "image-click-selected" : "image-click"} src={python} alt="python" />
                            </div>
                        </div>
                        <ul className="menu">
                            <li><a href="#">Links de ajuda</a>
                                <ul>
                                    <li>
                                        {this.state.links.map(links => (
                                            <a href={links} target="_blank" >{links}</a>
                                        ))
                                        }
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <button className="button" type="submit">Traduzir</button>
                </form>
            </>
        )
    }
}