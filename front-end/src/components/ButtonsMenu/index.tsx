import iconeInicio from "../../assets/casa.png"
import iconeExplorar from "../../assets/explorar.png"
import iconeNotificacoes from "../../assets/notificacao.png"
import iconeMensagens from "../../assets/mensagens.png"
import iconePerfil from "../../assets/perfil.png"
import { BotaoMenu } from "./styles"

const BotoesMenu = () => {
    return (
        <>
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
        </>
    )
}

export default BotoesMenu