function Details()
{
    let x=document.getElementById("text").value;
    let y=document.getElementById("text1").value;
    let z=document.getElementById("text2").value;
    let r=document.getElementById("text3").value;
    document.getElementById("demo").innerHTML="Name : "+x+"<br> Email : "+y+"<br> Phone No : "+z+"<br> Address : "+r;
}