/* global describe, it, expect, beforeEach */

'use strict'

describe("MessageBoard", () => {

  it("instance of MessageBoard can be stored as a variable", () => {
    var messageBoard = new MessageBoard();
    expect(messageBoard instanceof MessageBoard).toBe(true);
  });

  it("returns an array when .messageList called", () => {
    var messageBoard = new MessageBoard();
    expect(messageBoard.messageList).toEqual([]);
  });

  it("responds to the method .save(message)", () => {
    var messageBoard = new MessageBoard();
    var message = new Message();
    expect(messageBoard.save(message)).toBeDefined();
  });

});
