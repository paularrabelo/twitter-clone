import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Quack from '../../assets/Q.svg'
import { Botao, CloseIcon, Formulario, HomeContainer, Input, Logo, Modal, ModalContainer, ModalContent, Title } from './styles'
import close from "../../assets/marca-cruzada.png"

const Home = () => {

    const [ showModal, setShowModal ] = useState(false)
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ registerEmail, setRegisterEmail ] = useState("")
    const [ registerPassword, setRegisterPassword ] = useState("")
    const [ mensagem, setMensagem ] = useState("")
    const [ erroLogin, setErroLogin ] = useState("")

    const supabase = createClient("https://ihdtaolmhmbosoqsmlgb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZHRhb2xtaG1ib3NvcXNtbGdiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDQyMjcyNCwiZXhwIjoyMDU1OTk4NzI0fQ.m4Uwh1MfNkYqSPHD5k2qrfRMOAYHwE76RDvexu3eOjg")

    async function signUp() {
        const { error } = await supabase.auth.signUp({ 
            email: registerEmail, 
            password: registerPassword 
        });

        if (error) {
            if (error.message.includes('already registered')) {
                setMensagem('Este e-mail já está cadastrado. Tente fazer login.');
            } else {
                setMensagem('Erro ao criar conta: ' + error.message);
            }
        } else {
            setMensagem('Usuário cadastrado com sucesso! Confirme seu email para efetuar Login.');
        }
    }

    async function signIn(){
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setErroLogin(`Erro no login: ${error.message}`);
        } else { 
            localStorage.setItem('acessToken', data.session.access_token)
            window.location.href = '/feed'
        }
    }

    return (
        <>
            <HomeContainer className="container">
                <Logo src={Quack} alt="Logo do Quack" />
                <Formulario onSubmit={(e) => e.preventDefault()}>
                    <Title>A rede que conecta o mundo</Title>
                    <Title className='medium'>Faça seu login</Title>
                    <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}  />
                    <Botao type='submit' onClick={signIn}>Entrar</Botao>
                    {erroLogin  &&
                    <h3>{erroLogin}</h3>}
                    <p>Esqueceu sua senha? <a>Redefinir senha</a></p>
                    <Botao onClick={() => setShowModal(true)} className='cadastrar' type='submit'>Cadastrar</Botao>
                </Formulario>
            </HomeContainer>
            <Modal className={showModal ? 'visible' : ''}>
                <ModalContent>
                    <ModalContainer>
                        <Title>Cadastrar</Title>
                        <Input placeholder='usuário' />
                        <Input placeholder='email' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
                        <Input type='password' placeholder='senha' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        <Botao onClick={signUp}>Cadastrar</Botao>
                        {mensagem && 
                        <p>{mensagem}</p>}
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