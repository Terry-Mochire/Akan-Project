

submitbtn.addEventListener("click", function(event) {
    //function to get day of the week user was born
    var x = Date.parse((document.getElementById("birthday").value)) ;
    var dateOfBirth = new Date (x);
    var dayNumber = dateOfBirth.getDay();
    var gender = document.getElementById("gender").value ;
   
    console.log(dayNumber);
    console.log(gender);


     function byGender(gender) {
    // function to get day of the week user was born     
        const daysOfTheWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] ;
        var exactDay = daysOfTheWeek[dayNumber];
        if (gender === "Female") {
            console.log("Female User");
    
     // function to match day of the week born to female Akan names
        const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"] ;
            function getFemaleAkanName(dayNumber) {
                var herAkanName = femaleNames[dayNumber] ;
                console.log(herAkanName);
                document.getElementById("yourResult").innerHTML = "You were born on  " + exactDay + ", so your Akan Name is " + herAkanName + "!";
            }
            getFemaleAkanName(dayNumber) ;

    // function to match day of the week born to male Akan names        
        } else if (gender === "Male") {
            console.log("Male User");
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"] ;
            function getMaleAkanName(dayNumber) {
                var hisAkanName = maleNames[dayNumber] ;
                console.log(hisAkanName);
                document.getElementById("yourResult").innerHTML = "You were born on  " + exactDay + ", so your Akan Name is " + hisAkanName + "!";
            }
            console.log(exactDay);
            getMaleAkanName(dayNumber) ;

        } ;
    } 
    byGender(gender) ;


    // function to validate the form
     function validateDate(x) {
         if ( isNaN(x) ){
            alert ("Year must be filled out in the format dd/mm/yyyy") ;
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



    // Function to refresh the page
refreshbtn.addEventListener("click", function(event) {
    function refresh() {
        document.getElementById("yourResult").innerHTML = "Your Akan name is: ";
    };
    refresh()
})