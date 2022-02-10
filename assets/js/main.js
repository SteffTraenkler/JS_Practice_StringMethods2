console.log('%cLev1_4', 'color: yellowgreen; font-weight:700; font-size16px');
console.log(" ");

const A = 'Susi is going to codingschool';

// console.log(A.indexOf("school"));

let slice1 = A.slice(0, 4);
console.log(slice1);
let slice2 = A.slice(5, 7);
console.log(slice2);
let slice3 = A.slice(5, 17) + A.slice(23, 29);
console.log(slice3);
let slice4 = A.slice(23, 29);
console.log(slice4);
let slice5 = A.slice(0, 8) + A.slice(23, 29);
console.log(slice5);

document.write(`<h3>Lev1_4</h3><br> ${slice1}<br> ${slice2}<br> ${slice3}<br> ${slice4}<br> ${slice5}<br>`);

console.log(" ");
console.log('%cLev1_5', 'color: yellowgreen; font-weight:700; font-size16px');
console.log(" ");

const text = 'Susi is back from codingschool';
console.log(text.indexOf("l"));

document.write(`<br><br><br><h3>Lev1_5</h3><br><br> ${text.substring(0, 4)}<br>${text.substring(5, 7)}<br>${text.substring(24, 30)}<br>${text.substring(0, 8)}${text.substring(24, 30)}`);

console.log(" ");
console.log('%cLev1_9', 'color: yellowgreen; font-weight:700; font-size16px');
console.log(" ");

const text1 = 'Sam is going to codingschool';
const text2 = 'Susi';
const text3 = 'programming bike';
const text4 = 'and';
console.log(text1.indexOf("l"));


const dude = text1.slice(0, 16) + text1.slice(22, 28); //Sam is going to school and to the movie theater
// console.log(dude + "test");
let schoolAndTheater = dude.concat(` ${text4} to the movie theater`);
console.log(schoolAndTheater);

let dude2 = text1.slice(0, 16); //Sam is going to movie theater
// console.log(dude2); //Sam is going to
let theater = dude2.concat(` movie theater`);
console.log(theater);

let dude3 = dude.replace("is", "are"); //Susi and Sam are going to school
let both = text2.concat(` ${text4} ${dude3}`);
console.log(both);

let gym = text2.concat(` ${text4} ${dude2.replace("is", "are")}gym ${text4} to the movie theater`); //Susi and Sam are going to gym and to the movie theater
console.log(gym);


// console.log(dude.indexOf("l"));
let dude4 = dude.slice(4, 22);
console.log(dude4); //is going to school

let suSi = text2.concat(` ${dude4} ${text4} to the movie theater`); //Susi is going to school and to the movie theater
console.log(suSi);

document.write(`<br><br><br><h3>Lev1_9</h3> ${schoolAndTheater}<br>${theater}<br>${both}<br>${gym}<br>${suSi}`)