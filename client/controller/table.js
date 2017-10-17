// Template.table.events({
//   'click .edit_btn': function(e) {
//     var id = $(e.target).attr('id');
//     // var topicName = $(e.target).find('[name=topic]').val();
//     console.log(id);
//     Meteor.call('table4', id, function(error, value) {
//       if (error) {
//         alert("error")
//       } else {
//         console.log(value);
//         SessionStore.set('mySession', value);
//         console.log(SessionStore.get("mySession"));
//         Router.go('tableSec')
//       }
//     })
//   }
// });
// Template.table.onCreated( function tableOnCreated()
//  {
//    this.arr1=new ReactiveVar();
//  })
//
// Template.table.onRendered(function() {
//   var instance = Template.instance();
//   // SessionStore.set("mySession",'');
//   Meteor.call('table1', function(error, value) {
//     if (error) {
//       alert("error")
//     } else {
//       instance.arr1.set(value);
//       console.log(value)
//     }
//   })
// });
//   Template.table.helpers({
//   counter1() {
//     //  console.log(Template.instance().arr1.get())
//     //   if(Template.instance().arr1.get().length>0){
//     return Template.instance().arr1.get();
//     //  }else{
//     //    return false;
//     //  }
//   }
// });
