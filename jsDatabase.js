// JavaScript Document
//非行类元素修改方法
//1：ie obj.currentstyle[属性】 2：火狐 getcomputedstyle(obj.false)[属性】
function getstyle(obj,attr){
	
	if(obj.currentStyle){
		
		
		return obj.currentStyle[attr];
		}else{
			
			return getComputedStyle(obj.false)[attr];
			
			}
	
}
//通过类名获取一组中的属性
//obj一组 attr类名
//列ul li的class就是attr
function getByclass(obj,attr){
       var  aAll=obj.getElementsByTagName('*');//获取obj里类的所有
			var arr=[];//创建数组
			for(i=0;i<aAll.length;i++){//循环遍历
				
				if(aAll[i].className==attr){//判断有没有要找的class
				arr.push(aAll[i]);//在数组中添加
				}
				
				
			}
		 return arr;//返回数组
}