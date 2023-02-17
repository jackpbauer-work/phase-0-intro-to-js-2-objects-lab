const employee = {
    name:"Jack", 
    streetAddress:"123 Central Street"
  };
function updateEmployeeWithKeyAndValue(object, key, value) {
   let copyObject = {...object};
   copyObject[key] = value;
   return copyObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
}
function deleteFromEmployeeByKey(object, key) {
    var newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}

