import Quack from '../../../public/Q.svg'
import { Formulario, HomeContainer, Logo } from './styles'

const Home = () => {

    return (
        <>
            <HomeContainer className="container">
                <Logo src={Quack} alt="Logo do Quack" />
                <Formulario>
                    <h1>A rede que conecta o mundo</h1>
                    <h2>Faça seu login</h2>
                    <input placeholder='email'></input>
                    <input placeholder='senha'></input>
                    <button type='submit'>Entrar</button>
                    <p>Esqueceu sua senha? <a>Redefinir senha</a></p>
                    <button className='cadastrar' type='submit'>Cadastrar</button>
                </Formulario>
            </HomeContainer>
        </>
    )
}

export default Home