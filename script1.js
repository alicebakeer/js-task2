function show()
{
      let inp=document.getElementById("inp").value;
      if (inp>=90 && inp<=100)
      {
document.getElementById("result").innerHTML="Excellent ";
document.getElementById("result").style.backgroundColor="orange";
      }
       else  if (inp<=89 &&inp>=75)
      {
document.getElementById("result").innerHTML="very good ";
document.getElementById("result").style.backgroundColor="yellow";
      }  
      else if (inp<75 &&inp>=60)
      {
document.getElementById("result").innerHTML="Good ";
document.getElementById("result").style.backgroundColor="pink";
      }  
      else if (inp<60 && inp>=50)
      {
document.getElementById("result").innerHTML="pass ";
document.getElementById("result").style.backgroundColor="green";
      }
        else if (inp<50 && inp>=0)
      {
document.getElementById("result").innerHTML="fail ";
document.getElementById("result").style.backgroundColor="red";
      }
       else 
      {
document.getElementById("result").innerHTML="invalid grade ";
document.getElementById("result").style.backgroundColor="black";
document.getElementById("result").style.color="red";

      }

}

document.getElementById("submit").addEventListener("click", function(){

      let inp=document.getElementById("inp").value;
      if (inp>=90 && inp<=100)
      {
document.getElementById("result").innerHTML="Excellent ";
document.getElementById("result").style.backgroundColor="orange";
      }
       else  if (inp<90 &&inp>=75)
      {
document.getElementById("result").innerHTML="very good ";
document.getElementById("result").style.backgroundColor="yellow";
      }  
      else if (inp<75 &&inp>=60)
      {
document.getElementById("result").innerHTML="Good ";
document.getElementById("result").style.backgroundColor="pink";
      }  
      else if (inp<60 && inp>=50)
      {
document.getElementById("result").innerHTML="pass ";
document.getElementById("result").style.backgroundColor="green";
      }
        else if (inp<50 && inp>=0)
      {
document.getElementById("result").innerHTML="fail ";
document.getElementById("result").style.backgroundColor="red";
      }
       else 
      {
document.getElementById("result").innerHTML="invalid grade ";
document.getElementById("result").style.backgroundColor="black";
document.getElementById("result").style.color="red";

      
}
})