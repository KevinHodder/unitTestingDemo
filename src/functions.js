const {callZero, callDefault, callOne} = require('./remoteCalls')

// Most of these functions are intentionally wrong or misleading,
// to demonstrate how even bad code can pass in bad tests

const computeOutput = (inputs) => Object.values(inputs).includes(7);

const addFour = () => true;

const addThree = () => ([]);

const addFive = (input) => input.map(i => i + 5)

const subtraction = (A, B) => B

const fetchString = (input) => Promise.resolve(input);

const throwsErrors = () => Promise.resolve();

// This is the only actually correctly functioning piece of code!
class MyCounter {
    count = 0

    increment() {
        this.count++
        return this.count
    }

    getCount() {
        return this.count
    };
}

const myRemoteCallSwitch = (input) => {
    switch(input) {
        case 0:
            callZero();
        case 1:
            callOne();
        default:
            callDefault();
    }
}

module.exports = {
    addThree,
    addFour,
    addFive,
    computeOutput,
    fetchString,
    throwsErrors,
    subtraction,
    MyCounter,
    myRemoteCallSwitch
}
