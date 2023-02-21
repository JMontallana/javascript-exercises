const findTheOldest = function(array) {
    
    return array.reduce((previous, current) => {
        const previousAge = getAge(previous.yearOfBirth, previous.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return previousAge < currentAge ? current : previous;
    }) 

    
};
const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
