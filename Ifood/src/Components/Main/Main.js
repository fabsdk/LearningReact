
import { Button, Toolbar, Typography } from "@mui/material";
import './Main.css';

function Main() {
    return (
        <>
            <div className="main">

                <section className="categorias-ifood">
                    <div className="categoria-item-maior item-hambuguer">
                        <h2>Restaurante</h2>
                        <p>Ver opções</p>
                        <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"></img>
                    </div>
                    <div 
                    className="categoria-item-maior item-carrinho">
                        <h2>Mercado</h2>
                        <p>Buscar lojas</p>
                        <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/market.png"></img>
                    </div>
                </section>
            </div>
        </>
    );
}


export default Main;