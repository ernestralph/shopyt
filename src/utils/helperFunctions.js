export const shortenText = (text, len)=>{
 if (text.length > len){
  const shortenText = text.substring(0, len).concat("...");

  return shortenText;
 }
 return text;
}