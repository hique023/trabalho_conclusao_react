// Global
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Assets
import aboutimg from '../../assets/about.png'
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

const Subtitle = styled.h2`
  color: #FF7989;
  margin-top: 30px;
`

const Text = styled.p`
  margin-top: 25px;
  color: #797979;
  font-size: 18px;
`

const Subtext = styled(Text)`
  margin-top: 10px;
  font-size: 14px;
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

const Aboutimg = styled.img`
  max-width: 500px;
  margin-left: 30px;
`

const Line = styled.hr`
  margin-top: 20px;
`

export default function About() {
  return (
    <Site>
      <Container>
        <Title>Sobre</Title>
        <Text>A Management nasceu no ano de 2019 e tem como foco o controle de gestão.</Text>
        <Text>Somos uma empresa focada na gestão de fornecedores, portanto poderá realizar o controle de todos os seus fornecedores em uma única aplicação de forma simples e rápida.</Text>

        <Subtitle>Desenvolvedores</Subtitle>
        <Subtext>Nome: Pedro Henrique / RM: 338043</Subtext>
        <Subtext>Nome: Kauã Estriga / RM: 338043</Subtext>
        <Subtext>Nome: Bárbara Perretti / RM: 338043</Subtext>

        <Line />

        <Linkinside>
          <IoReturnDownBackOutline size={18} color="#FF7989" />
          <Link to="/home">Voltar para o início</Link>
        </Linkinside>
      </Container>
      <Aboutimg src={aboutimg} />
    </Site>
  );
}