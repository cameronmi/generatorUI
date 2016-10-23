function pickFromArray(ary) {
  return ary[Math.floor(Math.random()*ary.length)];
}
      
function generate() {
  var text1 = pickFromArray(first);
  var text2 = pickFromArray(second);
  var text3 = pickFromArray(third);
  document.getElementById('slot1').textContent=text1;
  document.getElementById('slot2').textContent=text2;
  document.getElementById('slot3').textContent=text3;
  var e = document.createElement('div')
  e.textContent = text1 + ' + ' + text2 + ' + ' + text3;
  var log = document.getElementById('log');
  log.insertBefore(e, log.firstChild);
}

function initApplication() {
  var xhr = new XMLHttpRequest();
  xhr.open( "GET", 'data.json', true );
  xhr.responseType = 'json';
  xhr.send();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var data = xhr.response;
      first = data[0];
      second = data[1];
      third = data[2];
      document.getElementById('generate-button').disbaled = false;
    }
  };
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        initApplication();
    }
}
