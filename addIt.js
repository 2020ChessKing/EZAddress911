class addIt
{
    constructor()
    {


    }

    display()
    {
     
    }

    addEZAddress()
    {
      // var name = this.finale;
      // console.log(name);
      var emptyString = '';
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var numbers = "0123456789"

      while(emptyString.length < 3) 
      { 
        emptyString += alphabet[Math.floor(Math.random() * alphabet.length)]; 
      }
      if(emptyString.length === 3)
      {
       while(emptyString.length < 6) 
       { 
         emptyString += numbers[Math.floor(Math.random() * numbers.length)]; 
       }
      }

      console.log(emptyString);
    database.ref("EZAddresses/" + form.mobileNumber.value()).update
    ({
      EZAddress : emptyString,
    })
    }
}