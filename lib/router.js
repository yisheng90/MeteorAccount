Router.route('/', {
  name: 'home',
  template: 'home'
})

Router.route('/register', {
  layoutTemplate: 'layout_app',
  name: 'register',
  template: 'register'
})

// Set up the route for password reset
// A beforeAction hook is added so that only logged in user are able to reset the password
Router.route('/reset-password', {
  layoutTemplate: 'layout_app',
  name: 'passwordreset',
  template: 'passwordreset',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('home')
    }
    this.next()
  }
})
