document.write(require('./src/module1'));
document.write('</br></br><span>Rendered on: ' + new Date() + '</span>');
const lambda = (x) => console.log(x);

lambda('Hi there');