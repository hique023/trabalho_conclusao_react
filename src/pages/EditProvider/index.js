// Global
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig'

// Assets
import edit from '../../assets/edit.png'
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

const ProviderImg = styled.img`
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

export default function EditProvider(props) {

  const db = firebase.firestore();

  const [name, setName] = useState('')
  const [product, setProduct] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()

  async function getData() {
    const idProv = localStorage.getItem('idProvider')
    console.log(idProv)

    db.collection('providers').doc(idProv).get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());

        const nameProv = doc.data().name
        const productProv = doc.data().product
        const phoneProv = doc.data().phone
        const emailProv = doc.data().email

        setName(nameProv)
        setProduct(productProv)
        setPhone(phoneProv)
        setEmail(emailProv)

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  function handleUpdate(e) {
    const idProv = localStorage.getItem('idProvider')

    e.preventDefault()

    setName(name)
    setProduct(product)
    setPhone(phone)
    setEmail(email)

    db.collection('providers').doc(idProv).set({
      name: name,
      product: product,
      phone: phone,
      email: email,
      id: idProv
    })

    alert('Fornecedor atualizado com sucesso!')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Site>
      <ProviderImg src={edit} />
      <Container>
        <Title>Edição de Fornecedor</Title>
        <Text>Edite seu fornecedor!</Text>
        <Form onSubmit={handleUpdate}>
          <Input value={name} type="text" placeholder="Nome do Fornecedor" onChange={e => setName(e.target.value)}></Input>
          <Input value={product} type="text" placeholder="Produto" onChange={e => setProduct(e.target.value)}></Input>
          <Input value={phone} type="text" placeholder="Telefone" onChange={e => setPhone(e.target.value)}></Input>
          <Input value={email} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></Input>
          <Button type="submit">Salvar</Button>
        </Form>
        <Linkinside>
          <IoReturnDownBackOutline size={18} color="#FF7989" />
          <Link to="/home">Voltar</Link>
        </Linkinside>
      </Container>
    </Site>
  );
}