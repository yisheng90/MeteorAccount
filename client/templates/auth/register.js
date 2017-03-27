Template.register.events({
  'submit form': function (e, template) {
    e.preventDefault()

    let email = template.find('[name=email]').value
    let password = template.find('[name=password]').value
    let confirmPassword = template.find('[name=confirm-password]').value
    let name = template.find('[name=name]').value

    // Check if the password and confirm-password are the same
    if (password !== confirmPassword) {
      template.find('.error').textContent = ''
      template.find('.error').textContent = 'Your passwords do not match, please try again'
      return
    }

    let userInfo = {
      email,
      password,
      name
    }

    Meteor.call('authCreateUser', userInfo, (error) => {
      template.find('.error').textContent = ''
      if (error) {
        template.find('.error').textContent = 'Something went wrong, please try again'
      } else {
        Meteor.loginWithPassword(email, password, function (err) {
          Router.go('home')
        })
      }
    })
  },
  'keyup input#confirm-password': function (e, template) {
    // Get value of password field
    let password = template.find('[name=password]').value

    // Check the input value in #confirm-password vs password field
    if (e.target.value === password) {
      $('#confirm-password').css('border', '1px green solid')
    } else {
      $('#confirm-password').css('border', '1px red solid')
    }
  }
})
