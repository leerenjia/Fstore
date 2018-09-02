/**
 * Created by bjwsl-001 on 2017/9/2.
 */
/********实现购物车数量加减，费用计算、全选***********/
var table=document.getElementById("cart");
//获取实现数量增减的按钮
var btns=table.getElementsByTagName("button");
//功能一：实现数量加减、费用计算
for(var i= 0,len=btns.length;i<len;i++){
    btns[i].onclick=function(){
        var input=this.parentNode.children[1];
        var n=input.value;
        //如果点的是+，就加1
        if(this.innerHTML=='+'){
            n++;

        }else if(n>1){
            n--;
        }
        input.value=n;
        //计算小计，单价*n
        var price=parseFloat(
            this.parentNode
                .previousElementSibling
                .innerHTML.slice(1));

        var subTotal=price*n;
        this.parentNode
            .nextElementSibling
            .innerHTML="￥"+subTotal.toFixed(2);
        updateFoot();
    }
}
//功能二：实现全选、反选
//获取全选按钮
var selAll=document.querySelector
("tfoot td:first-child>input");
//获取tbody中所有单选按钮
var sels=document.querySelectorAll
("tbody td:first-child input");
selAll.onclick=function(){
    for(var i=0;i<sels.length;i++){
        sels[i].checked=this.checked;
    }
    updateFoot();
}
//为每个单选按钮绑定单击事件
for(var i=0;i<sels.length;i++){
    sels[i].onclick=function(){
        if(!this.checked){
            selAll.checked=false;
        }else{
            //查找下一个未选中的input
            var unchecked=document.querySelector(
                "tbody td:first-child>input:not(:checked)");
            if(unchecked==null){
                selAll.checked=true;
            }else{
                selAll.checked=false;
            }
        }
        updateFoot();
    }

}
//定义一个函数用于实现更新总购买数量和总费用的函数
function updateFoot(){
    //获取tbody中所有单选按钮
    var sels=document.querySelectorAll
    ("tbody td:first-child input");
    //获取总计元素
    var selectedTotal=document.getElementById("selectedTotal");
    //获取总费用的元素
    var priceTotal=document.getElementById("priceTotal");
    //定义一个变量接收选择购买的数量
    var allCount=0;
    //定义一个变量接收购买所需的总费用
    var allPrice=0;
    for(var i=0;i<sels.length;i++){
        if(sels[i].checked){
            //获取被选中行对应的数量及小计
            var num=sels[i].parentNode.parentNode.children[2].children[1].value*1;
            allCount+=num;
            var total=sels[i].parentNode.parentNode.children[3].innerHTML.slice(1)*1;
            allPrice+=total;
        }
    }
    selectedTotal.innerHTML=allCount;
    priceTotal.innerHTML=allPrice.toFixed(2);
}
