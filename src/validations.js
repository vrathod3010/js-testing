
exports.validateInput = (name, age, income) => {
    if (this.validateName(name) && this.validateAge(age) && this.validateIncome(income)) {
        return true;
    }
    return false;
};

exports.validateName = (name) => {
    if (name) {
        return true;
    }
    else {
        return false;
    }
};

exports.validateAge = (age) => {
    if (age) {
        return true;
    }
    else {
        return false;
    }
};

exports.validateIncome = (income) => {
    if (income) {
        return true;
    }
    else {
        return false;
    }
};

