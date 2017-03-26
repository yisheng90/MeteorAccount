Meteor.methods({
  authResetPassword (passwordInfo) {
    console.log('resetPassword', passwordInfo)
    var user = Accounts.setPassword( passwordInfo.user_id, passwordInfo.newPassword);
    return user;
  }
});
