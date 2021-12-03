const num = prompt('Enter number of fishes:');
console.log(num);
const k=prompt('K');
console.log(k);
const l=prompt('L');
console.log(l);
const m=prompt('M');
console.log(m);
const n=prompt('N');
console.log(n);
var result=0;
if(k==1 || l==1 || m==1 || n==1){
	result=num;
}
else{
	for(var i=0;i<num;i++)
	{
		if( i%k!=0 && i%l!=0 && i%m!=0 && i%n!=0){
			result+=1;
		}
	}
}

console.log(result);