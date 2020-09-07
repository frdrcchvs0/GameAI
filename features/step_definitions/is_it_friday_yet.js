const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const isItFriday = today => {
    return '' + this.today == 'Friday';
};

Given('today is {string}', (expectedAnswer) => {
    this.today = expectedAnswer;
});

When('I ask whether it\'s Friday yet', () => {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', expectedAnswer => {
    assert.equal(this.actualAnswer, JSON.parse(expectedAnswer));
});