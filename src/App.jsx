import * as React from 'react'
import ReactDOM from 'react-dom';
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hiya! Path: {document.location.pathname}</h1>

// console.log(Server.renderToString(<Greet />))

ReactDOM.render(<Greet/>, document.getElementById('root'));