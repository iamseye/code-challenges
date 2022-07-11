
var encode = function(strs) {
    let encodedStr='';

    const divider = ':'
    for(const s of strs) {
        encodedStr = `${encodedStr}${s.length}${divider}${s}`;
    }

    return encodedStr;
}


var decode = function(str) {
    const divider = ':'

    let strs = []
    for (let i = 0; i <str.length; i++) {
        if(str[i] === divider) {
            const len = Number(str[i-1]);
            const subStr = str.slice(i+1, i+len+1);
            strs.push(subStr)
            i+=len;
        }
    }

    return strs
}


console.log(encode(['neet','code']));
console.log(decode('4:neet4:code'))
console.log(encode(['3:neet','code']));
console.log(decode('6:3:neet4:code'))
