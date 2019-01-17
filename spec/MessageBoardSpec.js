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

  it("returns an array when .messageList called", () => {
    expect(messageBoard.messageList).toEqual([]);
  });

  it("stores a message in messageList after .save(message) called", () => {
    messageBoard.save(message);
    expect(messageBoard.messageList).toContain(message);
  });

});
