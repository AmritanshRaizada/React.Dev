import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child', key: 'child1' }, [ // 👈 key added
    React.createElement('h1', { id: 'heading', key: 'h1-1' }, 'Hello World'), // 👈 key added
    React.createElement('h2', { id: 'heading', key: 'h2-1' }, 'Hello World')  // 👈 key added
  ]),
  React.createElement('div', { id: 'child', key: 'child2' }, [ // 👈 key added
    React.createElement('h1', { id: 'heading', key: 'h1-2' }, 'Hello World'), // 👈 key added
    React.createElement('h2', { id: 'heading', key: 'h2-2' }, 'Hello World')  // 👈 key added
  ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
