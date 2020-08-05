// var res = document.getElementById("myVar").value;
// var data = JSON.parse(res);
// var pos = 0;
// var active_lst = [];
// var user_responses = [];
// var contact_number = "9128552170";
//
// //welcome
// // for(var i=0;i<data["welcome"].chat.length;i++){
// //   set_sys_msgs(data["welcome"].chat[i]);
// // }
// //set_sys_msgs("welcome");
//
// // Sales(){
// //   var i=0;
// //   var timer = setInterval(funciton(){
// //     if(i<data['Sales'].chat.length){
// //       sys_reply[data["Sales"].chat[i]];
// //       i++;
// //     }
// //     else{
// //       clearInterval(timer);
// //     }
// //   },1000);
// //   console.log(options);
// //   var ul = document.createElement("ul");
// //   for(var i = 0; i<options.length; i++){
// //     var li = document.createElement("li");
// //
// //     li.className = "li-button";
// //     li.setAttribute("onclick" , "chat(this)");
// //     if(options[i]=="Call Helpline"){
// //       var ele = document.createElement("a");
// //       ele.setAttribute("href", "tel:"+contact_number);
// //       ele.innerHTML = options[i];
// //       console.log(ele);
// //     }
// //     else{
// //       console.log("how");
// //       var ele = document.createElement('p');
// //       ele.innerHTML = options[i];
// //
// //     }
// //     console.log(ele);
// //     li.appendChild(ele);//options[i];
// //
// //     ul.appendChild(li);
// //   }
// //   var list = document.querySelector("#options");
// //   list.remove(list);
// //
// //   ul.setAttribute("id","options");
// //   document.querySelector("#chat-options").appendChild(ul);
// // }
//
// function user_msg(text){
//   var li = document.createElement("li");
//   var p = document.createElement("div");
//   var sp = document.createElement("div");
//   var msg_lst = document.getElementById("msgs");
//
//   li.className = "msg";
//   sp.className = "sp";
//   p.className = "mess mess-r";
//
//   p.innerHTML = text;
//
//   li.appendChild(p);
//   li.insertBefore(sp, p);
//   msg_lst.appendChild(li);
//
//   li.scrollIntoView();
//   user_responses.concat(text);
// }
//
// function sys_reply(text){
//   //add_bubble();
//   //setTimeout(remove_bubble(),1000);
//   console.log(text);
//   if(typeof(text) == 'object'){
//     active_lst = text;
//     var list = document.querySelector("#options");
//     if(list!=null){list.remove();}
//     chain_msgs();
//   }
//   else{
//     var li = document.createElement("li");
//     var p = document.createElement("div");
//     var sp = document.createElement("div");
//     var msg_lst = document.getElementById("msgs");
//
//     li.className = "msg";
//     sp.className = "sp";
//
//     if(text[0]!="_"){
//     p.className = "mess mess-l";
//     p.innerHTML = text;
//     }
//     else{
//       p.className = "mess mess-l";
//       var img = document.createElement("img");
//       img.src = text.replace("_",'');
//       img.className = "img_chat";
//       p.appendChild(img);
//     }
//
//     li.appendChild(sp);
//     li.insertBefore(p, sp);
//     msg_lst.appendChild(li);
//
//     li.scrollIntoView();
//   }
// }
//
// function chat(element){
//   //initial function on selecting an option
//   var text = element.innerText;
//   user_msg(text);
//   set_sys_msgs(text);
//     //set_sys_msgs(text);
//
// }
//
// function set_sys_msgs(text){
//   //select the messages to send
//   //check if a chain inputs are there
//   //call for set options
//
//
//   var i = 0;
//   //for(i ; i< data[text].chat.length; i++){
//   var timer = setInterval(function (){
//     //if(typeof(data[text].chat[i]) != 'object' ){
//     if(i<data[text].chat.length){
//       sys_reply(data[text].chat[i]);
//       console.log(i);
//       i++;
//     }
//     else{
//       clearInterval(timer);
//       // i--;
//       console.log(i,data[text].chat.length);
//       console.log(data[text].options);
//       if(i == data[text].chat.length && data[text].options!=undefined){
//         console.log("in",data[text].options);
//         set_options(data[text].options);
//       }
//     }
//     // else{
//     //   active_lst = data[text].chat[i];
//       // var list = document.querySelector("#options");
//       // list.remove();
//       // chain_msgs();
//       // return false;
//   },1000);
//
// }
//
// function set_options(options){
//   //previous selection
//   //set options for next
//   console.log(options);
//   var ul = document.createElement("ul");
//   if(typeof(options[0]) == "object"){
//     console.log("-----------op-----------")
//     ul.setAttribute('class','wrap-x')
//     for(var i=0;i<options.length;i++){
//       var li = document.createElement("li");
//       var img = document.createElement("img");
//       var p = document.createElement('p');
//
//       li.className = "new-li-button";
//       li.setAttribute('onclick','chat(this)');
//       img.setAttribute('src',options[i]['image']);
//       p.innerHTML = options[i]['name'];
//
//       li.appendChild(p);
//       li.insertBefore(img,p);
//       ul.appendChild(li);
//   }}
//   else{
//     ul.setAttribute('class','wrap-y')
//     for(var i = 0; i<options.length; i++){
//       var li = document.createElement("li");
//
//       li.className = "li-button";
//       li.setAttribute("onclick" , "chat(this)");
//       if(options[i]=="Call Helpline"){
//       var ele = document.createElement("a");
//       ele.setAttribute("href", "tel:"+contact_number);
//       ele.innerHTML = options[i];
//       console.log(ele);
//     }
//       else{
//         console.log("how");
//         var ele = document.createElement('p');
//         ele.innerHTML = options[i];
//
//       }
//       console.log(ele);
//       li.appendChild(ele);//options[i];
//
//       ul.appendChild(li);
//   }}
//   var list = document.querySelector("#options");
//   list.remove(list);
//
//   ul.setAttribute("id","options");
//   document.querySelector("#chat-options").appendChild(ul);
// }
//
// function chain_msgs(){
//
//   console.log(pos);
//   console.log(active_lst);
//   if(pos < active_lst.length){
//     for(var i = 0; i<data[active_lst[pos]].chat.length; i++){
//         console.log(data[active_lst[pos]].chat)
//         sys_reply(data[active_lst[pos]].chat[i]);
//     }
//     document.querySelector("#send").removeAttribute("disabled");
//     document.querySelector("#newMsg").removeAttribute("disabled");
//   }
//   else{
//     console.log("else");
//   }
// }
//
// function ch_msg(){
//   pos++;
//   console.log("work");
//   user_msg(document.getElementById("newMsg").value);
//   document.getElementById("newMsg").value = "";
//   document.querySelector("#send").setAttribute("disabled","");
//   document.querySelector("#newMsg").setAttribute("disabled","");
//   chain_msgs();
// }
//
// var btn = document.querySelector(".send");
// btn.addEventListener("click", ch_msg);



