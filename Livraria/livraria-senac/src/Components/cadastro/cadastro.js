import React from "react";
import { Titulo, Input, Label } from "../styles/Texts";
import { Button, ButtonCadastro} from "../styles/Button";
import { Container, FormRow } from "../styles/Containers";

const Cadastro = () => {
  return (
    <div>
      <Titulo>Bem-Vindo, faça seu cadastro</Titulo>
      <Container>
        <form>
          <FormRow>
            <Label>Nome:</Label>
            <Input type="text" name="nome" />
          </FormRow>
          <FormRow>
            <Label>Email:</Label>
            <Input type="email" name="email" />
          </FormRow>
          <FormRow>
            <Label>Senha:</Label>
            <Input type="password" name="senha" />
          </FormRow>
          <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
        </form>
      </Container>
    </div>
  );
};

export default Cadastro;
