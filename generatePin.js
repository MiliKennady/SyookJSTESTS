const num = prompt('Enter number to be converted to pin:');
var temp = num;
var binary_array = [ ];
var result = [ ];
while(temp!=1){
	console.log(temp,"FIrts temp")
	let b = temp%2;
	console.log(b,"first mode")
	binary_array.push(b);
	temp = Math.floor(temp/2);
	console.log(temp,"after div")
}
binary_array.push(1);
console.log(binary_array);
for(var i =0;i<binary_array.length;i++){
	if(binary_array[i]!=0){
		let n = binary_array[i]*Math.pow(10,i);
		if(n==1)
		{
			result.push("pop");
		}
		else if(n == 10){
			result.push("double rip");
		}
		else if (n == 100){
			result.push("hide your mints");
		}
		else if(n== 1000){
			result.push("fall");
		}
		else
		{
			result.reverse();
		}

	}
}
console.log(result);