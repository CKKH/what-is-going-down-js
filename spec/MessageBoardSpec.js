/* global describe, it, expect, beforeEach */
'use strict'

describe("MessageBoard", () => {
  let messageBoard;
  let message;

  beforeEach( () => {
    messageBoard = new MessageBoard();
    message = jasmine.createSpy('message')
  });

  it("instance of MessageBoard can be stored as a variable", () => {
    expect(messageBoard instanceof MessageBoard).toBe(true);
  });

  it(".messageList returns an array when called", () => {
    expect(messageBoard.messageList).toEqual([]);
  });

  it(".save(message) stores a message in messageList after called", () => {
    messageBoard.save(message);
    expect(messageBoard.messageList).toContain(message);
  });

});
