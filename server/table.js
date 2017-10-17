Meteor.methods({
'table1' : function(){
    var x=Details.find({}).fetch();
    console.log(x);
    return x;
}
})
Meteor.methods({
'table4' : function(id){
    var y=Details.find({'_id':id}).fetch();
    console.log(y);
    return y;
}
})
