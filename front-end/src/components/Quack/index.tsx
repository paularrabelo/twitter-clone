import fotoPerfil from '../../assets/Captura de tela 2024-11-13 105851.png'
import { ContainerContentQuack, ContainerHeaderQuack, ContainerInteracoesQuack, ContainerQuack, ImagemPerfilQuack } from './styles'

const Quack = () => {
    return (
        <ContainerQuack>
            <ContainerHeaderQuack>
                <ImagemPerfilQuack src={fotoPerfil} alt="" />
                <p>Paula Rabelo</p>
                <p>@paularabelo</p>
                <p>data</p>
            </ContainerHeaderQuack>
            <ContainerContentQuack>
                <h1>Conteudo do post</h1>
                <img src="" alt="" /> 
            </ContainerContentQuack>
            <ContainerInteracoesQuack>
                    <input type="checkbox" />
                    <svg id="Layer_1" version="1.0" viewBox="0 0 24 24"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
            </ContainerInteracoesQuack>
        </ContainerQuack>
    )
}

export default Quack