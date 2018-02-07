	
	
	
		//机选一注
   	var selectOne=$(".selectOne");
	selectOne.click(function(){
		//计算总钱数
		let bettArr=[];
		let aa=$("[name=hiddenLI]");
		for (let i=0;i<aa.length;i++){
			bettArr.push(aa[i].innerHTML)
		}
		var computerSelect=$(".computerSelect").length;//计算点击机选一注或则5注的注数
		var allBettNum=eval(bettArr.join("+"));//计算选择号码页面的总注数
		if(bettArr.length == 0) allBettNum=0;
		allBettNum=computerSelect+allBettNum+1;
		$(".finish-beetNum").text(allBettNum);
		$(".finish-money").text(parseInt(2*$(".num").val()*(allBettNum)).toFixed(2));
		var redRandom=parseInt(Math.random()*33+1);
		if(redRandom<10){
			redRandom="0"+redRandom;
		}else{
			redRandom=""+redRandom;
		}
		 var reds=[]; //1-33的随机数
		 reds.push(redRandom);
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
		           		 reds.push(r);        
		        		  }
		        }
		      }
	      //排序
	      reds.sort(function compare(a,b) {
	        return a-b;
	      })
			var OneArray=reds.concat(blues);
      		var ul=$("<ul class='mui-table-view computerSelect list'></ul>");
      		var contentlist=$(".content-list");
      		var $li_01='<li class="mui-table-view-cell icon iconfont icon-2guanbi color-gray"></li>';
      			ul.append($li_01);
      			contentlist.append(ul);
      		$(OneArray).each(function(index,value){
      			var val=OneArray[index];
      			var $li=$('<li class="mui-table-view-cell color-red">'+val+'</li>');
      			ul.append($li);
      			contentlist.append(ul)
      		});
      		let $lihidd=$('<li class="mui-table-view-cell" style="display:none"></li>');
      		ul.append($lihidd);
      		contentlist.append(ul);
	})
	
	//机选五注
		var selectFive=$(".selectFive");
		$(".selectFive").click(function(){
			
				var a=random();
				var b=random();
				var c=random();
				var d=random();
				var e=random();
				var concatArr=[];
				concatArr.push(a,b,c,d,e);
				var contentlist=$(".content-list");
				
				//计算总钱数
				let bettArr=[];
				let aa=$("[name=hiddenLI]");
				for (let i=0;i<aa.length;i++){
					bettArr.push(aa[i].innerHTML)
				}
				var computerSelect=$(".computerSelect").length;//计算点击机选一注或则5注的注数
				var allBettNum=eval(bettArr.join("+"));//计算选择号码页面的总注数
				if(bettArr.length == 0) allBettNum=0;
				allBettNum=computerSelect+allBettNum+5;
				$(".finish-beetNum").text(allBettNum);
				$(".finish-money").text(parseInt(2*$(".num").val()*(allBettNum)).toFixed(2));
				$(concatArr).each(function(index,value){
					var val=concatArr[index];
//					console.log(val)
					var ul=$("<ul class='mui-table-view computerSelect list'></ul>");
					ul.append('<li class="mui-table-view-cell icon iconfont icon-2guanbi color-gray">'+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[0]+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[1]+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[2]+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[3]+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[4]+'</li>'+
					'<li class="mui-table-view-cell color-red">'+val[5]+'</li>'+
					'<li class="mui-table-view-cell color-blue">'+val[6]+'</li>'+
					'<li class="mui-table-view-cell" style="display:none"></li>'
					)
					contentlist.append(ul);
				})
			})
	//把产生随机数的数组挂载到原型上
		Array.prototype.array = function(element) {
			for(var i = 0; i < this.length; i++) {
				if(this[i] == element) {
					return true;
				}
			}
			return false;
		}
	function random(){
		redActive = [];
		blueActive = [];
		for(let i = 0; redActive.length < 6; i++) {
			let radom = Math.random() * 33+1;
			let redItem = Math.floor(radom);
			if(redItem<10){
				redItem="0"+redItem;
			}else{
				redItem=""+redItem;
			}
			if(!redActive.array(redItem)) {
				redActive.push(redItem);
			}
		}
		for(let i = 0; blueActive.length < 1; i++) {
			let radom = Math.random() * 16+1;
			let blueItem = Math.floor(radom);
			if(blueItem<10){
				blueItem="0"+blueItem;
			}else{
				blueItem=""+blueItem;
			}
			if(!blueActive.array(blueItem)) {
				blueActive.push(blueItem);
			}
		}	
		var FiveArray=redActive.concat(blueActive);
		return FiveArray;	
	}
	