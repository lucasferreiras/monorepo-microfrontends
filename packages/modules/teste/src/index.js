import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderTeste = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountTeste = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Teste-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}