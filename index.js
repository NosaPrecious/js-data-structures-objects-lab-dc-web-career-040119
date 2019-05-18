// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key] : value});
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key] : value});
}

function deleteFromDriverByKey(driver, key){
  
  delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver.key;
  return driver;
} 