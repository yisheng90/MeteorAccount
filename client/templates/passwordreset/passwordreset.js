Template.passwordreset.events({
  'submit form': function (e, template) {
    e.preventDefault()
    console.log(Meteor.user())
    // Get new password value
    let newPassword = template.find('[name=password]').value

    // Get user data
    let user = Meteor.user() // Get current user
    let email = Meteor.user().emails[0].address // Get user email for direct login
    console.log(email)

    // Set up params for server-side password reset
    // The build-in setPassword methods require two params
    // 1. user_id
    // 2. newPassword
    let passwordInfo = {
      user_id: user._id,
      newPassword: newPassword
    }

    // Calling server-side methods to change password
    Meteor.call('authResetPassword', passwordInfo, (error) => {
      template.find('.error').textContent = ''
      if (error) {
        template.find('.error').textContent = 'Something went wrong, please try again'
      } else {
        Meteor.loginWithPassword(email, newPassword, function (err) {
          Router.go('home')
        })
      }
    })
  }
})
