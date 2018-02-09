	//判断变量是否为空
	function checkVar(param){
		if(param=='' || param==undefined || param==null){
			return false;
		}
		return true;
	}
	//图形验证码
		var timestamp = (new Date()).valueOf();//时间戳
		var hide=$("#hide");
		var imgCap=$("#imgCap");
		hide.val(timestamp);
		imgCap.attr("src",host+"captcha.svl?RCaptchaKey="+timestamp);
	//点击刷新验证码
	function createCode(){
			var timestamp2 = (new Date()).valueOf();
			imgCap.attr("src",host+"captcha.svl?RCaptchaKey="+timestamp2);
//				imgCap.attr("src","http://api.pettycash.cn/pjapiregisterpre/captcha.svl?RCaptchaKey="+timestamp2);
//				imgCap.attr("src","http://192.168.1.12:8080/captcha.svl?RCaptchaKey="+timestamp2);
			hide.val(timestamp2);
		}
	//点击发送验证码
	var sendcode=$('#sendcode');
	sendcode.click(function(){
			var phonePattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^(([0\+]\d{2,3})?(0\d{2,3}))(\d{7,8})((\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
			var phone=$('#iphone').val();//手机号
	        var imgcode=$("#imgcode").val()//图形验证码
	        var cont=$("#cont");//错误提示信息
			var times=60;
			var timer=null;
			var val=$("#hide").val();
			var url1=host+"act/light-loan-lyb/registerCode2/"+phone+"/"+imgcode+"?RCaptchaKey="+val;
//			var url1=host+"act/light-loan-lyb/registerCode2/"+{phone}+"/"+{imgcode}+"?RCaptchaKey="+val;
			
			if(!checkVar(phone)){
		 	cont.text('*请输入手机号').show().delay(2000).fadeOut();
		 	return;
			 }else if(phonePattern.test(phone) == false){
		 	cont.text('*请输入正确的手机格式').show().delay(2000).fadeOut();
		 	return;
			}else if(!checkVar(imgcode)){
		 		cont.text('*请输入图形验证码').show().delay(2000).fadeOut();
		 		return;
		 }
			timer=setInterval(function(){
			times--;
			sendcode.attr("disabled","true");
			sendcode.val(times + "秒后重试");
			if(times==0){
		          sendcode.removeAttr("disabled");
		          sendcode.val("重新获取验证码");
		          sendcode.css({"color":"#ff9f00"});
		          clearInterval(timer);
		          times = 60;
		        }
		},1000)
		$.ajax({
		  	type:"get",
		  	url:url1,
		  	dataType:"jsonp",
		  	jsonp: "jsonpCallback",
		  	async:true,
		  	success:function(res){
		  		console.log(res)
		  		if(res.code==-1){
		  			createCode();
		  		}
//				  	code=0成功   code=-1手机号已被注册
				cont.text(res.message).show().delay(3000).fadeOut();
				if(res.message!="成功获取验证码"){
					 clearInterval(timer);
				}
		  	},
	  })
	})
	$("#sendcode").text("");//进入界面先清空验证码
	//点击注册
	$(".resister_go").click(function(){
		var phonePattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^(([0\+]\d{2,3})?(0\d{2,3}))(\d{7,8})((\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		var phone=$('#iphone').val();//手机号
        var cont=$("#cont");//错误提示信息
        var code=$("#yzm").val();//手机验证码
        var pwd=$("#password").val();//密码
        var pattern=/^ +| +$/g;//密码不能含有空格正则
        var  pwd_length=pwd.length;
        var hash=hex_md5(pwd).toUpperCase();
        //获取user_form
        var url =location.search;
			var Request = new Object(); 
			if(url.indexOf("?")!=-1) 
			{ 
			var str = url.substr(url.indexOf("?")+1); 
			Request[str.split("=")[0]]=(str.split("=")[1]); 
			user_from = Request["user_from"];
			}else{
				user_from="";
			}
			//验证
			if(!checkVar(phone)){
			 	cont.text("*请输入手机号").show().delay(3000).fadeOut();
			 	return;
			 }else if(phonePattern.test(phone)==false){
			 	cont.text("*请输入正确的手机格式").show().delay(3000).fadeOut();
			 	return;
			 }else if(!checkVar(code)){
			 	cont.text("*请输入手机验证码").show().delay(3000).fadeOut();
			 	return;
			 }
			 else if(!checkVar(imgcode)){
			 	cont.text("*请输入图形验证码").show().delay(3000).fadeOut();
			 	return;
			 }
			 else if(!checkVar(pwd)){
			 	cont.text("*请输入6-12位密码").show().delay(3000).fadeOut();
			 	return;
			 }else if(pwd_length<6||pwd_length>12){
			 	cont.text("*请输入6-12位密码").show().delay(3000).fadeOut();
			 	}else if(pattern.test(pwd)){
			 			cont.text("密码不能含有空格").show().delay(3000).fadeOut();
			 			return;
			 	}
			$.ajax({
				type:"post",
				async:true,
				url:host+"act/light-loan-lyb/register3?phone="+phone+"&password="+hash+"&code="+code+"&user_from="+15,
				success:function(res){
					console.log(res);
					if(res.code==0){
						cont.text("注册成功").show().delay(3000).fadeOut();
							setTimeout(function(){
								window.location.href="login.html"
							},3000)
					}else{
						cont.text(res.message).show().delay(3000).fadeOut();
					}
				}
			})
	})
