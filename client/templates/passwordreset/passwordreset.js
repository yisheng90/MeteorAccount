Template.passwordreset.events({
  'submit form': function(e, template) {
    e.preventDefault()

    //Get new password value
    let newPassword = template.find('[name=password]').value;

    //Get token
    let token = Router.current().params.token

    Accounts.resetPassword(token, newPassword, (error) => {
      template.find('.error').textContent = ''
      if(error) {
        template.find('.error').textContent = 'Something went wrong, please try again';
      } else {
        Router.go('home')
      }
    })
  }
})
