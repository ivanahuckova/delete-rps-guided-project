import React from 'react';
import ReactDOM from 'react-dom';
/*
state lives in outer most container!!
<container> => STATE LIVES HERE!
    <header>
    <history>
    <main>
    <buttons>
<container>
*/

ReactDOM.render(<div>Rock Paper Scissors</div>, document.querySelector('#target'));
