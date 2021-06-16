function fn(){
var personinfo = {
    name: "srishti",
    email:"sris1@gmail.com",
    phone:999999999
    
}


//console.log(personinfo)

//Acess the property inside the object
//console.log(personinfo.name)
//Inserting the property in the object
//personinfo.city="kanpur"
//console.log(personinfo)
//Updating the property in the object
personinfo.city="bhopal"
console.log(personinfo)
personinfo.age=26
personinfo.email="sris@gmail.com"
console.log(personinfo)

//Delete the property
delete personinfo.age
console.log(personinfo)

}
fn()

