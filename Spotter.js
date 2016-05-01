if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.navigation.events({
  //  'click paper-icon-button': function(event, template){
    //  $(event.currentTarget).toggleClass("paper-drawer-toggle")}
  });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var Connection = Tedious.Connection;

var config = {
    userName: 'mikewombat@lheu4c8fx8.database.windows.net',
    password: 'Starexplorer1mic',
    server: 'lheu4c8fx8.database.windows.net',
    options: {
        encrypt: true,
        database: 'SpotterDatabase'
    }
};

var connection = new Connection(config);

connection.on('connect', function (err) {
    var request = new Tedious.Request('SELECT TOP 20 * from dbo.SpotterTable', function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function (columns) {
        var r = '';
        columns.forEach(function (column) {
            r = r + ' ' + column.value;
        });
        console.log('\n ', r);
    });

    connection.execSql(request);
});
  });
}
