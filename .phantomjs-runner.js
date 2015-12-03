var system = require('system');
var url = system.args[1] || '';
if(url.length > 0) {
            console.log("1");

  var page = require('webpage').create();  
  page.open(url, function (status) {
    if (status == 'success') {
       var delay, checker = (function() {
                  console.log("2");

        var html = page.evaluate(function () {
          console.log('eval');
          var body = document.getElementsByTagName('body')[0];
          console.log(body);
          // if(body.getAttribute('data-status') == 'ready') {
          //   return document.getElementsByTagName('html')[0].outerHTML;
          //             console.log("3");

          // }
        });
        if(html) {
          clearTimeout(delay);
          console.log(html);
          phantom.exit();
        }
      });
      delay = setInterval(checker, 100);
    }
  });
}