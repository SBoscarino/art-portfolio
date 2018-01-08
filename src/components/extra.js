(function wordFlasher(){
  if (counter <= arrayOfOptions.length){
    for (let i = 0; i < arrayOfOptions.length; i++){
      setInterval(function(){
        currentWord = <p>arrayOfOptions[i]</p>;
       console.log('inside interval', currentWord);
     }, 4000);
    counter += 1;
    console.log(counter, currentWord);
    }
  }

  else if (counter > arrayOfOptions.length) {
    counter= 0;
  }
})()





(function changeWordInterval() {
  setInterval(wordFlasher, 4000);
})();


function wordFlasher(){
  if (counter <= arrayOfOptions.length){
       currentString = <p>arrayOfOptions[counter]</p>;
      counter += 1;
      console.log(counter, currentString);
    }
  else if (counter > arrayOfOptions.length) {
    counter = 0;
    console.log(counter);
  }
  console.log("outside",counter, currentString);
}
