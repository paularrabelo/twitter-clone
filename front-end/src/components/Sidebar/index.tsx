import { Aside, BotaoMenu, Content } from "./styles"
import iconeInicio from "../../../public/casa.png"

const Sidebar = () => {
    return (
        <Aside>
            <Content>
                <BotaoMenu>
                    <img src={iconeInicio} alt="Icone inicio" />Inicio</BotaoMenu>
                <BotaoMenu>Explorar</BotaoMenu>
                <BotaoMenu>Notificações</BotaoMenu>
                <BotaoMenu>Mensagens</BotaoMenu>
                <BotaoMenu>Perfil</BotaoMenu>
                <BotaoMenu>Postar</BotaoMenu>
            </Content>
        </Aside>
    )
}

export default Sidebar