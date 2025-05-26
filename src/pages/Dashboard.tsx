import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMarketData } from '../utils/api';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MarketList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MarketItem = styled.li`
  padding: 10px;
  background: #2a2a2a;
  margin-bottom: 10px;
  border-radius: 5px;
`;

interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

function Dashboard() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <h2>Argento AI Dashboard</h2>
      <MarketList>
        {marketData.map((item) => (
          <MarketItem key={item.symbol}>
            {item.symbol}: ${item.price} ({item.change > 0 ? '+' : ''}{item.change}%)
          </MarketItem>
        ))}
      </MarketList>
    </DashboardContainer>
  );
}

export default Dashboard;