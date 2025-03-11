import { Aside, BotaoMenu, Content } from "./styles"
import iconeInicio from "../../../public/casa.png"
import iconeExplorar from "../../../public/explorar.png"
import iconeNotificacoes from "../../../public/notificacao.png"
import iconeMensagens from "../../../public/mensagens.png"
import iconePerfil from "../../../public/perfil.png"

const Sidebar = () => {
    return (
        <Aside>
            <Content>
                <BotaoMenu>
                    <img src={iconeInicio} alt="Icone inicio" />Início</BotaoMenu>
                <BotaoMenu>
                    <img src={iconeExplorar} alt="Icone explorar " />Explorar</BotaoMenu>
                <BotaoMenu>
                    <img src={iconeNotificacoes} alt="Icone notificações " />Notificações</BotaoMenu>
                <BotaoMenu>
                    <img src={iconeMensagens} alt="Icone mensagens" />Mensagens</BotaoMenu>
                <BotaoMenu>
                    <img src={iconePerfil} alt="Icone perfil" />Perfil</BotaoMenu>
                <BotaoMenu className="postar">Postar</BotaoMenu>
            </Content>
        </Aside>
    )
}

export default Sidebar