var dictionary = {};
dictionary['A'] = [/*"000111.png",*/ "011111.png", "101000.png",/*, "101000.png",*/ "011111.png"/*, "000111.png"*/];
dictionary['B'] = ["111111.png", "101001.png", "010110.png"]//, "000000.png", "000000.png", "000000.png"];
dictionary['C'] = ["011110.png", "100001.png", "010010.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['D'] = ["111111.png", "100001.png", "011110.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['E'] = ["111111.png", "101001.png", "101001.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['F'] = ["111111.png", "101000.png", "101000.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['G'] = ["011110.png", "100001.png", "100101.png", "010110.png"]//, "011111.png", "011111.png"];
dictionary['H'] = ["111111.png", "001000.png", "001000.png", "111111.png"]//, "011111.png", "011111.png"];
dictionary['I'] = ["100001.png", "111111.png", "100001.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['J'] = ["100010.png", "100001.png", "111111.png", "100000.png"]//, "011111.png", "011111.png"];
dictionary['K'] = ["111111.png", "001100.png", "010010.png", "100001.png"]//, "011111.png", "011111.png"];
dictionary['L'] = ["111111.png", "000001.png", "000001.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['M'] = ["111111.png", "010000.png", "001000.png", "010000.png", "111111.png"]//, "011111.png"];
dictionary['N'] = ["111111.png", "010000.png", "001100.png", "000010.png", "111111.png"]//, "011111.png"];
dictionary['O'] = ["001100.png", "010010.png", "100001.png", "010010.png", "001100.png"]//, "011111.png"];
dictionary['P'] = ["111111.png", "101000.png", "010000.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['Q'] = ["001100.png", "010010.png", "100001.png", "010010.png", "001110.png", "000001.png"];
dictionary['R'] = ["111111.png", "101000.png", "010111.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['S'] = ["010010.png", "101001.png", "100110.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['T'] = ["100000.png", "111111.png", "100000.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['U'] = ["111110.png", "000001.png", "000001.png", "111110.png"]//, "011111.png", "011111.png"];
dictionary['V'] = ["110000.png", "001100.png", "000011.png", "001100.png", "110000.png"]//, "011111.png"];
dictionary['W'] = ["110000.png", "001100.png", "000011.png", "001100.png", "000011.png", "001100.png", "110000.png"]//, "011111.png"];
dictionary['X'] = ["110011.png", "001100.png", "110011.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['Y'] = ["110000.png", "001111.png", "110000.png"]//, "011111.png", "011111.png", "011111.png"];
dictionary['Z'] = ["100001.png", "100011.png", "101101.png", "110001.png"]//, "011111.png", "011111.png"];
dictionary[' '] = ["000000.png", "000000.png", "000000.png", "000000.png", "000000.png"]//, "011111.png"];
dictionary['.'] = ["000011.png", "000011.png"]//, "011111.png", "011111.png", "011111.png", "011111.png"];
dictionary['blank'] = ["000000.png"];


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
  setTimeout(m, 1000);
  $("#marquee").html(h)
}
m()
console.log()
