// Global
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import loginimg from '../../assets/loginpage.png'
import { IoReturnDownBackOutline } from 'react-icons/io5'

const Site = styled.div`
  width: 100%;
  max-width: 1120px;
  // height: 100vh;
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

  const [name, setName] = useState('')
  const [product, setProduct] = useState('')

  const history = useHistory()

  function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <Site>
      <Container>
        <Title>Cadastro de Fornecedor</Title>
        <Text>Cadastre seus fornecedores e tenha uma gestão mais simples!</Text>
        <Form onSubmit={handleLogin}>
          <Input value={name} type="text" placeholder="Nome do Fornecedor" onChange={e => setName(e.target.value)}></Input>
          <Input value={product} type="text" placeholder="Produto" onChange={e => setProduct(e.target.value)}></Input>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Linkinside>
          <IoReturnDownBackOutline size={18} color="#FF7989" />
          <Link to="/home">Voltar</Link>
        </Linkinside>
      </Container>
      <Loginimg src={loginimg} />
    </Site>
  );
}