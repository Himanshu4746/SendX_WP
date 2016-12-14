//cookies
var d = document.createElement('script');
d.type = 'text/javascript';
d.src = './wp-content/plugins/SendX/js.cookie.js';
var sc = document.getElementsByTagName('script')[0];
sc.parentNode.insertBefore(d, sc);

var s1 = document.createElement('script');
s1.type = 'text/javascript';
s1.src = './wp-content/plugins/SendX/sweetalert/dist/sweetalert.min.js';
var s1c = document.getElementsByTagName('script')[0];
s1c.parentNode.insertBefore(s1, s1c);

var s2 = document.createElement('link');
s2.rel = 'stylesheet';
s2.href = './wp-content/plugins/SendX/sweetalert/dist/sweetalert.css';
var s2c = document.getElementsByTagName('script')[0];
s2c.parentNode.insertBefore(s2, s2c);

var s3 = document.createElement('script');
s3.type = 'text/javascript';
s3.src = './wp-content/plugins/SendX/popup.js';
var s3c = document.getElementsByTagName('script')[0];
s3c.parentNode.insertBefore(s3, s3c);