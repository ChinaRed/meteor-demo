//server/publications.js
Meteor.publish("posts", function(){
  return Posts.find();
});