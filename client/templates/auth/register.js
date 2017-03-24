Template.register.events({
  'submit form': function(e, template) {
    e.preventDefault();

    let email = template.find('[name=email]').value;
    let password = template.find('[name=password]').value;
    let name = template.find('[name=name]').value;

    let userInfo = {
      email,
      password,
      name
    };
    Meteor.call("authCreateUser", userInfo, (error) => {
      template.find('.error').textContent = '';
      if(error) {
        template.find('.error').textContent = 'Something went wrong, please try again';
      } else {
        Meteor.loginWithPassword(email, password, function(err) {
          Router.go('home');
        });
      }
    });
  }
});
