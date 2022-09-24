


    //  maximum Number Output
    let firstNumber, SecondNumber, maximumNumber,ThirdNumber,result;

    maximumNumber = document.querySelector('#maximumNumber');
 function FirstValue()
    {
   let vlu = document.querySelector('#first').value;
    firstNumber =  vlu * 1; 
    document.querySelector('#fst').innerHTML = firstNumber;
    }
 function SecondValue()
   { 
    let vluu = document.querySelector('#Second').value ;
   SecondNumber = vluu * 1 ;
   document.querySelector('#Scnd').innerHTML =SecondNumber ;
   }
 function ThirdValue()
  { 
    let vluuu = document.querySelector('#Third').value ; 
    ThirdNumber = vluuu * 1;
    document.querySelector('#trd').innerHTML = ThirdNumber;
  }
  //  function resultTT()
  let klk = document.querySelector("#klk");
     klk.addEventListener("click",(event)=>{
     event.preventDefault();
      firstNumber == SecondNumber && firstNumber  == ThirdNumber ? result= "   Numbers equal ":
      ( 
          (firstNumber < SecondNumber) && (SecondNumber > ThirdNumber) ? result = SecondNumber:
          ( (firstNumber < ThirdNumber) && (ThirdNumber > SecondNumber) ? result = ThirdNumber :
            ((ThirdNumber < firstNumber) && (firstNumber > SecondNumber) ? result = firstNumber: 
             result = "  please input number"
            ))
      ) 
     maximumNumber.innerHTML = result;
   });
 //=============================================

  function npnf(){
    let npo = document.querySelector("#npo").value;
    if(npo  < 0){
      document.querySelector("#npos").innerHTML = " this Number is Negative ";
    }
    if(npo  == 0){
      document.querySelector("#npos").innerHTML = " this Number is 0 (+/-) ";
    }
    if(npo  > 0){
      document.querySelector("#npos").innerHTML = " this Number is  Posetive ";
    }
   
  }
 
 //   maximum Number Output End
 //===========================================
 
 function divisibles(){
  let divisible = document.querySelector("#divisible").value;
  if(divisible % 10 == 0 ){
   document.querySelector('#divisibleid').innerHTML = " This " +  divisible + " %  10  = divisible" ;
  }else{
   document.querySelector('#divisibleid').innerHTML = " This " +  divisible + " %  10  = Not divisible"
  }
  
 }
 
 //========================================================
 function oddEvens(){
   let oddEven = document.querySelector("#oddEven").value
    if(oddEven % 2 == 0){
     document.querySelector('#oddEve').innerHTML = " This " +  oddEven + "  Number is  Even" ;
    }else{
     document.querySelector('#oddEve').innerHTML = " This " +  oddEven + "  Number is  Odd" ;
    }
 }
 //================================
 function alphabetceck(){
   let alphabetc = document.querySelector("#alphabetc").value
    let regEx = /^[A-Za-z]+$/;
   if(alphabetc.match(regEx)){
     document.querySelector('#alphabets').innerHTML = " This " +  alphabetc + "  letter is  alphabet" ;
   }else{
     document.querySelector('#alphabets').innerHTML = " This " +  alphabetc + "  letter is not a  alphabet" ;
   }
 
 }
 //========================================================
 function whetherf(){
    let whethertt = document.querySelector("#whether").value
    if(whethertt >=30){
        document.querySelector('#whethers').innerHTML = " This " +  whethertt + "  whether Value is  Hot !!!" ;
    }
    if(whethertt < 30 && whethertt > 25){
        document.querySelector('#whethers').innerHTML = " This " +  whethertt + "  whether Value is  Normal :D" ;
 
    }
    if( whethertt < 25){
        document.querySelector('#whethers').innerHTML = " This " +  whethertt + "  whether Value is  Cold :(" ;
 
    }
 }
 //===========================================================
let maths, enlish, Physics, submit;  



 function mathff(){
     maths = document.querySelector("#Matht").value;
 }
 function englishff(){
    enlish =   document.querySelector("#English").value;
 }
 function physicsff(){
    Physics = document.querySelector("#Physics").value;
 }
 submit = document.querySelector("#submit");
 
submit.addEventListener("click", (event)=>{
 event.preventDefault();
let rss = ((maths * 1) + (enlish * 1 )+ (Physics *1) ) / 3;
document.querySelector("#matsss").innerHTML =  rss;
   
 if((maths * 1) < 40 || (enlish * 1)< 40 || (Physics * 1) < 40){
     document.querySelector("#matsss").innerHTML = " Your Grad is ' F ': you are Fail !!!! " 
    }else  if(rss >= 90){
        document.querySelector("#matsss").innerHTML = " Your Grad is ' A ': you are Pass  !!!!"
      }else 
      if(rss >= 80){
        document.querySelector("#matsss").innerHTML = " Your Grad is ' B ': you are Pass  !!!!"
      }else
      if(rss >= 70){
        document.querySelector("#matsss").innerHTML = " Your Grad is ' C ': you are Pass  !!!!"
      }else
      if(rss >= 60){
        document.querySelector("#matsss").innerHTML = " Your Grad is ' D ': you are Pass  !!!!"
      }else
      if(rss >= 40){
        document.querySelector("#matsss").innerHTML = " Your Grad is ' E ': you are Pass  !!!!"
    }
      
});

//========================================================================
function rndm(){
  document.querySelector("#rnd"). innerHTML =Math.round( (Math.random() * 10)+1);
}
let BangladeshCricketTeam = ["Tamim", "Mushfik","Riyad"," Mussaddek","mustafij"];
let bangladeshWomanFootballTeam = ["Ritu porna", " Sorkar ", " sanjida", "rita ", "maria "];
let zilla = ["sylhet","dhaka","Rongpur","Borishal","Nuakhali"];

let dulalAj = {
  name:" Dulal Ahmed Jalal",
  age: 30,
  hight:"5.3 inc",
  weight: "67 kg",
  occupation:"Teacher",
  active: true
};
let laptop = {
  name: "Dell inspire",
  brand: "DELL",
  Ram_GB: 6,
  Hdd_GB: 500,
  Processor: "Core i 3 5GU",
  active: true
};

let School = {
  name: "Mohidpur GPS",
  post: 6,
  teacher:4,
  PostNull:2,
  Sutdent:188,
  No:116,
  govt: true
  
}
