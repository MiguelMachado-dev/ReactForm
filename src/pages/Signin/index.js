import React from "react";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";

import { Container, LoginBox } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  usuario: Yup.string().required("Campo obrigatório"),
  password: Yup.string()
    .min(3, "Mínimo de 3 caractéres")
    .required("Campo obrigatório")
});

function Signin() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Container>
        <LoginBox>
          <h1>Cadastro</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <section>
              <Input name="name" placeholder="Nome" />
            </section>
            <section>
              <Input name="usuario" placeholder="Usuário" />
            </section>
            <section>
              <Input name="password" type="password" placeholder="Senha" />
            </section>
            <button type="submit">Enviar</button>
          </Form>
          <a href="/login">Já sou cadastrado!</a>
        </LoginBox>

        <span>
          A signup page using <br />
          <span>
            <a href="https://github.com/Rocketseat/unform">unform</a>
          </span>
        </span>
      </Container>
    </>
  );
}

export default Signin;
