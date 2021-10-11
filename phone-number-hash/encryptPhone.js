/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


module.exports = encryptPhoneNumber;


function encryptPhoneNumber() {
    let phoneNumInput = prompt("What is your phone number? Only 10-digit numbers please");

    
  let phoneNumString = phoneNumInput.toString();
  let phoneNumArray = [];
  let phoneNumDash = [];
  let phoneNumAsterisk = [];
  let param;
  

 
  for (let i = 0, sectionLength = phoneNumString.length; i < sectionLength - 4; i += 3) {
    phoneNumArray.push(phoneNumString.substring(i, i + 3));
  }
  for (let j = 6, sectionLength = phoneNumString.length; j < sectionLength; j += 4) {
   phoneNumArray.push(phoneNumString.substring(j, j + 4));
  }     
 
  for (let k = 0; k < phoneNumArray.length -1; k++) {
    phoneNumDash.push(phoneNumArray[k], '-');
  }
  
  for (let l = 2; l < phoneNumArray.length; l++) {
    phoneNumDash.push(phoneNumArray[l]);
  }
  
  param = phoneNumDash.join("");
  
  phoneNumAsterisk = phoneNumDash.slice();
  phoneNumAsterisk[0] = '***';
  phoneNumAsterisk[2] = '***';
  paramEncrypted = phoneNumAsterisk.join("");

  return paramEncrypted
  
}

console.log(encryptPhoneNumber());