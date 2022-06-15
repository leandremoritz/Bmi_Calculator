function calculatebmi(height, weight, bmi) {
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    bmi = weight / height / height;
    t = Math.round(bmi);
    document.getElementById("bmi").innerHTML = "<br> BMI is: " + t;
    if (t < 18) {
      document.getElementById("result").innerHTML = "<p> You are underweight </p>";
    } else if (t > 18 && t < 25) {
      document.getElementById("result").innerHTML =
        "<p> You are healthy </p>";
    } else if (t > 25 && t < 30) {
      document.getElementById("result").innerHTML =
        "<p> You are overweight </p>";
    } else if (t > 30) {
      document.getElementById("result").innerHTML =
        "<p> You are obese </p>";
    };
  };
  
  function clearBox(bmi, result) {
    document.getElementById("bmi").innerHTML = "<br> BMI is:";
    document.getElementById("result").innerHTML = "";
  };

//   BMI CALCULATOR

function convert(degree)
{
if (degree=="C")
 {
 F=document.getElementById("c").value * 9 / 5 + 32;
 document.getElementById("f").value=Math.round(F);
 }
else	
 {
 C=(document.getElementById("f").value -32) * 5 / 9;
 document.getElementById("c").value=Math.round(C);
 }
}