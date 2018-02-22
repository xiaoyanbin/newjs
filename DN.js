(function(root,factory){
 root.$ = root.DN = factory();

})(this,function(){
	
	var DN = {
		DNew: function(){
			var Constructor = [].shift.call(arguments); 
	        var obj = Object.create(Constructor.prototype);
	         //  console.log(arguments,[].shift.call(arguments));
	        obj.__proto__ = Constructor.prototype
	          // 返回到原型链上
	        var result = Constructor.apply(obj,arguments);
	        return  typeof result === 'object' ? result || obj : obj;
		}
	}
	return DN;
})