TestClass=function(label,level){
	this.label=label;
	this.level=level;
	
}

TestClass.prototype.recur=function(num){
   r=Math.random();
   document.write(this.label+":"+r+"<BR/>");
   if(this.level==0){return;}
   x=new TestClass("inner1",0)
   x.recur();
   document.write(this.label+":"+r+"<BR/>");
   y=new TestClass("inner2",0)
   y.recur(); 
   document.write(this.label+":"+r+"<BR/>");
}