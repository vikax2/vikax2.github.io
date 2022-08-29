
//////////////////////////////////////////////////////////////////////////////////////////////
self.listAllProperties = function(o){     

	var objectToInspect;     
	var result = [];
	


	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
	        if ( objectToInspect == null ) continue;
		var names_props = Object.getOwnPropertyNames(objectToInspect);  

		//alert("  names_props.length ="+names_props.length);
		for(var j=0;j< names_props.length;j++) {

			var name = names_props[j];
		//	alert("name["+j+"] = "+name);

		

                        var obj;
			try {
				//obj=objectToInspect[name];
				obj=Object[name];
			} catch(e) {
			 	 //alert("error obj for "+name);
			}
			if (obj == undefined) {

				try {
					obj=objectToInspect[name];
				} catch(e) {
			 		 //alert("error obj for "+name);
				}

			}

		//	alert(" typeof = "+typeof(obj));
		//	alert(" obj = "+obj);
			
			var s= name+" = "+typeof(obj);
			if (typeof(obj) =="string") s +=" : "+Object[name];
			else
			if (typeof(obj) !="function") s +=" : "+obj;

			result = result.concat(s);

		}
		
		//result = result.concat("name="+ name_prop+" typeof="+typeof(objectToInspect[name_prop]));
	}
	

	return result; 
};


self.view_allprops2 = function(obj) {
if (obj == undefined ) return "undefined";
//alert("view_allprops(obj)  obj="+obj.valueOf());
let tff = listAllProperties(obj).sort();
var ts125="";
var ts126="";

alert(" tff.length ="+tff.length);
for(let i=0;i<tff.length; i++) {
	ts125 +="\n=-----"+tff[i];
	ts126 +="\n=-----"+tff[i];
	if (i>0)
	if ((i % 100) ==0) {
	 	alert(""+ts126);
		ts126 ="";	
	}
}
	 	alert(""+ts126);
return ts125;
};

self.view_allprops = function(obj) {

//alert("111");
if (obj == undefined ) return "undefined";
//console.log("view_allprops(obj)  obj="+obj.valueOf());
let tff = listAllProperties(obj).sort();
//alert("222");
//alert("333 tff.length="+tff.length);
var ts125="";

for(let i=0;i<tff.length; i++) {
	ts125 +="\n=-----"+tff[i];
}

return ts125;
};

//alert("start self.view_allprops2(self) ="+ self.view_allprops2(self));

////////////////////////////////////////////////////////

self.view_allprops300 = function(obj,start,len) {

//alert("111");
if (obj == undefined ) return "undefined";
//console.log("view_allprops(obj)  obj="+obj.valueOf());
let tff = listAllProperties(obj).sort();
//alert("222");
//alert("333 tff.length="+tff.length+ " start="+start+" start+len="+(start+len) );
var ts125="";

for(let i=start,j=0,k=0;(i<tff.length)  && (i<(start+len)) ; i++,j++) {
	//alert("444  =----- i="+i+"  "+tff[i]);
//	if ((j%1) == 0)
	 { k++;ts125 +="\n<br>  --- "; }
	ts125 +="   i="+i+"  "+tff[i];
}


return ts125;
};



///////////////////////////////////////////////////	///
self.viewStruct= function(o) {
alert("o ="+o);
alert("o.nodes ="+o.nodes);
     if(o.nodes != undefined){
          for(n in o.nodes){
		alert("	o.nodes[n] ="+o.nodes[n]+" "+typeof(o.nodes[n]) );
              o.nodes[n].parent = o;
              self.viewStruct(o.nodes[n]);
          }
     }
}

/////////////////////////////////////////////////////
self.setParent = function(o){
     if(o.nodes != undefined){
          for(n in o.nodes){
              o.nodes[n].parent = o;
              self.setParent(o.nodes[n]);
          }
     }
}
