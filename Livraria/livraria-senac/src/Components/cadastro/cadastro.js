import React from "react";
import { Titulo, Input, Label, InputUsuario } from "../styles/Texts";
import { Button, ButtonCadastro} from "../styles/Button";
import { Container, FormRow } from "../styles/Containers";

const Cadastro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
  };

  return (
    <div>
      <Titulo>Cadastro</Titulo>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label>Nome:</Label>
          <InputUsuario type="text" name="nome" />
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
    </div>
  );
};

export default Cadastro;
