//FizzBuzz Solutions Lieuwe Baron


//FizzBuzz1(100);
//FizzBuzz2(100);


//FIZZBUZZ solution 1
function FizzBuzz1(length) {
  for(i = 1; i <= length; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');   
    } else if(i % 3 === 0) {
      console.log('Fizz');     
    } else if(i % 5 === 0) {
      console.log('Buzz'); 
    } else {
      console.log(i); 
    }
  } 
} 

//FIZZBUZZ solution 2
function FizzBuzz2(length) {
  var out;
  for(i = 1; i <= length; i++) {   
    out = '';
    if(i % 3 === 0) {
      out += 'Fizz';     
    }
    if(i % 5 === 0) {
      out +='Buzz'; 
    } if(i % 3 !== 0 && i % 5 !== 0) {
      out += i; 
    }
    console.log(out);
  }    
}
