

submitbtn.addEventListener("click", function(event) {
    //function to get day of the week user was born
    var x = Date.parse((document.getElementById("birthday").value)) ;
    var dateOfBirth = new Date (x);
    var dayOfWeek = dateOfBirth.getDay();
    var gender = document.getElementById("gender").value ;
   
    console.log(dayOfWeek);
    console.log(gender);

    // // function to get Akan Names by gender
     function byGender(gender) {
        if (gender === "Female") {
            console.log("Women Rock!");
        } else {
            console.log("Patriachy");
        }
    }
    
    byGender(gender) ;
}) ;


