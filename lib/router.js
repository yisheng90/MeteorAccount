Router.route('/', {
  name: 'home',
  template: 'home'
})

Router.route('/register', {
  layoutTemplate: 'layout_app',
  name: 'register',
  template: 'register'
})

Router.route('/forgot-password', {
  layoutTemplate: 'layout_app',
  name: 'forgotpassword',
  template: 'forgotpassword'
})

Router.route('/reset-password/:token', {
  layoutTemplate: 'layout_app',
  name: 'passwordreset',
  template: 'passwordreset'
}, {where: 'server'})