var res = document.getElementById('myVar').value;
var data = JSON.parse(res);
var response_data = [];
var active_chain = [];
var pos = 0;
var contact_number = "9128552170"
var Address = "Address of Honda Agency"

sys_control('welcome');

function chat(element){
  //get the text from element
  if(element.className == "new-li-button Color"){
    var text = 'Color';
    console.log();
    data['Color']['chat'][0] = '_' + element.innerHTML.split('"')[1];
  }
  else{
  var text = element.innerText;
  }
  //call for user response
  usr_resp(element.innerText);
  //call sys_control(text) to control system actions
  // console.log(text);
  // console.log('hello');
  sys_control(text);
}

function usr_resp(text){
  //simply add the user response to user chats
  var li = document.createElement('li');
  var p = document.createElement('div');
  var sp = document.createElement('div');
  var msg_lst = document.getElementById('msgs');

  li.className = 'msg';
  sp.className = 'sp';
  p.className = 'mess mess-r';

  p.innerHTML = text;

  li.appendChild(p);
  li.insertBefore(sp,p);
  msg_lst.appendChild(li);

  li.scrollIntoView();
  response_data.push(text);
  console.log(response_data)
  //user_response.concat(text);
  //cosole.log(user_response)
}

function sys_control(text){
  var i = 0;
  remove_op();
  // console.log(text);
  setTimeout(function (){
  for(i=0;i<data[text]['chat'].length;i++){

    if(typeof(data[text].chat[i]) == 'string'){

      sys_resp(data[text].chat[i]);
    }
    else{
      active_chain = data[text].chat[i];
      pos = 0;
      chain_msgs();
    }
  }
  },1000);
  if(typeof(data[text].chat[data[text].chat.length-1]) != 'object'){
    set_options(text);
  }
}

function sys_resp(text){
  // console.log("here");
  var li = document.createElement('li');
  var p = document.createElement('p');
  var sp = document.createElement('div');
  var msg_lst = document.getElementById('msgs');

  li.className = 'msg';
  sp.className = 'sp';

  if(text[0] == '#'){

    var p = document.createElement('div');
    model_name = text.replace('#','');

    if(data[model_name]['features'] == null){
      p.className = 'mess mess-l';
      p.innerText = "Sorry for inconvinience we will provide these features soon, or you can see that on brochure.."
    }
    else{
    var list = document.createElement('ul');
    for(var k = 0;k<data[model_name]['features'].length;k++){
      var list_item = document.createElement('li');
      list_item.innerText = data[model_name].features[k];
      list.appendChild(list_item);
      // console.log(list_item);
    }
    // console.log(list);
    p.className = 'mess mess-l features';
    p.appendChild(list);
    }
  }

  else if(text[0] == '_'){
    // console.log('insert image');
    var img_src = text.replace('_','');
    var img = document.createElement('img');
    img.setAttribute('src', img_src);

    p.className = 'mess mess-l';
    p.appendChild(img);
  }
  // else if(text == 'this_image'){
  //   var img_src = text.replace('_','');
  //   var img = document.createElement('img');
  //   img.setAttribute('src', data[user_response[user_response.length-1]]['image']);
  //
  //   p.className = 'mess mess-l';
  //   p.appendChild(img);
  // }
  else{
    if(text == "Address"){
      text = Address;
    }

    p.className = 'mess mess-l';
    p.innerHTML = text;
  }
  li.appendChild(sp);
  li.insertBefore(p,sp);
  msg_lst.appendChild(li);

  li.scrollIntoView();

}

