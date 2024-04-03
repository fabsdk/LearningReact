
import { Button, Toolbar, Typography } from "@mui/material";
import './AppBar.css';

function AppBar() {
    return (
        <>
            <Toolbar className="toolbar">
                <Typography className="logo"><img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png"></img></Typography>
                <div className="navLinks">
                    <Typography className="link" href="">Entregador</Typography>
                    <Typography className="link" href="">Restaurante e Mercado</Typography>
                    <Typography className="link" href="">Carreiras</Typography>
                    <Typography className="link" href="">iFood Card</Typography>
                </div>
                <div className="nav-final-links">
                    <Typography className="link link-final" href="">criar conta</Typography>
                    <Button>Entrar</Button>
                </div>

            </Toolbar>
        </>
    );
}


export default AppBar;
