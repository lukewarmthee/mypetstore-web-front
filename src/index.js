import _ from 'lodash';
// 也可以用ES5的写法, 如下
// var _ = require('lodash');

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    // 现在直接将lodash中的_和join用法引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());