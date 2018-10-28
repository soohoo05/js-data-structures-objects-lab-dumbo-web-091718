// Write your solution in this file!
const driver={}

function updateDriverWithKeyAndValue(obj,key,value){
return Object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
obj[key]=value
return obj
}

function deleteFromDriverByKey(obj,key){
let newDriver=Object.assign({},obj)
delete newDriver[key]
return driver,newDriver
}

function destructivelyDeleteFromDriverByKey(obj,key){
delete obj[key]
return obj
}
