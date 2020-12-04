const fields = {
    'byr': (val) => {
        const year = parseInt(val);
        return year >= 1920 && year <= 2002
    },
    'iyr': (val) => {
        const year = parseInt(val);
        return year >= 2010 && year <= 2020
    },
    'eyr': (val) => {
        const year = parseInt(val);
        return year >= 2020 && year <= 2030
    },
    'hgt': (val) => {
        const unitRules = {
            'cm': {
                low: 150,
                high: 193
            },
            'in': {
                low: 59,
                high: 76
            }
        }

        const match = val.match(/(\d{2,})(cm|in)/i);
        if(match) {
            const [, height, unit] = match;
            return height >= unitRules[unit].low && height <= unitRules[unit].high;
        } else {
            return false;
        }
    },
    'hcl': (val) => {
        return /#[0-9a-f]{6}/.test(val);
    },
    'ecl': (val) => {
        return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);
    },
    'pid': (val) => {
        return val.length === 9
    },
};

function hasAllFields(passport) {
    const reqFieldsNames = Object.keys(fields);
    for(let i = 0; i < reqFieldsNames.length; i++) {
        if(!passport.toLowerCase().includes(reqFieldsNames[i])) {
            return false;
        }
    }
    return true;
}

function areFieldsValid(passport) {
    const passportFields = passport.split(' ');
    for(let i = 0; i < passportFields.length; i++) {
        const [field, value] = passportFields[i].split(':');
        if(field !== 'cid' && !fields[field](value)) {
            return false;
        }
    }
    return true;
}

function solution(input, verifyFields) {
    let numOfValidPassports = 0;

    input.forEach(passport => {
        let isValid = hasAllFields(passport);

        if(isValid && verifyFields) {
            isValid = areFieldsValid(passport);
        }
        numOfValidPassports += isValid ? 1 : 0;
    });

    return numOfValidPassports;
}

module.exports.fields = fields;
module.exports.areFieldsValid = areFieldsValid;
module.exports.solution = solution;
