
const assertEqual = require('./assertEqual'); 


const findKeyByValue = (bestTvShows, tvShow) => {
  for (let genre in bestTvShows) {
    
    if (bestTvShows[genre] === tvShow) {
      
      return genre;
    }
  }
};


/*const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  anime: "Pokemon",
  cookingShow: "Chopped"
};*/



//assertEqual(findKeyByValue(bestTVShowsByGenre, "Chopped"), 'cookingShow');

module.exports = findKeyByValue;