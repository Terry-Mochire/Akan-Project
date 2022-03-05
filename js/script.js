

submitbtn.addEventListener("click", function(event) {
    //function to get day of the week user was born
    var x = Date.parse((document.getElementById("birthday").value)) ;
    var dateOfBirth = new Date (x);
    var dayOfWeek = dateOfBirth.getDay();
    var gender = document.getElementById("gender").value ;
   
    console.log(dayOfWeek);
    console.log(gender);

    // function to get Akan Names by gender
     function byGender(gender) {
        if (gender === "Female") {
            console.log("Female User");

    // function to match day of the week born to female Akan names
        const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"] ;
            function getFemaleAkanName(dayOfWeek) {
                var herAkanName = femaleNames[dayOfWeek] ;
                console.log(herAkanName);
                document.getElementById("yourResult").innerHTML = "Your Akan Name is " + herAkanName + "!";
            }
            getFemaleAkanName(dayOfWeek) ;

        } else if (gender === "Male") {
            console.log("Male User");
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"] ;
            function getMaleAkanName(dayOfWeek) {
                var hisAkanName = maleNames[dayOfWeek] ;
                console.log(hisAkanName);
                document.getElementById("yourResult").innerHTML = "Your Akan Name is " + hisAkanName  + "!";
            }
            getMaleAkanName(dayOfWeek) ;
        }
    }
    byGender(gender) ;
    // function to validate the form
     function validateDate(x) {
         if ( isNaN(x) ){
            alert ("Year must be filled out") ;
         } else {
             byGender(gender) ;
         }
     }
    validateDate(x);
    function validateGender(gender)  {
        if (gender == "") {
            alert ("Please select your gender") ;
        } else {
            byGender(gender) ;
        }
    }
   validateGender(gender) ;
}) ;