function chain_msgs(){
  remove_op();
  setTimeout(function(){
  if(pos<active_chain.length){
    for(var i = 0;i<data[active_chain[pos]].chat.length; i++){
      sys_resp(data[active_chain[pos]].chat[i]);
    }
    pos++;
  }
  },1000);
  document.getElementById('newMsg').removeAttribute('disabled');
  document.getElementById('send').removeAttribute('disabled');


}

function ch_msg() {
  var resp = document.getElementById('newMsg').value;
  usr_resp(resp);
  if(validate(resp) && resp.length >0){

    //usr_resp(resp);
    document.getElementById('newMsg').value = '';
    document.getElementById('send').setAttribute('disabled','');
    document.getElementById('newMsg').setAttribute('disabled','');
    if(pos == active_chain.length-1){
      sys_control(active_chain[pos]);
    }
    else{
      chain_msgs();
    }
  }
  else{

    response_data.pop();
    document.getElementById('newMsg').value = '';
    pos++;

  }
}

function set_options(text){
  appear_op();
  var ul = document.createElement('ul');
  var options = data[text]['options'];

  if(options[0] == "colors_list"){
    options = data[response_data[response_data.length -2]]['colors'];
    ul.setAttribute('class', 'horizontal');
    for(var i=0;i<options.length;i++){
      li = document.createElement('li');
      img = document.createElement('img');
      p = document.createElement('p');

      li.setAttribute('class','new-li-button Color');
      li.setAttribute('onclick',"chat(this)")
      img.setAttribute('src',options[i][2]);
      p.innerHTML = options[i][0];

      li.appendChild(p);
      li.insertBefore(img,p);
      ul.appendChild(li);
    }
  }


  else if(typeof(options[0]) == 'string'){
    // console.log(options)
    ul.setAttribute('class','vertical');
    for(var i =0;i< options.length;i++){
      var li = document.createElement('li');
      // console.log(options[i]);

      li.setAttribute('class','li-button');
      li.setAttribute('onclick','chat(this)');
      if(options[i] == 'Call Helpline'){
        var ele = document.createElement('a');
        ele.setAttribute('href', 'tel:'+contact_number);
        ele.innerHTML = options[i];
      }
      else if(options[i] == 'Download full Brochure'){
        var ele = document.createElement('a');
        console.log(data[response_data[2]]['brochure']);
        ele.setAttribute('href',data[response_data[2]]['brochure']);
        ele.innerHTML = options[i];
      }
      else{
        var ele = document.createElement('p');
        ele.innerHTML = options[i];
        ele.setAttribute('href','#') //data[response_data[response_data.length -2]]['brochure']);
      }
      li.appendChild(ele);
      ul.appendChild(li);
    }
  }
  else{
    ul.setAttribute('class', 'horizontal');
    for(var i=0;i<options.length;i++){
      li = document.createElement('li');
      img = document.createElement('img');
      p = document.createElement('p');

      li.setAttribute('class','new-li-button');
      li.setAttribute('onclick','chat(this)')
      console.log(options[i])
      img.setAttribute('src',data[options[i]['name']]['colors'][0][2]);
      p.innerHTML = options[i]['name'];

      li.appendChild(p);
      li.insertBefore(img,p);
      ul.appendChild(li);
    }
  }
  var list = document.querySelector('#options');
  list.remove(list);

  ul.setAttribute('id', 'options');
  document.querySelector('.op').appendChild(ul);

  appear_op();
}

function appear_op(){
  document.querySelector('.op').style.visibility = "visible";
  setTimeout(function (){
    document.querySelector('.chat-area').style.height = "65%";
  },500);
}

function remove_op(){
  // console.log("sorry");
  document.querySelector('.op').style.visibility = "hidden";
  setTimeout(function (){
  document.querySelector('.chat-area').style.height = "100%";
  },500);
}

function validate(resp){
  pos--;
  console.log(pos);
  console.log(active_chain[pos]);
  console.log(resp);
  lhs = active_chain[pos];
  if(lhs == 'name'){
    len = resp.split(" ").length;
    if(len < 2){
      console.log("ok");
      sys_resp("Please enter a valid Name");
      return false;
    }
    else{
      pos++;
      return true;

    }
  }
  else if(lhs == 'phone'){
    var phoneno = /^\d{10}$/;
    if(resp.match(phoneno)){
      pos++;
      console.log('hsh');
      return true;
    }
    else{
      sys_resp("Please enter a valid Phone");
      return false;
    }
  }
  else if(lhs == 'mail'){
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(resp.match(email)){
      pos++;
      return true;
    }
    else{
      sys_resp("Please enter a valid Mail-id");
      return false;
    }
  }
  pos++;
  return true;
}
