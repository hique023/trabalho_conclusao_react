// Global
import styled from 'styled-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig'

// Assets
import registerimg from '../../assets/register.png'
import { IoReturnDownBackOutline } from 'react-icons/io5'

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

const Registerimg = styled.img`
  max-width: 500px;
  margin-right: 30px;
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

export default function Register() {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  function handleLogin(e) {
    e.preventDefault()

    console.log(
      name,
      lastname,
      email,
      password,
    );

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert('Cadastro com sucesso!')
        localStorage.setItem('firstName', name)
        localStorage.setItem('lastName', lastname)
        localStorage.setItem('email', email)
        localStorage.setItem('activeSession', true)
        history.push('/home')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
  }

  return (
    <Site>
      <Registerimg src={registerimg} />
      <Container>
        <Title>Cadastro</Title>
        <Text>Realize seu cadastro para aproveitar a plataforma!</Text>
        <Form onSubmit={handleLogin}>
          <Input value={name} type="text" placeholder="Nome *" onChange={e => setName(e.target.value)} required></Input>
          <Input value={lastname} type="text" placeholder="Sobrenome *" onChange={e => setLastname(e.target.value)} required></Input>
          <Input value={email} type="email" placeholder="E-mail *" onChange={e => setEmail(e.target.value)} required></Input>
          <Input value={password} type="password" placeholder="Senha *" onChange={e => setPassword(e.target.value)} required></Input>
          <Button type="submit">Registrar</Button>
        </Form>
        <Linkinside>
          <IoReturnDownBackOutline size={25} color="#FF7989" />
          <Link to="/">Já tenho cadastro</Link>
        </Linkinside>
      </Container>
    </Site>
  );
}