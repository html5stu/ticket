//循环遍历红色球数字
			var redArr=[];
			for(var i=1;i<34;i++){
				if(i<10){
					redArr.push("0"+i)
				}else{
					redArr.push(""+i)
				}
			}
			
			$(redArr).each(function(index,value){
				var li=$("<li>"+value+"</li>")
				$(".red").append(li)
			})
			
			//循环遍历蓝色球数字
			var blueArr=[];
			for(var i=1;i<17;i++){
				if(i<10){
					blueArr.push("0"+i)
				}else{
					blueArr.push(""+i)
				}

			}
			$(blueArr).each(function(index,value){
				let Li=$("<li>"+value+"</li>");
				$(".blue").append(Li);
			});
		
//			//计算排列组合
			 function combination(m,n){   //计算排列组合
			        return factorial(m,n)/factorial(n,n);  
			        //就是Cmn(上面是n，下面是m) = Amn(上面是n，下面是m)/Ann(上下都是n)
			    }  
		    //计算阶乘
		    function factorial(m,n){  
		        var num = 1;  
		        var count = 0;  
		        for(var i = m;i > 0;i--){  
		            if(count == n){		//当循环次数等于指定的相乘个数时，即跳出for循环  
		                break;  
		            }  
		            num = num * i;  
		            count++;  
		        }  
		        return num;  
		    }  
			//计算多少注多少钱
			function calculate(){
				var redActiveLen=$(".red").find("li.active").length;
				var blueActiveLen=$(".blue").find("li.active").length;
				if(redActiveLen<6){
					$(".Betting").text(0);
					$(".money").text(0);
					return false;
				}else{
					var betting=Number(combination(redActiveLen,6)*(blueActiveLen));
					$(".Betting").text(betting);
					var money=Number(betting*2);
					$(".money").text(money);
				}
			}
			//把产生随机数的数组挂载到原型上
			Array.prototype.in_array = function(element) {
				for(var i = 0; i < this.length; i++) {
					if(this[i] == element) {
						return true;
					}
				}
				return false;
			}
			let btn = document.querySelector(".com-option");
			let lis = document.querySelectorAll(".red li");
			let bluelis=document.querySelectorAll(".blue li");
			let redActive = [],
				blueActive = [];
			//点击机选清除掉之前的所有被选中的数字
			function deleteALlnumber(){
				let ball_list=document.getElementsByClassName('ball-list')[0];
				let Li_list=ball_list.getElementsByTagName('li');
				let $Li_list=$(Li_list);
				$Li_list.removeClass("active");
			}
//			产生随机数方法
			function  produceRandom(){
				removeClass();
				redActive = [];
				blueActive = [];
				for(let i = 0; redActive.length < 6; i++) {
					let radom = Math.random() * 33;
					let redItem = Math.floor(radom);
					if(!redActive.in_array(redItem)) {
						redActive.push(redItem);
					}
				}
				for(let i = 0; blueActive.length < 1; i++) {
					let radom = Math.random() * 16;
					let blueItem = Math.floor(radom);
					if(!blueActive.in_array(blueItem)) {
						blueActive.push(blueItem);
					}
				}
			}
		
			//点击机选产生一组随机数
			btn.onclick = function () {
				deleteALlnumber();
				produceRandom();
				addClass();
				calculate();//调用 计算多少注多少钱的方法
					
			}
		//给机选选中的随机数添加active类
		function addClass() {
			for (let i of redActive) {
				lis[i].classList.add("active");
			}

			for (let i of blueActive) {
				bluelis[i].classList.add("active");
			}
		}
		//每次点击机选把之前选中的随机数清除
		function removeClass() {
			for (let i of redActive) {
				lis[i].classList.remove("active");
			}
			for (let i of blueActive) {
				bluelis[i].classList.remove("active");
			}
		}
		//计算多少注   多少钱
			$(".ball-list").find("li").click(function(){
				$(this).toggleClass("active");
				calculate();
			})
		//点击删除按钮，清除所选号码
		$(".mui-icon-trash").click(function(){
			deleteALlnumber();
			calculate();
			document.querySelector('.Betting').innerHTML=0;
			document.querySelector('.money').innerHTML=0;
			
		})