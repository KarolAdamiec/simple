import React from 'react';
import Message from './src/module1';

React.render(<Message/>, document.getElementById('reactRoot'));

document.write('</br></br><span>Rendered on: ' + new Date() + '</span>');
const lambda = (x) => console.log(x);

lambda('Hi there');