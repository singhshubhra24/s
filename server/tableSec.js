Meteor.methods({
  // 'edit':function(myjson){
  //
  //   var x = Details.find(
  //     {"first" : myjson}
  // ).fetch();
  //   if (x.length>0)
  //   {return x
  //   }
  //   else{
  //     return 'false'
  //   }
  // },
  'edit1':function(myjson){
    Details.update({"first" : myjson.first},{$set: myjson},{upsert:myjson});
        return 'ok'
  }
})
