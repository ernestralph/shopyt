export const shortenText = (text, len)=>{
 if (text.length > len){
  const shortenText = text.substring(0, len).concat("...");

  return shortenText;
 }
 return text;
}

// validate email
export const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};