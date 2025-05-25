import styled from 'styled-components';

const Card = styled.div`
  background: #2a2a2a;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface PortfolioCardProps {
  asset: string;
  amount: number;
  value: number;
}

function PortfolioCard({ asset, amount, value }: PortfolioCardProps) {
  return (
    <Card>
      <h3>{asset}</h3>
      <p>Amount: {amount}</p>
      <p>Value: ${value.toFixed(2)}</p>
    </Card>
  );
}

export default PortfolioCard;