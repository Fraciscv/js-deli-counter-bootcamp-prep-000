function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzCurrentLine) {
  if (katzCurrentLine.length === 0) {
    return 'The line is currently empty.';
  }
  var line = [];

  for (var i = 0; i < katzCurrentLine.length; i++){
    line.push(`${i+1}. ${katzDeliCurrentLine[i]}`);
}
    return `The line is currently: ${line.join(', ')}`;
}
