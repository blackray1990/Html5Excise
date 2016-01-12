
onmessage = function (event){
	var param = event.data;	//接收的消息
	for(var i=0;i<1000;i++){
		param = param + "-/" + i;
	}
	postMessage(param);	//传递消息
}
