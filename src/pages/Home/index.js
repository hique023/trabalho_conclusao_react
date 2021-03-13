// Global
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

// Assets
import { AiOutlineLogout } from 'react-icons/ai'

const Site = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  align-items: center;
  background-color: #FFF;
`

const Header = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 10vh;

  display: flex;
  align-itens: center;
  
  background: #f2f2f2;

  justify-content: space-between;
`

const DivLink = styled.div`
  height: 10vh;
  display: flex;
`

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: right;
  justify-content: center;
`

const Title = styled.h1`
  color: #FF7989;
  display: flex;
  align-itens: center;
  margin: auto 5px;
`

const Text = styled.p`
  margin-top: 25px;
  color: #797979;
  font-size: 18px;
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

const Linkinside = styled.h3`
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  
  display: flex;
  align-itens: center;
  margin-left: 40px; 

  transition: opacity 0.2s;
`

export default function Home() {
  return (
    <Site>
      <Header>
        <Title>Início</Title>
        <DivLink>
          <Linkinside>
            <Link to="/about">About</Link>
          </Linkinside>
          <Linkinside>
            <Link to="/">
              <AiOutlineLogout size={18} color="#FF7989" />
            </Link>
          </Linkinside>
        </DivLink>
      </Header>

      <Container>
        <Title>Título da Home</Title>
      </Container>
    </Site>
  )
}