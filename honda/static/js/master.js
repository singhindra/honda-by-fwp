// var data = {
//   'options' : {
//               'car' : {
//                         'car1' : {
//                                   'name' : 'car1',
//                                   'link' : 'link1'
//                                 },
//                         'car2' : {
//                           'name' : 'car1',
//                           'link' : 'link1'
//                         },
//                         'car3' : {
//                           'name' : 'car1',
//                           'link' : 'link1'
//                         }
//               },
//               'bike' :{
//                       'bike1' :{
//                         'name' : 'bike1',
//                         'link' : 'link1'
//                       },
//                       'bike2' :{
//                  'name' : 'bike2',
//                  'link' : 'link1'
//                 }
//               },
//               'scooty' : {
//                         'scooty1' : {
//                                   'name' : 'scooty1',
//                                   'link' : 'link1'
//                                 },
//                         'scooty2' : {
//                           'name' : 'scooty2',
//                           'link' : 'link1'
//                         },
//                         'scooty3' :{
//                           'name' : 'scooty3',
//                           'link' : 'link1'
//                         }
//               }
//   },
//   'option2' : {
//               'car' : {
//                         'car1' : {
//                                   'name' : 'car1',
//                                   'link' : 'link1'
//                                 },
//                         'car2' : {
//                           'name' : 'car1',
//                           'link' : 'link1'
//                         },
//                         'car3' :{
//                           'name' : 'car1',
//                           'link' : 'link1'
//                         }
//               },
//               'bike' :{
//                       'bike1' :{
//                         'name' : 'bike1',
//                         'link' : 'link1'
//                       },
//                'bike2' :{
//                  'name' : 'bike2',
//                  'link' : 'link1'
//                 }
//               },
//               'scooty' : {
//                         'scooty1' : {
//                                   'name' : 'scooty1',
//                                   'link' : 'link1'
//                                 },
//                         'scooty2' : {
//                           'name' : 'scooty2',
//                           'link' : 'link1'
//                         },
//                         'scooty3' :{
//                           'name' : 'scooty3',
//                           'link' : 'link1'
//                         }
//               }
//   }
//
// }
var d = document.getElementById("myVar").value;
console.log(typeof(d));

var res = JSON.parse(d);

console.log(res);
console.log(typeof(res));///////
console.log(res)
var next_data = data;


//chat-with-options------------------------------------------
function create_list(elment){
  var op_to_show;
  var index_to_grab = elment;

  var ul = document.createElement("ul");
  op_to_show =  Object.keys(next_data[index_to_grab]);
  next_data = next_data[index_to_grab]
  //console.log(typeof(next_data))
  if(typeof (next_data) != 'string'){
  for(var i = 0; i < op_to_show.length; i++){
    var li = document.createElement("li");

    li.className = "li-button";
    li.setAttribute("onclick" ,"send_usr_response(this)");
    li.innerHTML = op_to_show[i];

    ul.appendChild(li);
    }
  }
  else{
    document.querySelector("#send").removeAttribute("disabled");
    document.querySelector("#newMsg").removeAttribute("disabled");
  }
  return(ul);
}

function next_options(text){
  var ul = create_list(text);
  var list = document.querySelector("#options");

  ul.setAttribute("id","options");
  list.remove(list);
  document.querySelector("#chat").appendChild(ul);

  console.log(text);
}

function send_usr_response(el){
  var text = el.textContent;
  next_options(text);
  usrMsg(text);
  setTimeout(() => sysMsg(), 1000);
}

//chat-with-textarea-------------------------------------------------------

//document.querySelector("#newmsg").scrollIntoView();
var msgs = document.querySelector("#msgs");
var btn = document.querySelector(".send");
var message = document.getElementById('newMsg');
console.log(message);


function usrMsg(text){
  var li = document.createElement("li");
  var p = document.createElement("p");
  var sp = document.createElement("div");
  // var tagAtt = document.createAttribute("class");
  // var innerAtt = document.createAttribute("class");

  li.className = "chat-r";
  sp.className = "sp";
  p.className = "chat-r mess mess-r";

  p.innerHTML = text;
  message.value = "";

  li.appendChild(p);
  li.insertBefore(sp, p);
  msgs.appendChild(li);

  li.scrollIntoView();
}

function sysMsg(){
  var li = document.createElement("li");
  var p = document.createElement("p");
  var sp = document.createElement("div");
  // var tagAtt = document.createAttribute("class");
  // var innerAtt = document.createAttribute("class");

  li.className = "chat-l";
  sp.className = "sp";
  p.className = "chat-r mess mess-r";

  p.innerHTML = "recieved";
  message.value = "";

  li.appendChild(sp);
  li.insertBefore(p, sp);
  msgs.appendChild(li);

  li.scrollIntoView();
}

function chat(){
  var text = message.value;
  usrMsg(text);

  setTimeout(() => sysMsg(), 1000);

}
