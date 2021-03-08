// Code your solutions in this file
const name = [""]
const kindGift =[""]

const newArray = [];

function writeCards(name, kindGift) {
  for (let i = 0; i < name.length; i++) {
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${kindGift} gift!`);
  }
  return newArray;
}


function countDown() {
    let countup = 0;
    while (countup <= 10) {
      console.log(countup++);
    } 
    return countup;
}



