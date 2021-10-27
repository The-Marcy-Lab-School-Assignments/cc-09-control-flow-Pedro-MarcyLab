//1
function betweenFiveAndTen(int){
  if((int >= 5) && (int <= 10)) {
      return true
  }else{
      return false
  }
  console.log(betweenFiveAndTen())
}

//2
function betweenTenAndThirty(int){
  if((int >= 10) && (int <= 30)) {
      return true
  }else{
      return false
  }
  console.log(betweenTenAndThirty())
}

//3
function betweenThirtyAndFifty(int){
  if((int >= 30) && (int <= 50)) {
      return true
  }else{
      return false
  }
  console.log(betweenThirtyAndFifty())
}


//4
function betweenThirtyFiftySeventy(num){
  if(((num >= 0) && (num <= 30)) || ((num >= 50) && (num <= 70))){
      return true
  }else{
      return false
  }
  console.log(betweenThirtyFiftySeventy())
}

//5
function betweenTwentyFiftySixty(num){
  if(((num >= 0) && (num <= 20)) || ((num >=50) && (num <= 60))){
      return true
  }else{
      return false
  }
  console.log(betweenTwentyFiftySixty())
}

//6
function betweenTenTwentyThirty(num){
  if(((num >= 0) && (num <= 10)) || ((num >= 20) && (num <= 30))){
      return true
  }else{
      return false
  }
  console.log(betweenTenTwentyThirty())
}

console.log(betweenFiveAndTen(4))
console.log(betweenTenAndThirty(31))
console.log(betweenThirtyAndFifty(59))
console.log(betweenThirtyFiftySeventy(74))
console.log(betweenTwentyFiftySixty(53))
console.log(betweenTenTwentyThirty(32))