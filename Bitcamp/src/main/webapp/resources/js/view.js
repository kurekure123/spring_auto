/**
 * 
 */
function hello(){
  return '<h1>hellow !! AJAX 2 </h1>';
}
function navigation() {
	 return '<style>'
	  +'    .navbar-inverse {'
	  +'        margin-bottom: 0; '
	  +'        border-radius: 0px;'
	  +'    }'
	  +'    .navbar-brand {'
	  +'        font-size: 30px;'
	  +'        padding-left: 30px;'
	  +'        padding-right: 30px;'
	  +'    }'
	  +'    .navbar-header {'
	  +'    }'
	  +'    .sticky {'
	  +'        position: fixed;'
	  +'        top: 0;'
	  +'        width: 100%;'
	  +'    }'
	  +'    .jumbotron {'
	  +'        margin: 0 auto;'
	  +'    }'
	  +'    .bg {'
	  +'        background-image: url("'+$.image()+'/Penguins.jpg");'
	  +'    }'
	  +'    .mega-dropdown {'
	  +'        position: static !important;'
	  +'    }'
	  +'    .mega-dropdown-menu {'
	  +'        padding: 20px 15px 15px;'
	  +'        text-align: center;'
	  +'        width: 100%;'
	  +'    }'
	  +'</style>'
	  +'<div class="jumbotron bg" style="padding-left: 30px;">'
	  +'    <h1 style="color: white;">Welcome to Bitcamp</h1>'
	  +'</div>'
	  +'<div id="navbar" style="z-index: 9">'
	  +'<nav class="navbar navbar-inverse">'
	  +'  <div class="container-fluid">'
	  +'    <div class="navbar-header"><div id=div-nav-1st>'
	  +'        <a class="navbar-brand" href="#"><strong>BIT</strong></a>'
	  +'    </div></div>'
	  +'    <div class="collapse navbar-collapse" id="myNavbar">'
	  +'      <ul class="nav navbar-nav">'
	  +'        <li class="active"><a id="a-home" href="#"><span class="glyphicon glyphicon-home" aria-hidden="true">&nbsp;Home</span></a></li>'
	  +'        <li><a href="#"><span class="glyphicon glyphicon-book" aria-hidden="true">&nbsp;About</span></a></li>'
	  +'        <li><a id="a-board" href="#"><span class="glyphicon glyphicon-bullhorn" aria-hidden="true">&nbsp;자유게시판</span></a></li>'
	  +'        <li class="dropdown mega-dropdown">'
	  +'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"'
	  +'                aria-haspopup="true" aria-expanded="false">유틸리티<span class="caret"></span> '
	  +'            </a>'
	  +'            <ul id="ul-util" class="dropdown-menu mega-dropdown-menu list-inline">'
	  +'                <li id ="li-seq" class="col-sm-2"></li>'
	  +'                <li id ="li-math" class="col-sm-2"></li>'
	  +'                <li id ="li-array" class="col-sm-2"></li>'
	  +'                <li id ="li-sort" class="col-sm-2"></li>'
	  +'                <li class="col-sm-2"><a>글쓰기</a></li>'
	  +'            </ul>'
	  +'        </li>'
	  +'      </ul>'
	  +'        <ul class="nav navbar-nav navbar-right">'
	  +'            <li id="li-login"></li>'
	  +'            <li class="dropdown mega-dropdown">'
	  +'                <a class="dropdown-toggle" data-toggle="dropdown" role="button"'
	  +'                aria-haspopup="true" aria-expanded="false">'
	  +'                    <span class="glyphicon glyphicon-search"></span>'
	  +'                </a>'
	  +'            </li>'
	  +'        </ul>'
	  +'    </div>'
	  +'  </div>'
	  +'</nav>'
	  +'</div>'
	  ;
	}
var createHTag=(x,y)=>{
	return '<h'+x+'>' + y+'</'+x+'>'
}
var createDiv=(x,y)=>{
	return '<div id ="' +x+ '" class="'+y+'"></div>';
}
var createUL=(x, y)=>{
	return '<ul id="'+x+'" class="'+y+'"></ul>';
}

