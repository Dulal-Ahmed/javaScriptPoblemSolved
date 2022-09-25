


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
// ============
let x =10;
while(x <= 50){
  document.querySelector("#wh").innerHTML += " , " + x;
  x++;
}
//================
for(i=20; i<=60; i++){
 document.querySelector("#fr").innerHTML += " ," + i;
}
//==========
function addddddd(){
let fstttt = document.querySelector("#fstttt").value;
let  scndtttt = document.querySelector("#scndtttt").value;
 document.querySelector("#ad23d").innerHTML ="Result :  " +( (fstttt *1) + (scndtttt *1));
}
//=======================================

function twReturn(a){

  document.querySelector("#twp").innerHTML = a ;
  document.querySelector("#cntsss").innerHTML = 500 - a;
  let y = a;
  for(y; y <=500; y++){
    document.querySelector("#twpss3s").innerHTML +=" ," + y ;
  }
}
 //===================================
 function lpyr(k){
  if(((k % 4 == 0)  && ( k % 100 != 0) || k % 400 == 0) ){
  document.querySelector("#yrrslt").innerHTML = " This " + k + " is Leap Year !!";
  }else{
    document.querySelector("#yrrslt").innerHTML = " This " + k + " is Not Leap Year !!";
  }
 }

let Soumya, nmbr2s; 
 function smya(m){
    Soumya = m;
 }
 function rabbi(n){
  nmbr2s = n;
 }
 function bTeam(){
  const Bangladesh_T20_Team = ["Sabbir" , "Litton" , "Nurul" ," mehedi" , "Riad" , "mushfiq"];
  Bangladesh_T20_Team[4] = Soumya;
  Bangladesh_T20_Team[5] = nmbr2s;
  document.querySelector("#nteam"). innerHTML = Bangladesh_T20_Team;

 }
//==================================
function rarra(){
  let arr = [2,45,4,55,12,42,34,78];

  document.querySelector("#srtarr").innerHTML = arr.sort(function(a, b){return a - b});
  document.querySelector("#arrr").innerHTML = arr.reverse();
}
//=================================
const Adress = {     
     Vill: "  Ojanapur",
     PostCode: 3100,
     upozilla: "sodor",
     fullAdress: ()=>{
      return this.Vill + " " + this.PostCode + " " + this.upozilla; 
    },
     villandPost: ()=>{
      return this.vill + "  " + this.PostCode;
     }
     };

//==========================================
let text = "I love coding";
function rvrsstr(str){
  let newStr = "";
  for(let i = str.length -1; i >=0; i--){
    newStr += str[i];
     
  }
  return newStr;
}
document.querySelector("#rbsrr").innerHTML = rvrsstr(text);
//===============================================================
let arrlist = [" bangladesh", " nepal", "vutan", " america", " srilanka", " itali"];
for(let ii=0; ii <= arrlist.length; ii++){
  document.querySelector("#sdsdsd").innerHTML += "<li>" + arrlist[ii] + "</li>";
}

