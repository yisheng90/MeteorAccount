Meteor.methods({
  authCreateUser(userInfo) {
    var user_id = Accounts.createUser({
      email: userInfo.email,
      password: userInfo.password,
      profile: {
        name: userInfo.name
      }
    });
    return user_id;
  },

});
