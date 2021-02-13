import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <h1>React app</h1>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
)
