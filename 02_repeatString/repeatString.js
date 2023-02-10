const repeatString = function(putString, putNumber) {
    if(putNumber < 0) {
        return 'ERROR';
    } else if (putNumber >= 0) {
        let string = '';
        for(let i = 0; i < putNumber; i++){
            string += putString;
        }
        return string;
    } 
};

// Do not edit below this line
module.exports = repeatString;
