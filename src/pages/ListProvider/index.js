// Global
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Assets
import { FiTrash2 } from 'react-icons/fi'
import { RiEdit2Line } from 'react-icons/ri'

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

export default function ListProvider() {
    return (
        <DivListProvider>
            {/* <ListProviderul> */}
            <li>
                <strong>Nome do fornecedor</strong>
                <p>Fornecedor teste</p>

                <strong>Produto</strong>
                <p>Produto teste</p>

                <strong>Telefone</strong>
                <p>11978451348</p>

                <strong>Email</strong>
                <p>a@a.com.br</p>

                <ButtonDelete>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </ButtonDelete>

                <ButtonEdit>
                    <Link to="editprovider"><RiEdit2Line size={20} color="#a8a8b3" /></Link>
                </ButtonEdit>
            </li>
            {/* </ListProviderul> */}
        </DivListProvider>
    )
}