// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key] : value});
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key] : value});
}

function deleteFromDriverByKey(driver, key, value){
  var newObj = destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
  delete newObj.key;
}

function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver.key;
  return driver;
} 