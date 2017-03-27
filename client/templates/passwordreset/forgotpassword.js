Template.forgotpassword.events({
  'submit form': function (e, template) {
    e.preventDefault()

    // Set user email to send reset token
    let email = template.find('[name=email]').value

    // Call sever side code to send the token to user
    Meteor.call('requestPasswordToken', email, (error) => {
      template.find('.error').textContent = ''
      if (error) {
        template.find('.error').textContent = "Can't locate user, please try again"
      } else {
        Router.go('home')
      }
    })
  }
})
