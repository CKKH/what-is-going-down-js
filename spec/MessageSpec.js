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

  it("should return message when .userInput called", () => {
    var message = new Message("Hello, Chris");
    expect(message.userInput).toEqual("Hello, Chris");
  });

});
