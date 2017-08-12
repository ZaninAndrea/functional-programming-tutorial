// standard way
function add(x,y,z){
  return x + y + z;
}
console.log("standard: ", add(1,2,3));

// curried style
const add2 = x =>             // if you have only one argument in the lambda function you can omit the parenthesis
              y =>
                z =>
                  x + y + z;
                  
console.log("curried: ", add2(1)(2)(3) );
