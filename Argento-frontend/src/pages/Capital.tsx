import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PortfolioCard from '../components/PortfolioCard';
import { getPortfolio } from '../utils/api';

const CapitalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

interface PortfolioItem {
  asset: string;
  amount: number;
  value: number;
}

function Capital() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio();
        setPortfolio(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <CapitalContainer>
      <h2>Argento Capital</h2>
      {portfolio.map((item) => (
        <PortfolioCard key={item.asset} {...item} />
      ))}
    </CapitalContainer>
  );
}

export default Capital;