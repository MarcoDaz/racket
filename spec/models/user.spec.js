const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      username: "username",
      email: "someone@example.com",
      password: "password",
      basket: []
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      username: "username",
      email: "someone@example.com",
      password: "password",
      basket: []
    });
    expect(user.password).toEqual("password");
  });

  it("has a basket", () => {
    const user = new User({
      username: "username",
      email: "someone@example.com",
      password: "password",
      basket: []
    });
    expect(user.basket).toEqual([]);
  });

  it("can save a user", (done) => {
    const user = new User({
      username: "username",
      email: "someone@example.com",
      password: "password",
      basket: []
    });
    
    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, user) => {
        console.log(user);
        expect(err).toBeNull();

        expect(user[0]).toMatchObject({
          username: "username",
          email: "someone@example.com",
          password: "password",
          basket: []
        });

        done();
      });
    });
  });
});
