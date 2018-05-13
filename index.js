var katzDeli = [];
function takeANumber(katzDeliLine,customerName){

}
function nowServing(){

}

function currentLine(katzDeliLine){
  var currentLineResult = 'The line is currently '
  var lineResult=''
  var line= katzDeliLine.length
  var i=0
  if (line != 0) {
    while (i<line){
      lineResult= `${i+1}. ${katzDeliLine[i]}`
    }
  }
  else {
    lineResult='empty'
  }
  return currentLineResult + lineResult
}
