import styled from 'styled-components'

import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'

const Site = styled.div`

`

export default function App() {
  return (
    <Site>
      <Register />
      <Login />
      <About />
    </Site>
  );
}