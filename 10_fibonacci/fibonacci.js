const fibonacci = function(number) {
    
    if(Number(number) <= 1 && Number(number) >=0) return Number(number);
    if (number < 0) return "OOPS";

    const result = [0, 1];

    for (let i = 2; i <= Number(number); i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[result.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
