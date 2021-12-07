const n = 5
let output = ""
let shift = false
for(let i = 0; i < n; i++) {
  for(let j = 0; j <= i; j++) {
    output += " "
  }

  for(let j = 1; j <= n-i; j++) {
    if(i % 2 !== 0) {
      output += " +"
    } else {
      if(shift) {
        output += (j % 2 === 0) ? " #" : " +"
      } else {
        output += (j % 2 === 0) ? " +" : " #"
      }
    }
  }
  if(i % 2 === 0) shift = !shift
  output += "\n"
}

console.log(output)