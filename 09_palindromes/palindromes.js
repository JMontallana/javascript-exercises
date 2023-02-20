const palindromes = function (str) {
    let re = /[^a-zA-Z0-9]/g; //Regex to remove unwanted characters

    let lowStr = str
                    .toLowerCase()
                    .replace(re, '');

    const reverseStr = lowStr
                            .split('')
                            .reverse()
                            .join('');

    if(reverseStr === lowStr) {
        return true;
    }  else {
        return false;
    }          
};

// Do not edit below this line
module.exports = palindromes;
