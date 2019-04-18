/*
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    btn.innerHTML = 'Click me and check the console!!!!!11';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
*/
/*import _ from 'lodash';*/
import { cube } from './math.js';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function component() {
    var button = document.createElement('button');
    var element = document.createElement('pre');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(button);
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });
    /*element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');*/
    return element;
}

document.body.appendChild(component());