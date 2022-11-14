import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';
import styled from 'styled-components';

const AppContainerner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainerner>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainerner>
  );
}

export default App;
