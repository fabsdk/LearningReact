import React from "react";
import { Titulo, Label, InputUsuario } from "../styles/Texts";
import { ButtonCadastro } from "../styles/Button";
import { CadastroContainer, ContainerCaixa, FormRow, CenterDiv } from "../styles/Containers";
import "./login.css";

const Cadastro = () => {
  return (
    <CenterDiv>
      <Titulo color="white">Olá novamente, faça seu login</Titulo>
      <ContainerCaixa>
        <form>
          <CadastroContainer>
            <FormRow>
              <Label>Email:</Label>
              <InputUsuario type="email" name="email" />
            </FormRow>
            <FormRow>
              <Label>Senha:</Label>
              <InputUsuario type="password" name="senha" />
            </FormRow>
            <ButtonCadastro type="submit">Login</ButtonCadastro>
          </CadastroContainer>
        </form>
      </ContainerCaixa>
    </CenterDiv>
  );
};

export default Cadastro;
