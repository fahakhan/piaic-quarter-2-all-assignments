//chapter 1-2-3
var firstname="faha"
var lastname="khan"
var age="20"
alert("hellow "+firstname +" "+ lastname+" your are "+age+" years old")
//chapter 5,6,7
var a=2
var b=a++ + ++a 
var c= --a - a--
alert(c)
alert(b)
alert(a)
//chapter-9
var firstname="faha"
var lastname="khan"
var age="20"
alert("hellow "+firstname +" "+ lastname+" your are "+age+" years old")
//chapter-10-14
var num1=prompt("enter a value")
var num2=prompt("enter a num")
var sign=prompt("sign")
console.log(num1+sign+num2)
if(sign=='+'){
    alert(num1+num2)
}else if(sign=='-'){
   alert(num1-num2)
}else if(sign=='*'){
    alert(num1*num2)
}else if(sign=='/'){
    alert(num1/num2)
} else if(sign=='%'){
   alert(num1/num2*100)
}
else if(sign =='+'){
        alert(num1+num2)
}
//chapter-15-16-17
var age=[]
var age1=prompt("enter 1","age1")
var age2=prompt("enter 2","age2")
var age3=prompt("enter 3","age3")
var age4=prompt("enter 4","age4")
var age5=prompt("enter 5","age5")
age.push(age1)
age.push(age2)
age.push(age3)
age.push(age4)
age.push(age5)
alert(age)
age1=prompt("age1edit",age1)
age2=prompt("age2edit",age2)
age3=prompt("age3edit",age3)
age4=prompt("age4edit",age4)
age5=prompt("age5edit",age5)
age.splice(0,0,age1)
age.splice(1,1,age2)
age.splice(2,2,age3)
age.splice(3,3,age4)
age.splice(4,4,age5)
alert(age)