// Global
import styled from 'styled-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig'

// Assets
import provider from '../../assets/provider.png'
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

export default function NewProvider() {

  const db = firebase.firestore();

  const [name, setName] = useState('')
  const [product, setProduct] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')

  const history = useHistory()

  function handleNewProvider(e) {
    e.preventDefault()

    db.collection("providers").add({
      name: name,
      product: product,
      phone: phone,
      email: email,
      id: id
    })
      .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
        alert(`Fornecedor cadastrado com sucesso! ${docRef.id}`)

        const idProv = docRef.id

        db.collection('providers').doc(idProv).get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());

            const nameProv = doc.data().name
            const productProv = doc.data().product
            const phoneProv = doc.data().phone
            const emailProv = doc.data().email

            console.log(nameProv)
            console.log(productProv)
            console.log(phoneProv)
            console.log(emailProv)

            db.collection('providers').doc(idProv).set({
              name: nameProv,
              product: productProv,
              phone: phoneProv,
              email: emailProv,
              id: idProv
            })

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });

      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert('Erro ao cadastrar!')
      });

    setName('')
    setProduct('')
    setPhone('')
    setEmail('')

  }

  return (
    <Site>
      <Container>
        <Title>Cadastro de Fornecedor</Title>
        <Text>Cadastre seus fornecedores e tenha uma gestão mais simples!</Text>
        <Form onSubmit={handleNewProvider}>
          <Input value={name} type="text" placeholder="Nome do Fornecedor" onChange={e => setName(e.target.value)}></Input>
          <Input value={product} type="text" placeholder="Produto" onChange={e => setProduct(e.target.value)}></Input>
          <Input value={phone} type="text" placeholder="Telefone" onChange={e => setPhone(e.target.value)}></Input>
          <Input value={email} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></Input>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Linkinside>
          <IoReturnDownBackOutline size={18} color="#FF7989" />
          <Link to="/home">Voltar</Link>
        </Linkinside>
      </Container>
      <ProviderImg src={provider} />
    </Site>
  );
}