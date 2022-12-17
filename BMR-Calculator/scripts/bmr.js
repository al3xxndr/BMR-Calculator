
function bmrfunction() {

    let genderinput = document.querySelector(".genderinfo").value;
    let ageinput = document.querySelector(".ageinfo").value;
    let heightinput = document.querySelector(".heightinfo").value;
    let weightinput = document.querySelector(".weightinfo").value;


    if (genderinput == "male") {
        //BMR equation: Mifflin St Jeor
        let bmr = (10 * weightinput) + (6.25 * heightinput) - (5 * ageinput) + 5;
        document.getElementById("bmrresult").innerHTML = 
        "This is your BMR: " + bmr + " calories per-day!";

    }
    else if (genderinput == "female") {
        //BMR equation: Mifflin St Jeor
        let bmr = (10 * weightinput) + (6.25 * heightinput) - (5 * ageinput) - 161;
        document.getElementById("bmrresult").innerHTML = 
        "This is your BMR: " + bmr + " calories per-day!";
            }

        else{
            document.getElementById("bmrresult").innerHTML = 
            "Sorry! Input is incorrect!"
        }
   

}
