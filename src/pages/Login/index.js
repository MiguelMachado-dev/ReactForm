import React, { Component } from "react";
import { Helmet } from "react-helmet";
import api from "../../services/api";

import { Container, LoginBox } from "./styles";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const userToken = localStorage.getItem("Auth:token");

    // if user has token, push to dashboard home
    if (userToken) {
      const { history } = this.props;
      history.push("/");
    }
  }

  state = {
    usuario: "",
    password: "",
    error: false
  };

  handleLogin = async e => {
    e.preventDefault();
    const { usuario, password } = this.state;
    const login = {
      usuario,
      password
    };

    try {
      const response = await api.post("/signin", login);
      const { history } = this.props;
      const { token } = response.data;
      localStorage.setItem("Auth:token", token);
      this.setState({ error: false });
      history.push("/");
    } catch (err) {
      this.setState({ error: true });
    }
  };

  render() {
    const { usuario, password, error } = this.state;
    return (
      <Container>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login" />
          <meta name="keywords" content="react,helmet,dashboard" />
        </Helmet>
        <LoginBox withError={error}>
          <h1>Acessar Dashboard</h1>

          <form onSubmit={this.handleLogin}>
            <section>
              <input
                type="text"
                name="usuario"
                placeholder="Usuário"
                value={usuario}
                onChange={e => this.setState({ usuario: e.target.value })}
              />
            </section>
            <section>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </section>
            <p>Usuário ou senha inválidos!</p>
            <button type="submit">Entrar</button>
          </form>
        </LoginBox>
      </Container>
    );
  }
}
