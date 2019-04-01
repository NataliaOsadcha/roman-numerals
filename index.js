const dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'M': 1000,
};

function isValid(string) {
    let previous = 1000;

    for(let i = 0; i < string.length; i++) {
        const letter = string.charAt(i);
        const current = dictionary[letter];

        if (!current || previous < current) {
            return false;
        }

        previous = current;
    }

    return true;
}
console.log(isValid(process.argv[2]));
