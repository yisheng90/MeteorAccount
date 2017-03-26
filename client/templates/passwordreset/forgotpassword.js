Template.forgotpassword.events({
  'submit form': function (e, template) {
    e.preventDefault()

    let email = template.find('[name=email]').value

    Meteor.call('requestPasswordToken', email, (error, token) => {
      template.find('.error').textContent = ''
      if(error) {
        template.find('.error').textContent = "Can't locate user, please try again";
      } else {
        console.log(token)
        Router.go('home')
      }
    })
  }
})
