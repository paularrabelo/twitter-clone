import fotoPerfil from '../../assets/Captura de tela 2024-11-13 105851.png'
import { ContainerContentQuack, ContainerHeaderQuack, ContainerInteracoesQuack, ContainerQuack, ImagemPerfilQuack, TextHeader } from './styles'
import imagemTeste from '../../assets/Captura de tela 2024-11-13 105851.png'

const Quack = () => {
    return (
        <ContainerQuack>
            <ContainerHeaderQuack>
                <ImagemPerfilQuack src={fotoPerfil} alt="" />
                <p>Paula Rabelo</p>
                <TextHeader>@paularabelo</TextHeader>
                <TextHeader>04/04/2025</TextHeader>
            </ContainerHeaderQuack>
            <ContainerContentQuack>
                <h1>Conteudo do post</h1>
                <img src={imagemTeste} alt="imagem teste" /> 
            </ContainerContentQuack>
            <ContainerInteracoesQuack>
                <input type="checkbox" />
                <svg id="Layer_1" version="1.0" viewBox="0 0 24 24"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2VMW7CMBSGPYVL4FBVnbhETsEFsNutBygdGO2KiWswIhuppVdoJqbMMVIO4KdGGVy9BCaEUeIGMfBJ1lOk5//LkyybkDs3zcNiP6LCfFNpylga12bRZs/2UZrYKzkI3sbzXdT2B8fzXUSFmcUi//JLpCm7CI48LbMBZhAfODYJJL6UcR2JMFnvkhCoNOnwY5+gBCsV+Q/5b4ZNcFEfZ5EX+H3S9LyBhClbYQ0SybzyCKDgGhzWENFZuIIUg1FSVwUp6QuuIfhkMG2z3iX8UsaVJLacrFznu+t14wZM2V9vE9N2yzXMuogmKxcxBe9cWf8tPFUwwiacCMdut2zJlf18WYP/PblzE/wB8vzsYQbJAVsAAAAASUVORK5CYII=" alt="external-repost-arrow-lite-inkubators-blue-inkubators" />
            </ContainerInteracoesQuack>
        </ContainerQuack>
    )
}

export default Quack