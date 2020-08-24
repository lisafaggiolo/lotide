 const assertEqual = require('./assertEqual')



const eqArrays = (array1, array2) => {
 
  // if length is not equal 
  if (array1.length!== array2.length){ 
    return false; 
  } else { 
  // comparing each element of array 
    for (let i = 0; i < array1.length; i++) { 
      if(array1[i] === array2[i]){ 
        return true;  
      
      } else {
        return false;
      } 
    }
  }
}


module.exports = eqArrays;
