var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

//当音乐播放停止时，自动停止光盘旋转效果 
audio.addEventListener("ended",function(event){
	music.setAttribute("class","");	
})

//点击音乐图标，控制音乐播放效果
//music.onclick = function(){
//	if(audio.paused){
//		audio.play();
//		this.setAttribute("class","play");
////		this.style.animationPlayState = "running";//让音频标签的播放状态为running(播放)。但是兼容性不好，安卓手机底版本不支持，苹果6plus以下也不支持
//	}else{
//		audio.pause();
//		this.setAttribute("class","");
////		this.style.animationPlayState = "paused";//让音频标签的播放状态为paused(暂停)
//	}
//	
//}

music.addEventListener("touchstart",function(event){
	if(audio.paused){
		audio.play();
		this.setAttribute("class","play");
	}else{
		audio.pause();
		this.setAttribute("class","");
	}
},false)

//点击屏幕，开启好运2016
page1.addEventListener("touchstart",function(event){
	page1.style.display = "none";
	page2.style.display = "block";
	page3.style.display = "block";
	page3.style.top = "100%";
	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5500)
},false)
