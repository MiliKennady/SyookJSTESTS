let num = prompt("Enter number to be checked:");
let steps=0;
while(num!=1){
	if(num%2 == 0){
		num=num/2;
		steps+=1;
	}
	else{
		num= num*3+1;
		steps+=1;
	}
}
console.log("No. of steps to reach 1 is",steps);