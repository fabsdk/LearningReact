
import { Button, Toolbar, Typography } from "@mui/material";
import './Header.css';

function Header() {
    return (
        <>
            <div className="body">
                <div className="text-ifood">
                    <h1>Faça mercado no iFood</h1>
                    <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
                </div>

                <div className="input-endereco">
                    <input type="text" class="search-input" placeholder="Em qual endereço você está?"></input>
                    <Button>Ver mercados próximos</Button>
                </div>

                <div className="opcoes">
                    <button class="opcoes-button">Frios</button>
                    <button class="opcoes-button">Laticínios</button>
                    <button class="opcoes-button">Feira</button>
                    <button class="opcoes-button">Bebidas</button>
                    <button class="opcoes-button">Doces</button>
                    <button class="opcoes-button">Massas frescas</button>
                    <button class="opcoes-button">Limpeza</button>
                    <button class="opcoes-button">Padaria</button>
                    <button class="opcoes-button">Higiene</button>
                    <button class="opcoes-button">Congelados</button>
                    <button class="opcoes-button">Carnes</button>
                </div>

                <div className="gray"> 

                </div>
            </div>
        </>
    );
}


export default Header;
