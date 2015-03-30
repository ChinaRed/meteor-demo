//client/views/home.js

Template.posts.created = function(){

};

Template.posts.rendered = function(){

};

Template.posts.destroyed = function(){

};

Template.posts.helpers({
  postings: function(){
    return Posts.find({}, {sort: {score: -1, name: 1}});
  }
});

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