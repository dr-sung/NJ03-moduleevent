const {types: types} = require('./types');
// in object, if key == value, skip the repeat
const {cpus} = require('./cpus');

module.exports = {
    types,
    cpus
}

module.exports.mul = (a, b) => {
    return a * b;
}