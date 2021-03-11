import styled from 'styled-components'

import Register from './components/Register'
// import Login from './components/Login'

const Site = styled.div`

`

export default function App() {
  return (
    <Site>
      <Register />
      {/* <Login /> */}
    </Site>
  );
}