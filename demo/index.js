var showText = function (arr, option) {
  if (!arr || arr.length == 0) {
    return;
  }
  var index = 0;
  document.documentElement.addEventListener("click", function (event) {
    var x = event.pageX;
    console.log(x)
    var y = event.pageY;
    var text = document.createElement("span");
    text.setAttribute("class", 'text_popup');
    this.appendChild(text);
    if (arr[index]) {
      text.innerHTML = arr[index];
    } else {
      index = 0;
      text.innerHTML = arr[index];
    }
    text.addEventListener("animationend", function () {
      text.parentNode.removeChild(text);
    })
    text.style.left = (x - text.clientWidth / 2) + "px";
    text.style.top = (y - text.clientHeight / 2) + "px";
    index++
  })
}

showText(['行也欢喜', '停也欢喜', '眉目带笑', '醉如春风', '浮生如梦', '岁月如舟'])