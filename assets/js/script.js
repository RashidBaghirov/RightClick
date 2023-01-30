let lastContext;
let lastinp;
let arr = [
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-eye'></i>Prewiev",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-maximize'></i>Open with <i class='fa-solid fa-chevron-right' style='float:right; margin-right:15px;'></i> <hr style = 'margin-top:7px;'> ",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-user-plus'></i>Share",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-link'></i>Get Link",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-sharp fa-solid fa-plus'></i>Add to workspace <i class='fa-solid fa-chevron-right' style='float:right; margin-right:15px;'></i>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-folder'></i>Show file location",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-brands fa-google-drive'></i>Add shortcut to Drive",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-file-export'></i>Move to",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-star'></i>Add to Started",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-pen-to-square'></i>Rename <hr style = 'margin-top:7px;'>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-closed-captioning'></i>View caption tracks",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-clock-rotate-left'></i>Manage version",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-copy'></i>Make a copy",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-circle-exclamation'></i>Report abuse",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-download'></i>Download <hr style = 'margin-top:7px;'>",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-trash-can'></i>Move a Trush",
  "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-thumbs-down'></i>Not a helpful suggestion",
];

window.oncontextmenu = function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  lastContext ? lastContext.remove() : "null";
  div.className = "context";
  div.style.width = "300px";
  div.style.backgroundColor = "white";
  div.style.boxShadow = "1px 1px 10px 1px black ";
  div.style.borderRadius = "10px";
  div.style.position = "fixed";
  div.style.top = `${event.clientY}px`;
  div.style.left = `${event.clientX}px`;
  div.style.zIndex = "11111";
  document.body.prepend(div);
  lastContext = div;
  let ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.margin = "0";
  ul.style.padding = "0px";
  div.append(ul);
  for (i = 0; i <= arr.length - 1; i++) {
    let li = document.createElement("li");
    li.style.fontSize = "12px";
    li.style.fontFamily = "italic";
    li.style.textDecoration = "none";
    li.style.color = "#373836";
    li.style.height = "20px";
    li.style.marginTop = "5px";
    li.style.marginBottom = "5px";
    li.style.paddingTop = "5px";
    li.style.paddingBottom = "5px";
    li.style.cursor = "pointer";
    li.innerHTML = arr[i];
    li.onmouseover = function () {
      li.style.backgroundColor = "rgb(223, 223, 223)";
    };
    li.onmouseout = function () {
      li.style.backgroundColor = "white";
    };
    ul.appendChild(li);
  }
  ul.firstChild.onclick = function () {
    let inp = document.createElement("input");
    lastinp ? lastinp.remove() : "null";
    inp.style.width = "250px";
    inp.style.height = "40px";
    inp.style.backgroundColor = "white";
    inp.style.border = "none";
    inp.style.borderRadius = "10px";
    inp.style.boxShadow = "1px 1px 20px 1px red";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";

    inp.onkeydown = function (event) {
      if (event.keyCode == 13) {
        document.body.style.backgroundColor = inp.value;
        inp.value = " ";
      }
    };
    document.body.append(inp);
    lastinp=inp;
    window.ondblclick = function () {
        lastinp ? lastinp.remove() : "null";
    };

  };
};

window.onclick = function () {
  lastContext ? lastContext.remove() : "null";
};
