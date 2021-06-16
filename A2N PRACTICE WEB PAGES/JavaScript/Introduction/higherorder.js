function fn(f1,f2){
    console.log("fn start executing")
    f1()
    f2()
}
//fn(function(){
    //console.log("f1 start executing")
//},function(){
      //  console.log("f2 start executing")
    
//})

function fnsum(value1,value2){
    var num1 = value1
    var num2 = value2
    return num1+num2
}
 var result=fnsum(10,2)
 console.log(result)


