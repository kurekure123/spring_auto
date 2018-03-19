/**
 * 
 */
var app = app || {};
/*app = (()=>{
  var init =x=>{
    onCreate(x);
    setContentView();
  };
  var onCreate=x=>{
    app.router.onCreate(x);
  };
  var setContentView =()=>{
    $('#wrapper').empty();
    app.algorithm.onCreate();
  };
  return { //클로저
    init : init
  };
})();*/ //IIFE(이파이) 즉시 실행함수 패턴
app =(()=>{
  var init=x=>{
    $.getScript(x+'/resources/js/router.js',()=>{
      $.extend(new Router(x));
      app.algorithm.onCreate();
    })
  };
  return{init:init};
})();
app.algorithm=(()=>{
  var $wrapper,context,algorithm,view;
  var onCreate =()=>{
    $wrapper = $('#wrapper');
    context = $.context();
    algorithm = $.javascript()+'/algorithm.js';
    view = $.javascript()+'/view.js';
    setContentView();
  };
  var setContentView=()=>{
    $wrapper.empty();
    $.getScript(view,()=>{
      $wrapper.html(hello());  
    });
  };
  return {onCreate:onCreate};
})();