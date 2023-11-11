function getElementWidth(content, padding, border){
   const contentWidth = parseFloat(content);
   const paddingTotal = parseFloat(padding);
   const borderTotal = parseFloat(border);
    const result = contentWidth + paddingTotal*2 + borderTotal*2
    return result;
    

}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 