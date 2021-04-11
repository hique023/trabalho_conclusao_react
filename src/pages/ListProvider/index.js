// Global
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import firebase from '../../firebaseConfig'

// Assets
import { FiTrash2 } from 'react-icons/fi'
import { RiEdit2Line } from 'react-icons/ri'

const DivListProvider = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
`

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
  const idProv = props.id

  function deleteProvider() {
    const id = props.id

    db.collection('providers').doc(id).delete()

    props.getProvider()
  }

  function editProvider() {
    localStorage.setItem('idProvider', props.id)
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

        {/* <strong>Id</strong>
        <p>{props.id}</p> */}

        <ButtonDelete onClick={deleteProvider}>
          <FiTrash2 size={20} color="#a8a8b3" />
        </ButtonDelete>

        <ButtonEdit onClick={editProvider}>
          <Link to='editprovider'><RiEdit2Line size={20} color="#a8a8b3" /></Link>
        </ButtonEdit>
      </li>
    </DivListProvider >
  )
}