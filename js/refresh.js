		//刷新获取双色球

		 getDoubleBall();
		 function getDoubleBall(){
		    		 //定义一个数组 用来装红色球的随机数
		    		 var redRandom=parseInt(Math.random()*33+1);
		    		 if(redRandom<10){
		    		 	redRandom="0"+redRandom
		    		 }else{
		    		 	redRandom=""+redRandom;
		    		 }
			      var reds=[redRandom]; //1-33的随机数
			      //定义一个数组 用来装蓝色球的随机数
			      var blueRandom=parseInt(Math.random()*16+1);
			      if(blueRandom<10){
			      	blueRandom="0"+blueRandom
			      }else{
			      	blueRandom=""+blueRandom;
			      }
			      var blues=[blueRandom]; //1-16的随机数
			      while(reds.length<6){  //双色球是6红1蓝，故长度小于6 说明会循环5次 因为前面reds已经有一次的默认值
			        var r=parseInt(Math.random()*33+1); //定义r 随机数的取值与reds一致 用于与reds作比较
			        if(r<10){
			        		r="0"+r;
			        }else{
			        		r=""+r;
			        }
			        for (var i = 0; i < reds.length; i++) {
			          if (reds[i]==r) {    //若 reds中的随机值与r中的相等，则跳出，继续i++取值
			            break;        //若reds中的随机值与r中的不相等，则进入else if
			          } else if(i==reds.length-1){ 
			            reds.push(r);        //将r中的值添加到reds中  push()：向数组中添加元素
			          }
			        }
			      }
		  //排序
		  reds.sort(function compare(a,b) {
		    return a-b;
		  })
			for(var i=1 in reds){
				document.getElementById("double"+i).innerHTML=reds[i];
			}
			document.getElementById("double6").innerHTML=blues;
		  		
		  }
		 

		//刷新获取福彩3D

		 getThreed();
		 function getThreed(){
		    		 //定义一个数组 用来装红色球的随机数
			      var reds=[parseInt(Math.random()*9)]; //0-9的随机数
			      //定义一个数组 用来装蓝色球的随机数
			      while(reds.length<3){  //双色球是6红1蓝，故长度小于6 说明会循环5次 因为前面reds已经有一次的默认值
			        var r=parseInt(Math.random()*9); //定义r 随机数的取值与reds一致 用于与reds作比较
			        for (var i = 0; i < reds.length; i++) {
			          if (reds[i]==r) {    //若 reds中的随机值与r中的相等，则跳出，继续i++取值
			            break;        //若reds中的随机值与r中的不相等，则进入else if
			          } else if(i==reds.length-1){ //reds.length-1 --> 原先的reds.length为5，减1为4，而数组是从0 开始算，所以这里会循环5次，刚好与 reds.length<6 同步；且 i等于reds.length-1，是让随机数循环5次（另外就是让它找到定义中的最后一位数）
			            reds.push(r);        //将r中的值添加到reds中  push()：向数组中添加元素
			//值得注意是！r与reds作比较时，是以reds中现有的数作比较，因为 reds.push(r); 这句代码已经向reds中添加了数值，所以r不是以reds中自身产生的随机数作比较，而是原先r添加到reds中的值作比较
			          }
			        }
			      }
		  //排序
		  reds.sort(function compare(a,b) {
		    return a-b;
		  })
			for(var i=1 in reds){
				document.getElementById("threed"+i).innerHTML=reds[i];
			}
		  }
		 
		 //刷新获取七乐彩

		 getSeven();
		 function getSeven(){
		    		 //定义一个数组 用来装红色球的随机数
			      var reds=[parseInt(Math.random()*30)+1]; //0-9的随机数
			      //定义一个数组 用来装蓝色球的随机数
			      while(reds.length<7){  //双色球是6红1蓝，故长度小于6 说明会循环5次 因为前面reds已经有一次的默认值
			        var r=parseInt(Math.random()*30+1); //定义r 随机数的取值与reds一致 用于与reds作比较
			        for (var i = 0; i < reds.length; i++) {
			          if (reds[i]==r) {    //若 reds中的随机值与r中的相等，则跳出，继续i++取值
			            break;        //若reds中的随机值与r中的不相等，则进入else if
			          } else if(i==reds.length-1){ //reds.length-1 --> 原先的reds.length为5，减1为4，而数组是从0 开始算，所以这里会循环5次，刚好与 reds.length<6 同步；且 i等于reds.length-1，是让随机数循环5次（另外就是让它找到定义中的最后一位数）
			            reds.push(r);        //将r中的值添加到reds中  push()：向数组中添加元素
			//值得注意是！r与reds作比较时，是以reds中现有的数作比较，因为 reds.push(r); 这句代码已经向reds中添加了数值，所以r不是以reds中自身产生的随机数作比较，而是原先r添加到reds中的值作比较
			          }
			        }
			      }
		  //排序
		  reds.sort(function compare(a,b) {
		    return a-b;
		  })
			for(var i=1 in reds){
				document.getElementById("seven"+i).innerHTML=reds[i];
			}
		  }
		 
