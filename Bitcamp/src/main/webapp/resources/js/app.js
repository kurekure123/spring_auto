var app = app || {};
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
  var $wrapper,context,algo,view;
  var onCreate =()=>{
    $wrapper = $('#wrapper');
    $contents=$('#contents');
    context = $.context();
    algorithm = $.javascript()+'/algorithm.js';
    view = $.javascript()+'/view.js';
    algo = $.javascript()+'/algo.js';
    setContentView();
  };
  var setContentView=()=>{
    $wrapper.empty();
    $.getScript(view,()=>{
      $wrapper.append(navigation()); 
      $(createButtonNav1st()).appendTo($('#div-nav-1st')).click(()=>{
    	 alert('Button Click !!'); 
      });
      $(createATag('login',createSpan('glyphicon-user','로그인'))).appendTo($('#li-login')).click(()=>{
    	  alert('로그인 버튼 클릭')
      });
      $(createATag('seq','수열')).appendTo($('#li-seq')).click(()=>{
    	  alert('수열 버튼 클릭 됨') 
    	  $contents.empty();
    	  $(createDiv('content','container')).appendTo($contents);
    	  $('#content').append(createHTag('2','Sequnce Table!!')).append(createTab());
    	  var $left=$('#tabLeft'),$right=$('#result-box');
    	  $(createATag('a-arith', '등차수열의 합')).appendTo($('#td-algo-arith'))
    	  $(createATag('a-switch', '수열2')).appendTo($('#td-algo-switch'));
    	  $(createATag('a-geo', '수열3')).appendTo($('#td-algo-geo'))
    	  $(createATag('a-fact', '수열4')).appendTo($('#td-algo-fact'))
    	  $(createATag('a-fibo', '수열 5')).appendTo($('#td-algo-fibo'))
    	  $(createInput('start', '시작 값')).appendTo($right);
		  $(createInput('limit', '제한 값')).appendTo($right);
		  $(createInput('allow', '공차 값')).appendTo($right);
		  $(createButton('btn-result','btn-primary','결과 보기'))
	        .appendTo($right)
	        .on('click',()=>{
	          alert('click!');
	            var x = $('#start').val();
	            var y = $('#limit').val();
	            var z = $('#allow').val();
	            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
	              $.getScript(algo, ()=>{
	                alert('if true!');
	                $right.text(arith(x, y, z));
	                $('#start').val("");
	                $('#limit').val("");
	                $('#allow').val("");
	              });
	            } else {
	              alert('값을 넣어주세요!');
	            }
	          });  
      $('#a-arith').on('click', ()=>{
    	  $right.empty();
    	  $right.attr('style','width:500px')
    	  $(createInput('start', '시작 값')).appendTo($right)
		  $(createInput('limit', '제한 값')).appendTo($right)
		  $(createInput('allow', '공차 값')).appendTo($right)
		  $(createButton('btn-result','btn-primary','결과 보기')).appendTo($right).on('click', ()=>{  
		  		var x = $('#start').val();
	            var y = $('#limit').val();
	            var z = $('#allow').val();
	            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
	              $.getScript(algo, ()=>{
	                alert('if true!');
	                $right.text(arith(x, y, z));
	                $('#start').val("");
	                $('#limit').val("");
	                $('#allow').val("");
	              });
	            } else {
	              alert('값을 넣어주세요!');
	            }
		  });       
      });
      $('#a-switch').on('click', ()=>{
    	  $right.empty();
    	  $(createInput('start', '시작 값')).appendTo($right);
		  $(createInput('limit', '제한 값')).appendTo($right);
		  $(createInput('allow', '공차 값')).appendTo($right);
		  $(createButton('btn-result','btn-primary','결과 보기'))
	        .appendTo($right)
	        .on('click',()=>{
	          alert('click!');
	            var x = $('#start').val();
	            var y = $('#limit').val();
	            var z = $('#allow').val();
	            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
	              $.getScript(algo, ()=>{
	                alert('if true!');
	                $right.text(switchSeq(x, y, z));
	                $('#start').val("");
	                $('#limit').val("");
	                $('#allow').val("");
	              });
	            } else {
	              alert('값을 넣어주세요!');
	            }
	        	});
	          });
		  $('#a-geo').on('click', ()=>{
			  $right.empty();
	    	  $(createInput('start', '시작 값')).appendTo($right);
			  $(createInput('limit', '제한 값')).appendTo($right);
			  $(createInput('allow', '공차 값')).appendTo($right);
			  $(createButton('btn-result','btn-primary','결과 보기'))
		        .appendTo($right)
		        .on('click',()=>{
		          alert('click!');
		            var x = $('#start').val();
		            var y = $('#limit').val();
		            var z = $('#allow').val();
		            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		              $.getScript(algo, ()=>{
		                alert('if true!');
		                $right.text(geo(x, y, z));
		                $('#start').val("");
		                $('#limit').val("");
		                $('#allow').val("");
		              });
		            } else {
		              alert('값을 넣어주세요!');
		            }
		      
		  });
      });
		  $('#a-fact').on('click', ()=>{
			  $right.empty();
	    	  $(createInput('start', '시작 값')).appendTo($right);
			  $(createInput('limit', '제한 값')).appendTo($right);
			  $(createInput('allow', '공차 값')).appendTo($right);
			  $(createButton('btn-result','btn-primary','결과 보기'))
		        .appendTo($right)
		        .on('click',()=>{
		          alert('click!');
		            var x = $('#start').val();
		            var y = $('#limit').val();
		            var z = $('#allow').val();
		            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		              $.getScript(algo, ()=>{
		                alert('if true!');
		                $right.text(fact(x, y, z));
		                $('#start').val("");
		                $('#limit').val("");
		                $('#allow').val("");
		              });
		            } else {
		              alert('값을 넣어주세요!');
		            }
		        });
		     });
		  $('#a-fibo').on('click', ()=>{
			  $right.empty();
	    	  $(createInput('start', '시작 값')).appendTo($right);
			  $(createInput('limit', '제한 값')).appendTo($right);
			  $(createInput('allow', '공차 값')).appendTo($right);
			  $(createButton('btn-result','btn-primary','결과 보기'))
		        .appendTo($right)
		        .on('click',()=>{
		          alert('click!');
		            var x = $('#start').val();
		            var y = $('#limit').val();
		            var z = $('#allow').val();
		            if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		              $.getScript(algo, ()=>{
		                alert('if true!');
		                $right.text(fibo(x, y, z));
		                $('#start').val("");
		                $('#limit').val("");
		                $('#allow').val("");
		              });
		            } else {
		              alert('값을 넣어주세요!');
		            }
		        });
		     });
      });
      $(createATag('a-math','수학')).appendTo($('#li-math')).click(()=>{
    	  alert('수학 버튼 클릭 됨') 
    	  $contents.empty();
    	  $.getScript(algo,()=>{
	    		 $contents.append($(createDiv('div-math', 'container'))
	    				 .append($(createHTag('2', '기본 수학 알고리즘')))
	    				 .append(createMathTab('text', 'bordered tab-algo-fiveByFive', mathList(), '목차', 'default')));
	    		 $('#a-0').on('click', ()=>{
	    			 $(('#0')).html($(createInput('value', '판별하려는 값')))
	    			 .append($(createButton('btn-result','btn-primary','결과 보기')));
	    			 $('#btn-result').on('click',()=>{
	 		          alert('click!'); 		          
	 		          var x = $('#value').val();
	 		         if(x!=='' && x>0){
		 		          $.getScript(algo, ()=>{
		 		        	  alert('if true!');
		 		        	  $('#0').text(primeSum(x));
		 		        	  $('#value').val("");
		 		          });
	 		          }else {
	 		        	 alert('값을 넣어주세요!');
	 		          }
	 		       });
	    		 });
	    		 $('#a-1').on('click', ()=>{
	    			 $(('#0')).html($(createInput('first', '첫번째 값')))
	    			 .append(createInput('second', '두번째 값'))
	    			 .append($(createButton('btn-result','btn-primary','결과 보기')));
	    			 $('#btn-result')
	 		        .on('click',()=>{
	 		          alert('click!');
	 		          var x = $('#first').val();
	 		          var y = $('#second').val();
	 		         if(x!=='' && x>0 && y!=='' && y>0){
		 		          $.getScript(algo, ()=>{
		 		        	  alert('if true!');
		 		        	  $('#0').text(gcf(x,y));
		 		        	  $('#first').val("");
		 		        	  $('#second').val("");
		 		          });
	 		          }else {
	 		        	 alert('값을 넣어주세요!');
	 		          }
	 		       });
	    		 });
	    		 $('#a-2').on('click', ()=>{
	    			 $(('#0')).html($(createInput('first', '계산 하려는 값을 입력해 주세요')))
	    			 .append($(createButton('btn-result','btn-primary','결과 보기')));
	    			 $('#btn-result')
	 		        .on('click',()=>{
	 		          alert('click!');
	 		          var x = $('#first').val();
	 		         if(x!=='' && x>0){
		 		          $.getScript(algo, ()=>{
		 		        	  alert('if true!');
		 		        	  $('#0').text(factorization(x));
		 		        	  $('#first').val("");
		 		          });
	 		          }else {
	 		        	 alert('값을 넣어주세요!');
	 		          }
	 		       });
	    		 });
	    		 $('#a-3').on('click', ()=>{
	    			 $(('#0')).html($(createInput('first', '계산하려는 값을 입력해주세요')))
	    			 .append($(createButton('btn-result','btn-primary','결과 보기')));
	    			 $('#btn-result')
	 		        .on('click',()=>{
	 		          alert('click!');
	 		          var x = $('#first').val();
	 		         if(x!=='' && x>0){
		 		          $.getScript(algo, ()=>{
		 		        	  alert('if true!');
		 		        	  $('#0').text(maxMin(x));
		 		        	  $('#first').val("");
		 		          });
	 		          }else {
	 		        	 alert('값을 넣어주세요!');
	 		          }
	 		       });
	    		 });
	             $('#1').remove();
	             $('#2').remove();
	             $('#3').remove();
	             $('#4').remove();
	             $('#5').remove();
	             $('#0').attr('rowspan', mathList().length+1);
	    	  });
      });
      $(createATag('a-sort','정렬')).appendTo($('#li-array')).click(()=>{
    	  alert('정렬 버튼 클릭 됨') 
    	  $contents.empty();
    	  $.getScript(algo,()=>{
	    		 $contents.append(  $(createDiv('div-array','container'))
	    				 .append(createHTag('2', '정렬 알고리즘'))
	    				 .append(createArrayTab('text', 'bordered tab-algo-list',arrayList(), '목록', 'default')));
	    		 $('#0').text('이런');
	             $('#1').remove();
	             $('#2').remove();
	             $('#3').remove();
	             $('#4').remove();
	             $('#0').attr('rowspan', arrayList().length+1);
	    	  });
      });
      $(createATag('a-array','배열')).appendTo($('#li-sort')).click(()=>{
    	  alert('배열 버튼 클릭 됨') 
    	  $contents.empty();
    	  $contents.append($(createDiv('div-array', 'container'))
 				 .append($(createHTag('2', '배열 알고리즘')))
 				 .append(createTable('text', 'bordered tab-algo-fiveByFive', fiveByFive(), '목차', 'default')));
    	  
      });
    });
  };
  
  
  
  return {onCreate:onCreate};
})();