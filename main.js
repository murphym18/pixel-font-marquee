var dictionary = {};
dictionary['A'] = ["011.png", "110.png", "011.png"];
dictionary['B'] = ["111.png", "011.png", "011.png"];
dictionary['C'] = ["111.png", "101.png", "101.png"];
dictionary['D'] = ["011.png", "011.png", "111.png"];
dictionary['E'] = ["111.png", "111.png", "101.png"];
dictionary['F'] = ["111.png", "110.png", "100.png"];
dictionary['G'] = ["111.png", "001.png", "011.png"];
dictionary['H'] = ["111.png", "010.png", "111.png"];
dictionary['I'] = ["101.png", "111.png", "101.png"];
dictionary['J'] = ["011.png", "001.png", "111.png"];
dictionary['K'] = ["111.png", "010.png", "101.png"];
dictionary['L'] = ["111.png", "001.png", "001.png"];
dictionary['M'] = ["111.png", "110.png", "111.png"];
dictionary['N'] = ["111.png", "100.png", "111.png"];
dictionary['O'] = ["111.png", "101.png", "111.png"];
dictionary['P'] = ["111.png", "110.png", "110.png"];
dictionary['Q'] = ["110.png", "110.png", "111.png"];
dictionary['R'] = ["111.png", "100.png", "100.png"];
dictionary['S'] = ["001.png", "111.png", "100.png"];
dictionary['T'] = ["100.png", "111.png", "100.png"];
dictionary['U'] = ["111.png", "001.png", "111.png"];
dictionary['V'] = ["110.png", "001.png", "110.png"];
dictionary['W'] = ["111.png", "011.png", "111.png"];
dictionary['X'] = ["101.png", "010.png", "101.png"];
dictionary['Y'] = ["100.png", "011.png", "100.png"];
dictionary['Z'] = ["100.png", "111.png", "001.png"];
dictionary[' '] = ["000.png", "000.png", "000.png"];
dictionary['.'] = ["000.png", "001.png", "000.png"];
dictionary['blank'] = ["000.png"];


function imgs(s) {
  let spaces = "     "
  s = spaces + s.toUpperCase() + spaces
  let result = []
  for (let i=0; i<s.length; ++i) {
    dictionary[s[i]].forEach(function(e){result.push(e)})
    result.push(dictionary['blank'][0])
  }
  return result;
}

let theImages = imgs("abcdefghijklmnopqrstuvwxyz");
function mkhtml(a) {
  return a.map(function(i){
    return `<img src="${i}" />`
  })
}

function m() {
  let last = theImages.shift()
  theImages.push(last)
  let h = mkhtml(theImages)
  setTimeout(m, 100);
  $("#marquee").html(h)
}
m()
console.log()
