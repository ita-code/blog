var a_idx = 0;

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function css(el, styles) {
  for (style in styles) {
    el.style.setProperty(style, styles[style]);
  }
};

window.onload = function () {
  document.querySelector("body").onclick = (e) => {
    // console.log('e=>', e);
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    var span = document.createElement("span");
    span.innerText = '' + a[a_idx] + '';
    a_idx = (a_idx + 1) % a.length;
    var x = e.clientX,
      y = e.clientY;
    css(span, {
      "z-index": 999999,
      "top": y - 20 + "px",
      "left": x + "px",
      "position": "fixed",
      "font-weight": "bold",
      "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
      "user-select": "none",
      "cursor": "default",
      "opacity": 1,
      "transition": "all 1s"
    });
    document.querySelector("body").appendChild(span);
    setTimeout(() => {
      css(span, {
        "opacity": 0,
        "top": y - 100 + "px",
      })
    }, 0)
    setTimeout(() => {
      span.parentNode.removeChild(span)
    }, 1500)
  };
console.info("%c Gitee %c", "background:#24272A; color:#ffffff", "", "https://gitee.com/iskr");
};