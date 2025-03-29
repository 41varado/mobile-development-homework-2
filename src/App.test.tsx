import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';
import Home from './pages/Home';
import { Products } from './components/Products';
import { ProductDetail } from './components/Products/detail';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('renders home whithout crashing', () => {
  const home = render(<Home />);
  expect(home).toBeDefined();
})

test('renders products without crashing', () => {
  const products = render(<Products />);
  expect(products).toBeDefined();
})