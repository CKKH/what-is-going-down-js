'use strict';

describe("MessageBoard", () => {

  it("instance of MessageBoard can be stored as a variable", () => {
    var messageBoard = new MessageBoard;
    expect(messageBoard instanceof MessageBoard).toBe(true);
  });

  it("responds to the method .printMessages", () => {
    var messageBoard = new MessageBoard;
    expect(messageBoard.printMessages).toBeDefined();
  });

});
