

//const titleCased = tutorials.map(title => {
//  return title[0][0].toUpperCase();
//});

//console.log(titleCased(title));
//console.log(titleCased.join(','));

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(tutorial => {
  let tutorials = tutorial.split(" ");
  let newArr = [];
  for(let i = 0; i < tutorials.length; i++){
    let w = '';
    let word = tutorials[i];
    w+= word[0][0].toUpperCase();
    w+= word.slice(1);
    newArr.push(w);
  }
  return newArr.join(" ")
});
console.log(titleCased);

/*
const newArr = ['Guadalupe', 'Ollie', 'Aki'];


function writeCards(){
  const arrStr = [];

  for (const user of newArr){
    arrStr.push(user);
    console.log(`Thank you, ${user}, for the wonderful surprise gift!`);
  } 
  return arrStr;
}
writeCards();

*/