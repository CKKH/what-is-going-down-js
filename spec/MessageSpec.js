'use strict';

describe("Message", () => {

  it("instance of Message can be stored as a variable", () => {
    var message = new Message;
    expect(message instanceof Message).toBe(true);
  });

});
