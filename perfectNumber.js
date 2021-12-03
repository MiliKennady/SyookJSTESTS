let num = prompt("Enter number to be checked if perfect or not?");
let result=0;
for(let i=1;i<=num/2;i++){
	if(num%i==0){
		result=result+i;
	}
}
if(result==num){
	console.log("Perfect");
}else if(result>num){
	console.log("Abundant");
}else{
	console.log("Deficient");
}