  var img_ele = null,
  x_cursor = 0,
  y_cursor = 0,
  x_img_ele = 0,
  y_img_ele = 0;

// Start Zoomin and Zoomout
function zoom(img_ele,zoomincrement) {
  var pre_width = img_ele.getBoundingClientRect().width, pre_height = img_ele.getBoundingClientRect().height;
  img_ele.style.width = (pre_width * zoomincrement) + 'px';
  img_ele.style.height = (pre_height * zoomincrement) + 'px';
  img_ele = null;
}

//Zoomin btn
function Fn_zoomin(id){
    zoom(id,1.5);
}
function Fn_zoomout(id){
    zoom(id,0.5);
}

// var array = ["flowerImg", "flowerImg2", "flowerImg3", "flowerImg4"]
//  for(i = 0; i<array.length; i++){
//         var tmp = document.getElementById(array[i]);
//     }
dragElement(document.getElementById("flowerImg"));
dragElement(document.getElementById("flowerImg2"));
dragElement(document.getElementById("flowerImg3"));
dragElement(document.getElementById("flowerImg4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

