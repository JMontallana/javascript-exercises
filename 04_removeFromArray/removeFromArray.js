const removeFromArray = function(arr, ...args) {
    
    // const newArr = [];
    // arr.forEach(element => {
    //     if (!args.includes(element)) {
    //         newArr.push(element);
    //         console.log(newArr)
    //     }
    // });
    // return newArr

    const newArray = [];
    for(let i = 0; i < arr.length; i++ ){
        if(!args.includes(arr[i])){
            newArray.push(arr[i]);
            console.log(newArray);
        } 
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
