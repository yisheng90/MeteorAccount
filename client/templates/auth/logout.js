Template.logout.events({
  'click button#logout': function (e, template) {
    e.preventDefault()

    // set event listen to logout
    Meteor.logout(() => {
      Router.go('home')
    })
  }
})
