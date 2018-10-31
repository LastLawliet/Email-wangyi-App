function parthURL(surl){
    var str = url.split("?")[1];
    if(!str){return;}
    var arr = str.split("&");
    var obj = {};
    for(let i=0;i<arr.length;i++){
        [key,val] = arr[i].split("=");
        obj[key] = val;
    }
    return obj;
}

//改 链接username
var url = window.location.href;
var obj = parthURL(url);
if(obj){
    if(obj.username){
        $("span.login_btn").remove();
        $("li.user > span").html("<img src='img/ihead1.jpg' style='width:90%;height:auto;border-radius:50%;'></i>")
        $(".text_login p").text(obj.username);
        let str = url.split("?")[1];

        $("footer li a,nav ul li a").each(function(){
            href0 = $(this).attr("href")
            $(this).attr({"href": href0+"?"+str});
        });
    }
}