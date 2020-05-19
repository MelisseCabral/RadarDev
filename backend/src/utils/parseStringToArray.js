module.exports = function parseStringToArray(arrayAsString){
    return arrayAsString.split(',').map(s => s.trim());
}