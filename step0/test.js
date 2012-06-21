function getUrlParams() {
  var params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
    params[key] = value;
  });
  return params;
}

function mock_console() {
  if (!window.console) window.console = {};
  if (!window.console.log) window.console.log = function () { };
}

function use_console() {
  console.log("use_console");
  document.write("Using console to log, missing:"+(!window.console));
}
