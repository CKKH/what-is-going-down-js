describe("MessageBoard", () => {

  it("instance of MessageBoard can be stored as a variable", () => {
    var messageBoard = new MessageBoard;
    expect(messageBoard instanceof MessageBoard).toBe(true);
  });

});
