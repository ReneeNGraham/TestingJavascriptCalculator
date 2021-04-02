const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

//   1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
  it('should update display with operation result', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number_4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })
  })
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).


});
