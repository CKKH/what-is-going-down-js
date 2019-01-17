/* global describe, it, expect, beforeEach */

'use strict'

describe("MessageBoard", () => {

  it("instance of MessageBoard can be stored as a variable", () => {
    var messageBoard = new MessageBoard();
    expect(messageBoard instanceof MessageBoard).toBe(true);
  });

  it("responds to the method .messageList", () => {
    var messageBoard = new MessageBoard();
    expect(messageBoard.messageList).toBeDefined();
  });

  it("returns an array when .messageList called", () => {
    var messageBoard = new MessageBoard();
    expect(messageBoard.messageList).toEqual([]);
  });

});
