//功能:加载页头与页尾
//$("#header").load("header.html");
//$("#footer").load("footer.html");
//点击显示登录界面
window.onload=function(){
    var modal=document.getElementById('modal');
    var user=document.getElementById('user');
    user.onclick=function(){
        if(modal.style.display=='block'){ // == 判断div.display是否为显示
            modal.style.display='none'; //= 赋值也可了解成改变
        }
        else{
            modal.style.display='block';
        }
    }
    //点击关闭登录界面
    var logClose=document.getElementById('logClose');
    logClose.onclick=function(){
        if(modal.style.display=='block'){ // == 判断div.display是否为显示
            modal.style.display='none'; //= 赋值也可了解成改变
        }
        else{
            modal.style.display='block';
        }
    };

//点击跳转到注册页面
    var regBtn=document.getElementById('regBtn');
    var register=document.getElementById('register');
    regBtn.onclick=function(){
        if(modal.style.display=='block'){ // == 判断div.display是否为显示
            modal.style.display='none';
            register.style.display='block';//= 赋值也可了解成改变
        }
        else{
            modal.style.display='block';
        }
    };
//点击跳转到登录页面
    var logBtn=document.getElementById('logBtn');
  /*  var modal=document.getElementById('modal');*/
    logBtn.onclick=function(){
        if(register.style.display=='block'){ // == 判断div.display是否为显示
            register.style.display='none';//= 赋值也可了解成改变
            modal.style.display='block';

        }
        else{
            register.style.display='block';
        }
    };
//点击关闭注册界面
    var regClose=document.getElementById('regClose');
    regClose.onclick=function(){
        if(register.style.display=='block'){ // == 判断div.display是否为显示
            register.style.display='none'; //= 赋值也可了解成改变
        }
        else{
            register.style.display='block';
        }
    };
};
//点击关闭注册界面
var searchBtn=document.getElementById('searchBtn');
var searchForm=document.getElementById('searchForm');
searchBtn.onclick=function(){
    if(searchForm.style.display=='block'){ // == 判断div.display是否为显示
        searchForm.style.display='none'; //= 赋值也可了解成改变
    }
    else{
        searchForm.style.display='block';
    }
};
//点击totop实现返回页面顶部
(function(obj)
{var toTop=document.getElementById('toTop');
    var timer = null;
    toTop.onclick=function(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            scrollTo(0,oTop-30);
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}
})(window);
