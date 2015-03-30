//server/server.js

Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var names = [{title: "What is HTML?",
                  body: "WTF is HTML anyways..."
                 },
                 {title: "Why is the sky blue?",
                  body: "I mean I get people THINK it's blue but who's to say it's not green"
                 },
                 {title: "Does anyone else hate simple get started tutorials?",
                  body: "It seems like everyone of these starter tutorials makes it seems so easy and then I start to build something and can't figure anything out. Am I alone?"
                 }
                ];
    for (var i = 0; i < names.length; i++){
      Posts.insert({title: names[i].title, body: names[i].body, score: 0});
    }
  }
});