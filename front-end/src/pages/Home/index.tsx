import { useState } from 'react'
import Quack from '../../../public/Q.svg'
import { Botao, CloseIcon, Formulario, HomeContainer, Input, Logo, Modal, ModalContainer, ModalContent, Title } from './styles'
import close from "../../../public/marca-cruzada.png"

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <HomeContainer className="container">
                <Logo src={Quack} alt="Logo do Quack" />
                <Formulario>
                    <Title>A rede que conecta o mundo</Title>
                    <Title className='medium'>Faça seu login</Title>
                    <Input placeholder='email' />
                    <Input placeholder='senha' />
                    <Botao type='submit'>Entrar</Botao>
                    <p>Esqueceu sua senha? <a>Redefinir senha</a></p>
                    <Botao onClick={() => setShowModal(true)} className='cadastrar' type='submit'>Cadastrar</Botao>
                </Formulario>
            </HomeContainer>
            <Modal className={showModal ? 'visible' : ''}>
                <ModalContent>
                    <ModalContainer>
                        <Title>Cadastrar</Title>
                        <Input placeholder='usuário' />
                        <Input placeholder='email' />
                        <Input placeholder='senha' />
                        <Botao>
                        Cadastrar
                        </Botao>
                    </ModalContainer>
                    <CloseIcon
                        onClick={() => setShowModal(false)}
                        src={close}
                        alt="Icone de fechar"
                    />
                </ModalContent>
                <div onClick={() => setShowModal(false)} className="overlay"></div>
            </Modal>
        </>
    )
}

export default Home