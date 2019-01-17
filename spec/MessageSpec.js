/* global describe, it, expect, beforeEach */

'use strict'

describe("Message", () => {
  let message;

  beforeEach( () => {
    message = new Message("Hello, Chris");
  });

  it("instance of Message can be stored as a variable", () => {
    expect(message instanceof Message).toBe(true);
  });

  it("should return message when .userInput called", () => {
    expect(message.userInput).toEqual("Hello, Chris");
  });

});
