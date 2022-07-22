/* .js files add interaction to your website */
var factList = [
  "Economic factors play a role in the opportunity gap in Latino education, as 6.1 million Latino children were living in poverty in 2010. These students then attend impoverished and unequipped schools.",
  "Prejudice and discrimination against Hispanic/Latino students distracts them from their studies and hurts their wellbeing. This causes these students to be disconnected from their school environment.",
  "'For every 100 Latino ninth graders in Colorado, only 67 will graduate from high school, 28 will enroll in college and only 10 will graduate.' - Latino Leadership Institute",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count == 3){
    count = 0;
  }
}
// console.log(factList [1]); 

