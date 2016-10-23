function pickFromArray(ary) {
  return ary[Math.floor(Math.random()*ary.length)];
}
      
function generate() {
  var text1 = pickFromArray(['第一格1','第一格2','第一格3','第一格4']);
  var text2 = pickFromArray(['第二格1','第二格2','第二格3','第二格4','第二格5',
                             '第二格6','第二格7','第二格8','第二格9']);
  var text3 = pickFromArray(['第3格1','第3格2','第3格3','第3格4','第3格5',
                             '第3格6','第3格7','第3格8','第3格9','第3格10',
                             '第3格11','第3格12','第3格13','第3格14','第3格15']);
  document.getElementById('slot1').textContent=text1;
  document.getElementById('slot2').textContent=text2;
  document.getElementById('slot3').textContent=text3;
}

function initApplication() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", 'data.json', false ); // false for synchronous request
  xmlHttp.responseType('json');
  xmlHttp.send();
  debugger;
  document.getElementById('generate-button').disbaled = false;
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        initApplication();
    }
}
