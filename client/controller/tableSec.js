// Template.tableSec.onCreated( function tableOnCreated()
//  {
//     this.arr2=new ReactiveVar();
//  });
//
//   Template.tableSec.onRendered(function()
//    {
//      var instance=Template.instance();
//       var input=Session.get('mySession');
//
//         Meteor.call('edit',input,function(error,value){
//           if(error){
//             alert("error")
//             }
//           else {
//            instance.arr2.set(value);
//             }
//         })
        // });

Template.tableSec.helpers({
table() {
    var getData=SessionStore.get("mySession");
    console.log(getData);
    if(getData.length> 0){
      getData.forEach(function(data){
        console.log(data);
        _.each(data, function(item, key){
             console.log(key +'[[]]'+ item);
             Meteor.setTimeout(function(){
            // if(key == 'first'){
            //   console.log('uiyuiytg');
            //   $("#form3 #first").val(item);
            //
            //   }

            //  if(key=='_id'){
            //    $("Updbtn").attr("attr",item);
            //  }
              var getName=$("[name="+key+"]").attr("name");
              if(getName==key){
                //  $("#form3[@name="'+key+'"]*").val(item);
                  $("[name="+key+"]").val(item);
             }

          },1000)
        })
      })
    }
  }
})
// Template.tableSec.events({
//
//   'click #Updbtn' : function(e){
//     e.preventDefault();
//     var count1=0;
//     var count2=0;
//     var jsn="{";
//     $(".xyz").each(function() {
//       var x=$(this).attr("name");
//       var z=$(this).attr("name");
//        if(x=="gender"){
//          if(count1==0){
//            jsn+='"'+ $(this).attr("name").trim()+ '":"' + $("input[name='gender']:checked").val().trim()+ '",';
//            count1++;
//            console.log(x);
//            console.log($("input[name='gender']:checked").val());
//            }
//          }
//
//     else if(z=="subject"){
//      if(count2==0){
//        // var y= $('.xyz').find(":selected").text();
//         var y=$("#subject option:selected").val();
//        jsn +='"'+ $(this).attr("name").trim()+ '":"' +$("#subject option:selected").val().trim()+ '",';
//        // $('.xyz').find(":selected").text().trim()
//        count2++;
//        console.log(y);
//      }
//     }
//  else{
//    jsn +='"'+ $(this).attr("name").trim()+ '":"' + $(this).val().trim()+ '",';
//  }
//  });
//
// //   $(".xyz").each(function() {
// //
// //          jsn+='"' + $(this).attr("name")+ '":"' + $(this).val()+ '",';
// //        });
//     console.log(jsn);
//      var myjson = JSON.parse(jsn.replace(/,\s*$/, '') + '}');
//
//     Meteor.call('edit1',myjson,function(error,value){
//     if(error)
//     {
//       alert("error")
//     }
//     else {
//       alert('ok')
//      Router.go('table')
//      }
//   })
// }
// });
