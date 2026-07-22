import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa/undex'
import styled from 'styled-components'
import UltimosLancamentos from './componentes/UltimosLancamentos'

const  AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background: linear-gradient(90deg, #002f52 35%, #326589 165%);
`

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Pesquisa />
        <UltimosLancamentos />
      </AppContainer>
    </>
  )
}

export default App
