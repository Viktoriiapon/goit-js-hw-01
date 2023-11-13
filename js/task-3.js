function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingTotal = parseFloat(padding);
  const borderTotal = parseFloat(border);
  const result = contentWidth + paddingTotal * 2 + borderTotal * 2;
  return result;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

  
/*function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  const result = password = correctPassword ? `Access granted` : `Access denied, wrong password!`;
   return result;
}

console.log(checkPassword("jqueryismyjao"));*/

const fruit = `nyt`;

switch (fruit) {
  case `apple`:
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}






