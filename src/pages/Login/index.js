// Global
import styled from 'styled-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import loginimg from '../../assets/loginpage.png'
import { FiLogIn } from 'react-icons/fi'

const Site = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF;
`

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
`

const Title = styled.h1`
  color: #FF7989;
`

const Text = styled.p`
  margin-top: 25px;
  color: #797979;
  font-size: 18px;
`

const Linkinside = styled.h3`
  display: flex;
  align-items: center;
  margin-top: 16px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
`

const Loginimg = styled.img`
  max-width: 500px;
  margin-left: 30px;
`

const Form = styled.form`

`

const Input = styled.input`
  width: 100%;
  height: 60px;
  color: #FF7989;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`

const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
`

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()


  function handleLogin(e) {
    e.preventDefault()

    console.log(
      email,
      password
    );

    try {
      alert('Login com sucesso!')
      history.push('/home')
    } catch (error) {
      console.log('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <Site>
      <Container>
        <Title>Login</Title>
        <Text>Faça login e aproveite a plataforma!</Text>
        <Form onSubmit={handleLogin}>
          <Input value={email} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></Input>
          <Input value={password} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></Input>
          <Button type="submit">Login</Button>
        </Form>
        <Linkinside to="/register">
          <FiLogIn size={18} color="#FF7989" />
          <Link to="/register">Não tenho cadastro</Link>
        </Linkinside>
      </Container>
      <Loginimg src={loginimg} />
    </Site>
  );
}