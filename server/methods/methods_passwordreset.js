Meteor.methods({
  authResetPassword (passwordInfo) {
    var user = Accounts.setPassword(passwordInfo.user_id, passwordInfo.newPassword)
    return user
  }
})
