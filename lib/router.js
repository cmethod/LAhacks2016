if (Meteor.isClient) {


FlowRouter.route('/', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "home" });
  }
});

FlowRouter.route('/exercise/today', {
  action: function(){

    BlazeLayout.render('layout1', { top: "back", main: "yourExerciseToday" });
  }
});

FlowRouter.route('/exercise/progress', {
  action: function(){

    BlazeLayout.render('layout1', { top: "back", main: "yourExerciseProgress" });
  }
});

};
