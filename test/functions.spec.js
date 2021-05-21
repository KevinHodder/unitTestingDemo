jest.mock('../src/remoteCalls')
const { addThree, addFour, addFive, computeOutput, subtraction, throwsErrors, fetchString, MyCounter, myRemoteCallSwitch } = require('../../../techenfolddemo/src/functions')
const remoteCalls = require('../src/remoteCalls')

describe('myFunctions', () => {
  // Always give tests descriptive names the inform the reader
  // as to the intended functionality.
  // You should be able to understand what the system under test
  // does based just from the test description
  describe('test 1', () => {
    it('returns true', () => {
      const input = {
        dummyVal1: 'string1',
        dummyVal2: 7
      }
      expect(computeOutput(input)).toEqual(true)
    })
    it('returns false', () => {
      const input = {
        myString: 'string14',
        anArray: ['eeeeee']
      }
      expect(computeOutput(input)).toEqual(false)
    })
  })

  // Make sure your descriptions are CORRECT.
  // Nothing worse than having a description that does not match the actual test.
  // Which was the intended correct behaviour?
  describe('#addSix', () => {
    it('should decrease every item in the input by 5', () => {
      const input = [1, 2, 3]
      const expectedOutput = [6, 7, 8]
      expect(addFive(input)).toEqual(expectedOutput)
    })
  })

  // Be specific in your assertions. Vague assertions allow errors to sneak in, while
  // still formally "covering" the code.
  describe('#addFour', () => {
    it('should return the input value, plus four', () => {
      expect(addFour([1, 2, 3])).toBeTruthy()
    })
  })

  // Use unambiguous test values.
  // It's difficult to spot unexpected behaviour when there's
  // several ways to achieve the assertion.
  // Having more than one test is the best way to ensure you didn't
  // catch a special case by accident.
  describe('#subtraction', () => {
    describe('when given two numbers', () => {
      it('subtracts the second from the first', () => {
        expect(subtraction(20, 10)).toEqual(10)
      })
    })
  })

  // Avoid conditional assertions.
  // If there are conditions where your assertions aren't run at all,
  // you may not notice if the tests aren't performing correctly.
  // E.g. if results = [], forEach doesn't run
  describe('#addThree', () => {
    it('function adds 3', () => {
      const original = [1, 2, 3, 4]
      const results = addThree(original)
      results.forEach((value, index) => {
        expect(value).toEqual(original[index] + 3)
      })
    })
  })

  // Same with try/catch.
  // Assertions in catch aren't run if the called function doesn't "throw".
  // This passes even though it's not possible for true==false.
  // In general, just make sure your tests CAN fail before worrying if they pass
  describe('#throwsErrors', () => {
    it('should throw an error', () => {
      try {
        throwsErrors()
      } catch (error) {
        expect(error).toEqual('something went wrong')
        expect(true).toBe(false)
      }
    })
  })

  // Don't have tests relying on the outcomes or actions of other tests.
  // These tests, run individually or out of order, may fail. It'll be hard to understand why.
  // Also, test runners don't necessarily guarantee order of execution.
  // Refactor so that each test stands alone, even if that means some repetition.
  describe('MyCounter class', () => {
    const myCounter = new MyCounter()
    describe('on instantiation', () => {
      it('should have an internal count of 0', () => {
        expect(myCounter.getCount()).toEqual(0)
      })
    })
    describe('on first increment', () => {
      it('should return 1', () => {
        expect(myCounter.increment()).toEqual(1)
      })
    })
    describe('on second increment', () => {
      it('should return 2', () => {
        expect(myCounter.increment()).toEqual(2)
      })
    })
  })

  // Don't forget to wait for your results if using async operations
  // You need awaits in tests, same as you do in functional code
  // describe('#fetchString', () => {
  //   it('should resolve the input', () => {
  //     const myInput = 'some string'
  //     expect(fetchString(myInput)).toEqual(myInput)
  //   })
  // })

  // Don't just check that your functions do what they're supposed to.
  // Double check that they also DON'T do what they're not supposed to.
  // In general, every change warrants 2 tests: one positive, one negative.
  /**
   * Imagine you need to route requests to different API endpoints, based on some flag
   * Your switch statement should call the corresponding API for your flag
   */
  describe('#myRemoteCallSwitch', () => {
    describe('when I call it with 0', () => {
      it('should call the remoteCall function callZero', async () => {
        const callZeroSpy = jest.spyOn(remoteCalls, 'callZero')
        myRemoteCallSwitch(0)
        expect(callZeroSpy).toHaveBeenCalled()
      })
    })
    describe('when I call it with 1', () => {
      it('should call the remoteCall function callOne', () => {
        const callOneSpy = jest.spyOn(remoteCalls, 'callOne')
        myRemoteCallSwitch(1)
        expect(callOneSpy).toHaveBeenCalled()
      })
    })
  })
})
