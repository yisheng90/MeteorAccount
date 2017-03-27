Template.login.events({
  'submit form': function (e, template) {
    e.preventDefault()

    let email = template.find('[name=email]').value
    let password = template.find('[name=password]').value

    Meteor.loginWithPassword(email, password, function (err) {
      template.find('.error').textContent = ''
      if (err) {
        template.find('.error').textContent = 'Incorrect email address or password'
      } else {
      }
    })
  }
})
