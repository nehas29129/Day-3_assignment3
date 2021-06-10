console.log("Data is loading....");


function customerdata()
{
   const userName=document.getElementById("userName").value;
   const email=document.getElementById("email").value;
   const dob=document.getElementById("dob").value;
   const psw=document.getElementById("psw").value;
   const pswrepeat=document.getElementById("pswrepeat").value;
   const customer=new Customer(userName,email,dob,psw,pswrepeat);
   if(typeof(Storage)!=="undefined"){
        
    sessionStorage.setItem(customer.email,customer.toString());
    alert("user data saved successfully!")
}else{
    alert("Storage not supported ! ");
}
console.log("userName "+userName);
console.log("email "+email);
console.log("dob "+dob);
console.log("Password "+psw);
console.log("Repeat Password "+pswrepeat)
}
function Customer(userName,email,dob,psw,pswrepeat){
    this.userName=userName;
    this.email=email;
    this.dob=dob;
    this.psw=psw;
    this.pswrepeat=pswrepeat;
    this.toString=function (){
        return userName+" "+email+" "+dob+" "+psw+" "+pswrepeat;
    }
    function Validate() {
        var password = document.getElementById("psw").value;
        var confirmPassword = document.getElementById("pswrepeat").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
   
    }
    