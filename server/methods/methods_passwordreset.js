Meteor.methods({
  authResetPassword (passwordInfo) {
    console.log('resetPassword', passwordInfo)
    let user = Accounts.setPassword( passwordInfo.user_id, passwordInfo.newPassword);
    return user;
  },
  requestPasswordToken (email) {

    //Search user by email
    let user = Accounts.findUserByEmail(email)
    let user_id = user._id

    let token = Accounts.sendResetPasswordEmail(user_id, email)
    return token
  }
});
