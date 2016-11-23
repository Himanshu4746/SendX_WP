var _scq = _scq || [];
var _scs = _scs || {};

var d = document.createElement('script');
d.type = 'text/javascript';
d.src = './wp-content/plugins/SendX/js.cookie.js';
var sc = document.getElementsByTagName('script')[0];
sc.parentNode.insertBefore(d, sc);

//<script src="/js-cookie/src/js.cookie.js"></script>
//var imported = document.createElement('script');
//imported.src = '/js-cookie/src/js.cookie.js';
//document.head.appendChild(imported);
//var my_team_id;
window.setTimeout(function() {
console.log("Set timeout called");
var my_team_id = Cookies.get('my_team_id') ||"team id not set";
console.log("Team id "+ my_team_id);
//alert(my_team_id);





_scs.teamId = my_team_id;

(function() {
  console.log("Set 2nd fxn called");
  var dc = document.createElement('script');
  dc.type = 'text/javascript';
  dc.async = true;
  //var my_team_id = Cookies.get('my_team_id') ||"team id not set";
  //var my_team_id = '0tm1Xz3dsgIdBfXZDxr1G7';
  var catanetion = '//cdn.sendx.io/prod/' + my_team_id + '.js';
  dc.src = catanetion;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(dc, s);
  console.log("Set 2nd fxn call ends");
})();

}, 15000);

//cdn.sendx.io/prod/0tm1Xz3dsgIdBfXZDxr1G7.js