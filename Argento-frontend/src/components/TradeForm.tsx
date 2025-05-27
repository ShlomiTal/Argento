import { useState } from 'react';
import styled from 'styled-components';
import { postTrade } from '../utils/api';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #3a3a3a;
  color: #ffffff;
`;

const Button = styled.button`
  background: #ffd700;
  color: #1a1a1a;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

function TradeForm() {
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postTrade({ symbol, amount: parseFloat(amount) });
      alert('Trade submitted!');
      setSymbol('');
      setAmount('');
    } catch (error) {
      console.error('Trade failed:', error);
      alert('Trade failed. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Symbol (e.g., BTC)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button type="submit">Place Trade</Button>
    </Form>
  );
}

export default TradeForm;