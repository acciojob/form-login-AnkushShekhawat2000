function getFormvalue() {
    //Write your code here
	let x = document.getElementById("form1");
	let name = "";
	for(let i =0; i<x.length; i++){
		if(x.elements[i].value!="Submit"){
			name += x.elements[i]+" "
		}
		
	}
alert(name.substring(0,name.lenth-1));
}
