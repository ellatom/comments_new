const validateData =(email, message)=> {
    console.log("at start",message)

    const errors = [];

    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
  
    if (message.length < 1) {
      errors.push("Message should be at least 1 characters long");
    }
  
    return errors;
  }

  export default validateData;