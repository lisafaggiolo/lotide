
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }   
};


const findKeyByValue = (bestTvShows, tvShow) => {
  for (let genre in bestTvShows){
    
    if (bestTvShows[genre] === tvShow){
      
      return genre;
    }     
  }
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  anime: "Pokemon",
  cookingShow: "Chopped"
}



assertEqual(findKeyByValue(bestTVShowsByGenre, "Chopped"), 'cookingShow')