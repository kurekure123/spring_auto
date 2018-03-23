/**
 * 
 */
var two = (x,y,z)=>{
	//등차 수열 초기값, 리밋값, 공차
	var sum = 0;
	for (var i = x; i <= y; i+=z) {
		sum += x;
	}
	return sum;
}

var arith =(x, y, z)=>{
  // 등차수열 초기값, 리밋값, 공차
  // 1+3+5+....+
  var  x = x*1, y = y*1, z = z*1;
  var sum = 0;
  var k = x;
  var str = "결과 값은 : ";
  sum = x;
  for(var i=1; i<y; i++) {
    k += z;
    sum += k;
  };
  return str+sum;
};

var switchSeq =(x, y, z)=>{
  var  x = x*1, y = y*1, z = z*1;
  var SW = 0;
  var k = x;
  var sum = 0;
  var str = "";
  for(var i=1; i<=y; i++){
    if(SW == 0) {
      k += z;
      sum += k;
      SW=1;
    } else {
      k += z;
      sum -= k;
      SW=0;
    }
  };
  return str+sum;
};
var geo =(x, y, z)=> {
  var  x = x*1, y = y*1, z = z*1;
  var k = x;
  var sum = x;
  var str = "";
  for(var i=1; i<y; i++){
    k *= z;
    sum += k;
  };
  return str+sum;
};

var fact =(x, y)=>{
  var  x = x*1, y = y*1;
  var sum = 0;
  var k = x;
  var str = "";
  for(var i=1; i<=y; i++) {
    k *= i;
    sum += k;
  };
  return str+sum;
};
var fibo=(x, y, z)=>{
  var  x = x*1, y = y*1, z = z*1;
  var a = x;
  var b = z;
  var c = a + b;
  var str = "";
  var sum = a+b;
  for(var i=1; i<y-1; i++){
    sum += c;
    a = b;
    b = c;
    c = a + b;
  };
  return str+sum;
};

var arrayList=()=>{
	var stx = new Array(new Array(5), new Array(5));
	var x = ['선택정렬', '버블정렬', '삽입 정렬', '석차 구하기', '이분 검색'];
	return x;
}

var mathList=()=>{
	var stx = new Array(new Array(5), new Array(5));
	var x = ['소수의 합구하기', '최대공약수', '소인수 분해', '최대값, 최소값', '5의 배수의 합', '7에 가장 가까운 수 '];
	return x;
}

var fiveByFive=()=>{
	var a = new Array();
	var o = null;
	var k = 1;
	for(var i=0; i<5; i++){
		o = new Object();
		o.a = k++;
		o.b = k++;
		o.c = k++;
		o.d = k++;
		o.e = k++;
		a.push(o);
	}
	return JSON.stringify(a);
}

var primeNum=(x)=>{
	var A = x;
	var J = 2;
	var i = A-1;
	var res = "";
	while (true){
	if (A==1) {
		res = "은 소수가 될 수 없습니다."
			break;
	}else{
		if(J<=i){
			if(A%J==0){
				res = "는 소수가 아닙니다."
					break;
			}else{
				J++;
				continue;
			}
		}else {
			res = "는 소수입니다."
				break;
		}
	}
	}
	
	return A + res;
}

var primeSum=x=>{
	 var x = x*1;
	  console.log(x);
	  var sum = 0;
	  var a, b;
	  var str = "";
	  a = 2;
	  for(;;){
	    b=2;
	    for(;;){
	      if(a % b == 0) {
	        if(a == b) {
	          sum += a;
	          break;
	        } else {
	          break;
	        }
	      } else {
	        b++;
	      }
	    }
	    if(a < x){
	      a++;
	      continue;
	    } else {
	      break;
	    }
	  }
	  return str+sum;
}
var gcf =(x,y)=>{
	var A =x;
	var B =y;
	var BIG, SMALL, MOK, NAG, GCM, LCM;
	var res = "";
	if(A>B){
		BIG = A;
		SMALL = B;
	}else {
		BIG = B;
		SMALL = A;
	}
	while(true){
		MOK = BIG/SMALL;
		NMG = BIG%SMALL;
		if(BIG%SMALL ==0){
			GCM = SMALL;
			LCM = A*B/GCM
			break;
		}else{
			BIG = SMALL;
			SMALL = NMG;
			continue;
		}
	}
	return "최대 공약수 : " + GCM + "최소 공배수 : " + LCM ;
}

var factorization=(x)=>{
	  var x = x*1;
	  var s = new Array(20);
	  var c = "";
	  for(var i=2; i<=x; i++){
	    if(x%i == 0) {
	      if(x==i) {
	        c += i;
	        x = x/i;
	        i--;
	      } else {
	        c += i+"X";
	        x = x/i;
	        i--;
	      }
	    } 
	  }
	  return c;
};

var maxNum=(x,y,z)=>{
	var i;
	var A = new Array(10);
	var J = -1, MAX = 0;
	var res= "결과는 :"
	for(J = 0; J < 9;) {
		J++;
	}
	for (var i = 0; i < 10; i++) {
		if (A[i] > MAX) {
			MAX = A[i];
		}
	}
	return res + MAX;
}

/*var primeFactorization=(x)=>{
	var B, C, D, E, MOK, NMG;
	var A = new Array(10);
	B = x;
	C = 0;
	D = 2;
 // 일단 보류
}*/
/*var primeSum=(x)=>{
	var J = 2;
	var HAP = 0;
	var K = 2;
	for (var A = 0; A <= x; A++) {
		if (K%J==0) {
			
		}else{
			J++
			continue;
		}
	}
	while (true) {
		
	}
	
	return'';
}*/
