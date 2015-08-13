import test from 'tape';
import Message from '../src/module1';
import createComponent from './create-component';

test('Message should render properly', function (t) {
    t.plan(2);
    let message = createComponent(Message);
    t.equal(message.type,'span','Message should be of type span');
    t.equal(message._store.props.children,'Message in a bottle','Message should have correct text');
    
});

