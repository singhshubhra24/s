// Template.user.events({
//   'submit form#form1' : function(e){
//     e.preventDefault();
//      var count1=0;
//      var count2=0;
//      var json='{';
//     //  var json= '{';
//     // $(".xyz").each(function(value, element) {
//     //   if($(this).attr("type") == 'radio') {
//     //     var value = $('input[name=' + $(this).attr("name") + ']:checked').val().trim();
//     //     json+= '"' + $(this).attr("name").trim()+ '":"' + value + '",';
//     //   }
//     // else if($(this).attr("type") == 'select-one') {
//     //     var value = $('input[name=' + $(this).attr("name") + ']:selected').val().trim();
//     //     json+= '"' + $(this).attr("name").trim()+ '":"' + value + '",';
//     //   }
//     //
//     //   else {
//     //     json+= '"' + $(this).attr("name").trim()+ '":"' + $(this).val().trim() + '",';
//     //   }
//     // });
//     // json= $.parseJSON(json.replace(/,\s*$/, '') + '}');
//      $(".xyz").each(function() {
//        var x=$(this).attr("name");
//        var z=$(this).attr("name");
//         if(x=="gender"){
//           if(count1==0){
//             json +='"'+ $(this).attr("name").trim()+ '":"' + $("input[name='gender']:checked").val().trim()+ '",';
//             count1++;
//             console.log(x);
//             console.log($("input[name='gender']:checked").val());
//             }
//           }
//
//        else if(z=="subject"){
//         if(count2==0){
//           // var y= $('.xyz').find(":selected").text();
//            var y=$("#subject option:selected").val();
//           json +='"'+ $(this).attr("name").trim()+ '":"' +$("#subject option:selected").val().trim()+ '",';
//           // $('.xyz').find(":selected").text().trim()
//           count2++;
//           console.log(y);
//         }
//        }
//     else{
//       json +='"'+ $(this).attr("name").trim()+ '":"' + $(this).val().trim()+ '",';
//     }
//     });
//       //       json +='"'+ $(this).attr("name").trim()+ '":"' + $(this).val().trim()+ '",';
//       // });
//
//          json=JSON.parse(json.replace(/,\s*$/,'')+'}');
//           console.log(json);
//
//
//          Meteor.call('user1', json, function(error,value){
//              if(error){
//                alert("error");
//              }
//
//              else{
//
//                  Router.go('table')
//              }
//            });
//    }
// });
