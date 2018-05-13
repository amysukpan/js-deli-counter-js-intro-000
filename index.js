var katzDeli = [];

function takeANumber(katzDeliLine,customerName){

  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
  
}

function nowServing(){

//"There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var currentLineResult = 'The line is currently'
  var lineResult=''
  var line= katzDeliLine.length
  var i=0
  if (line != 0) {
    if (i==0){
      lineResult +=`: ${i+1}. ${katzDeliLine[i++]}`
    }
    while (i<line){
      lineResult += `, ${i+1}. ${katzDeliLine[i++]}`
    }
  }
  else {
    lineResult=' empty.'
  }
  return currentLineResult + lineResult
}
