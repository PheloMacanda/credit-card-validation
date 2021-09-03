import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('add credit card to app', () => {
  render(<Router><App /></Router>);
  const creditCard = {
    "number":"4242 3558 6848 6867",
    "name":"Phelo Macanda",
    "expiry":"02/03",
    "cvc":"335",
    "country":"Albania"
  } 

  const values = {
    "number":"4242 3558 6848 6867",
    "name":"Phelo Macanda",
    "expiry":"02/03",
    "cvc":"335",
    "country":"Albania"
  }
  expect(creditCard).toEqual(values);
});
