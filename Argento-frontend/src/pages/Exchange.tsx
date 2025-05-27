import styled from 'styled-components';
import TradeForm from '../components/TradeForm';

const ExchangeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Exchange() {
  return (
    <ExchangeContainer>
      <h2>Argento Exchange</h2>
      <TradeForm />
    </ExchangeContainer>
  );
}

export default Exchange;