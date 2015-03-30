//client/views/home.js

Template.posts.created = function(){
  //set up template instance variables
  this.timer = new ReactiveVar(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

Template.posts.rendered = function(){
  var self = this;
  //any processing that needs to happen on load
  var interval = setInterval(function(){
    self.timer.set(moment().format('MMMM Do YYYY, h:mm:ss a')); 
  }, 1000);
};

Template.posts.destroyed = function(){
  //any cleanup that needs to happen
};

//define helper methods accessible from your template
Template.posts.helpers({
  //this is a reactive data source
  postings: function(){
    return Posts.find({}, {sort: {score: -1, name: 1}});
  },
  //this is also a reactive data source
  timer: function(){
    return Template.instance().timer.get();
  }

});

//bind any event handlers to your template
Template.post.events({
  'click a.upvote': function(event, template) {
    event.preventDefault();
    Posts.update(this._id, {$inc: {score: 1}});
  },
  'click a.downvote': function(event, template) {
    event.preventDefault();
    Posts.update(this._id, {$inc: {score: -1}});
  }
});