import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Capital from './pages/Capital';
import Exchange from './pages/Exchange';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/capital" element={<Capital />} />
            <Route path="/exchange" element={<Exchange />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;