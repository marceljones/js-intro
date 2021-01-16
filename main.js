// // console.log("CONNECTED")

// function thisIsTrue(arg1, arg2) {
//   if (arg1 === 'nice' && arg2 === 'Nice') {
//     console.log(`You are ${arg1}`);
//   } else {
//     console.log("false")
//   }
// }

// thisIsTrue('nice', 'Nice', 'not nice');//third argument being called doesn't affect the function, it does not look past the two arguments being called.

const canDrive = (age) => {
  if (age >= 15) {
    return true;
  }
  return false
}

console.log(canDrive(13)) //need to console.log the value of canDrive in order to see the value
