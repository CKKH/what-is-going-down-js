/* global describe, it, expect, beforeEach */

'use strict'

describe("Message", () => {
  let message;
  let time;

  beforeEach( () => {
    time = new Date
    message = new Message("Hello, Chris", time);
  });

  it("instance of Message can be stored as a variable", () => {
    expect(message instanceof Message).toBe(true);
  });

  it(".userInput returns message content", () => {
    expect(message.userInput).toEqual("Hello, Chris");
  });

  it("should respond to the method .timeStamp", () => {
    expect(message.timeStamp).toBeDefined();
  });

  it(".timeStamp returns time message was created", () => {
    expect(message.timeStamp).toEqual(time);
  });

});
