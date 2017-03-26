Template.logout.events({
  'click button#logout': function (e, template) {
    e.preventDefault()

    Meteor.logout(() => {
      Router.go('home');
    })
  }
})
