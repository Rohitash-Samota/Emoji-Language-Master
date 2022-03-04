//  this is declartion of the variables
let  a=[5,2,4,1,3,6,8,7,9,10],i,j,t;
// 
for(i=0;i<=9;i++){
 for(j=i+1;j<=9;j++){
   if (a[i]>a[j])
   {
     t=a[i];
     a[i]=a[j];
     a[j]=t;
   }
 }
}
//  print the value of array after sorting
for(i=0;i<=9;i++){
 console.log(solve(a[i]));
}

function solve(a){
  return(a);
}
