import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './Header';
import Dashboard from './Dashboard';
import smartHomeData from './smartHomeData.js';

const App = () => (
  <div className="container">
    <Header title={"Chytrý dům"} />
    <Dashboard data={smartHomeData} />
	</div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);