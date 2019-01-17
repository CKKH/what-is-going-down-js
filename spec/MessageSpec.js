/* global describe, it, expect, beforeEach */

'use strict'

describe("Message", () => {

  it("instance of Message can be stored as a variable", () => {
    var message = new Message();
    expect(message instanceof Message).toBe(true);
  });

  it("should respond to the method .userInput", () => {
    var message = new Message();
    expect(message.userInput).toBeDefined();
  });

});
