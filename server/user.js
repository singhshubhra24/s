Meteor.methods({
'user1' : function(json){
  Details.insert(json);
  return Details.find({}).fetch();
}
})
