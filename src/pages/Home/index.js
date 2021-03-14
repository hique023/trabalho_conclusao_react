// Global
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Assets
import { AiOutlineLogout } from 'react-icons/ai'
import logopage from '../../assets/logoProject.png'

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

  justify-content: space-between;
`

const LogoPage = styled.img`
  height: 60px;
  margin: auto 0;
`

const DivLink = styled.div`
  height: 10vh;
  display: flex;
`

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 25px auto 0;

  display: flex;
  align-items: right;
  justify-content: center;
`

const DivSuperior = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 50px;

  display: flex;
  align-items: right;
  justify-content: space-between;
`

const Title = styled.h1`
  color: #FF7989;
  display: flex;
  align-itens: center;
  margin: auto 5px;
`

const Subtitle = styled.h2`
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
  width: 25%;
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

const DivListProvider = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
`

const ListProvider = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin-bottom: 50px;
`

export default function Home() {
  return (
    <Site>
      <Header>
        <LogoPage src={logopage} alt="Logo da página" />
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
        <DivSuperior>
          <Subtitle>Lista de Fornecedores</Subtitle>
          <Linkinside>
            <Link to="/newprovider">+ Cadastrar Fornecedor</Link>
          </Linkinside>
        </DivSuperior>
      </Container>

      <DivListProvider>
        <ListProvider>
          <li>
            <strong>Nome do fornecedor</strong>
            <p>Fornecedor teste</p>

            <strong>Produto</strong>
            <p>Produto teste</p>

            <strong>Telefone</strong>
            <p>11978451348</p>

            <strong>Email</strong>
            <p>a@a.com.br</p>
          </li>

          <li>
            <strong>Nome do fornecedor</strong>
            <p>Fornecedor teste</p>

            <strong>Produto</strong>
            <p>Produto teste</p>

            <strong>Telefone</strong>
            <p>11978451348</p>

            <strong>Email</strong>
            <p>a@a.com.br</p>
          </li>

          <li>
            <strong>Nome do fornecedor</strong>
            <p>Fornecedor teste</p>

            <strong>Produto</strong>
            <p>Produto teste</p>

            <strong>Telefone</strong>
            <p>11978451348</p>

            <strong>Email</strong>
            <p>a@a.com.br</p>
          </li>

          <li>
            <strong>Nome do fornecedor</strong>
            <p>Fornecedor teste</p>

            <strong>Produto</strong>
            <p>Produto teste</p>

            <strong>Telefone</strong>
            <p>11978451348</p>

            <strong>Email</strong>
            <p>a@a.com.br</p>
          </li>

          <li>
            <strong>Nome do fornecedor</strong>
            <p>Fornecedor teste</p>

            <strong>Produto</strong>
            <p>Produto teste</p>

            <strong>Telefone</strong>
            <p>11978451348</p>

            <strong>Email</strong>
            <p>a@a.com.br</p>
          </li>
        </ListProvider>
      </DivListProvider>
    </Site>
  )
}