var createLI=(x, y)=>{
	return '<li id="'+x+'" class="'+y+'"></li>';
}

var createTab=()=>{
	return '<table id="tab-algo" class="table table-bordered">'
	+'        <tr>'
	+'          <td id="td-algo-arith"></td>'
	+'          <td id="result-box" rowspan="5"></td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td id="td-algo-switch"></td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td id="td-algo-geo"></td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td id="td-algo-fact"></td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td id="td-algo-fibo"></td>'
	+'        </tr>'
	+'    </table>'
}
function createButtonNav1st(){
	return '<button id="btn-nav-1st" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'
    +'<span class="icon-bar"></span>'
    +'<span class="icon-bar"></span>'
    +'<span class="icon-bar"></span>'
    +'</buttoSn>';
}
var createInput=(x,y)=>{
	return '<input id="'+x+'" type="text" placeholder="'+y+'" class="form-control">';
}
var createButton=(x,y,z)=>{
	return '<button id="'+x+'" class="'+y+'" type="button">'+z+'</button>'
}

var createATag=(x,y)=>{
	return '<a id="'+ x +'" href="#">' +y+' </a>';
}
var createSpan=(x,y)=>{
	return '<span class="glyphicon' +x+'" aria-hidden="true">&nbsp;' 
	+y+'</span>';
}
var createText=(x,y)=>{
	return '<span id="'+x+'">'+y+'</span>';
}

var createTable=(x,y,jason,txt,type)=>{
	var table ='<table id="' +x+'" class="table table-'+y+'">'
	+'<tr>'
	+'<th colspan="5">'+txt+'</th>'
	+'</tr>';
	 $.each(JSON.parse(jason), (i, j)=>{
		 table += '<tr>'
					 +'<td>('+i+') '+j.a+'</td>'
					 +'<td>('+i+') '+j.b+'</td>'
					 +'<td>('+i+') '+j.c+'</td>'
					 +'<td>('+i+') '+j.d+'</td>'
					 +'<td>('+i+') '+j.e+'</td>'
				 +'</tr>';
	 });
	 table += '</table>'
	return table;
};

var createArrayTab=(x, y, json, txt, type)=>{
	  var tab = '<table id="'+x+'" class="table table-'+y+'">'
	    +'<tr>'
	    +'<th style="width: 50%">'+txt+'</th>'
	    +'<td style="width: 50%;"></td>'
	    +'</tr>';
	  $.each(json, (i, j)=> {
	    tab += '<tr>'
    	  +'<td><a id="a-'+i+'">'+i+'. '+j+'</a></td>'
	      +'<td id="'+i+'"></td>'
	  });
	  tab += '</tr></table>'
	  return tab;
	};
var createMathTab=(x, y, json, txt, type)=>{
	  var tab = '<table id="'+x+'" class="table table-'+y+'">'
	    +'<tr>'
	    +'<th style="width: 50%">'+txt+'</th>'
	    +'<td style="width: 50%;"></td>'
	    +'</tr>';
	  $.each(json, (i, j)=> {
	    tab += '<tr>'
	      +'<td><a id="a-'+i+'">'+i+'. '+j+'</a></td>'
	      +'<td id="'+i+'"></td>'
	  });
	  tab += '</tr></table>'
	  return tab;
	};
var createRomove=(x,y,z)=>{
	return '$('+x+').'+y+'('+z+')';
}
/*function createButtonLogin() {
return '<a id="a-login" href="#"><span class="glyphicon +glyphicon-user"'
  +'aria-hidden="true">&nbsp;Login</span></a>';
}
function createButtonSeq() {
return '<a id="a-seq" href="#">수열</a>';
}
function createButtonMath() {
return '<a id="a-math" href="#">수학</a>';
}
function createButtonArray() {
return '<a id="a-array" href="#">배열</a>';
}
function createButtonSort() {
return '<a id="a-sort" href="#">정렬</a>';
}*/
