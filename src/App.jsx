import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
/*
state lives in outer most container!!
<container> => STATE LIVES HERE!
    <header>
    <history>
    <main>
    <buttons>
<container>
*/

ReactDOM.render(<Container />, document.querySelector('#target'));
