// Global
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import firebase from '../../firebaseConfig'

// Assets
import { FiTrash2 } from 'react-icons/fi'
import { RiEdit2Line } from 'react-icons/ri'
import { useEffect } from 'react'

const DivListProvider = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
`

// const ListProviderul = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 24px;
//   list-style: none;
//   margin-bottom: 50px;
// `

const ButtonDelete = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  transition: opacity 0.2s;
  background: transparent;
`

const ButtonEdit = styled.button`
  position: absolute;
  right: 60px;
  top: 24px;
  border: 0;
  transition: opacity 0.2s;
  background: transparent;
`

export default function ListProvider(props) {

  const db = firebase.firestore();

  function deleteProvider() {
    const id = props.id

    db.collection('providers').doc(id).delete()

    props.getProvider()
  }

  return (
    <DivListProvider>
      <li>
        <strong>Nome do fornecedor</strong>
        <p>{props.name}</p>

        <strong>Produto</strong>
        <p>{props.product}</p>

        <strong>Telefone</strong>
        <p>{props.phone}</p>

        <strong>Email</strong>
        <p>{props.email}</p>

        <strong>Id</strong>
        <p>{props.id}</p>

        <ButtonDelete onClick={deleteProvider}>
          <FiTrash2 size={20} color="#a8a8b3" />
        </ButtonDelete>

        {/* <ButtonEdit>
          <Link to="editprovider"><RiEdit2Line size={20} color="#a8a8b3" /></Link>
        </ButtonEdit> */}

        <ButtonEdit>
          <Link to={{ pathname: "/editprovider" }}><RiEdit2Line size={20} color="#a8a8b3" /></Link>
        </ButtonEdit>
      </li>
    </DivListProvider>
  )
}