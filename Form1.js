class Form
{
    constructor()
    {
        this.mobileNumber = createInput();
        this.enterOTP = createInput();
        this.itly = createElement('h3');
        this.x = null;
        this.v = null;
        this.i = 0;
    }

    display()
    {
        this.getInfo();
        this.getInfo1();

        this.mobileNumber.position(860, 170);
        this.mobileNumber.style('font-size : 20px');
        this.mobileNumber.style('font-family : Century Gothic');
        this.mobileNumber.style('width : 200px');
        this.mobileNumber.style('border-radius : 10px');
        this.mobileNumber.style('color : rgb(0, 58, 188)');
        //this.mobileNumber.style('background-color :  #D3D3D3');

        this.enterOTP.position(860, 380);
        this.enterOTP.style('font-size : 20px');
        this.enterOTP.style('font-family : Century Gothic');
        this.enterOTP.style('width : 200px');
        this.enterOTP.style('border-radius : 10px');
        this.enterOTP.style('color : rgb(0, 58, 188)');
        //this.enterOTP.style('background-color :  #D3D3D3');
        //this.enterOTP.hide();
        ///next1.visible = false;

        if(mousePressedOver(next1))
        {
            if(this.mobileNumber.value().length === 10)
            {
                if(this.enterOTP.value().length === 6)
                {
                
                this.update();

                //hide
                next1.x = 10000000;
                sendOTP.x = 10000000;
                this.mobileNumber.hide();
                this.enterOTP.hide();

                //next screen
                AddAddress.x = 200;
                SearchAddress.x = 200;

                EPNR.visible = false;
                EPN.visible = false;
                OTPN.visible = false;
                OTPNR.visible = false;

                this.i = 1;
                if(this.v !== null)
                   { 
                   setTimeout(function()
                   { 
                        AddAddress.addImage(ChangeAddress);
                  }, 10)  
   
                //   if(this.x !== null)
                //   {
                //       setTimeout(function()
                //       {
                //        it = createElement('h3', 'Your EZAddress Code is ' + this.x);
                //        it.position(770, 650);
                //       }, 1500)
                 //}
               }
                }
                else{
                    if(OTPN.visible === true)
                    {
                    alert("Please Enter 6 Digit OTP");
                    }
                    OTPNR.visible = true;
                    OTPN.visible = false;
                }
            }
            else{
                if(EPN.visible === true)
                {
                    alert("Please Enter Valid Phone Number");
                }
                EPNR.visible = true;
                EPN.visible = false;
            }
        }

        console.log(this.x);
        console.log(this.v);


    }
    
    update()
    {
     var mobileN = "login/" + this.mobileNumber.value();
     database.ref(mobileN).update(
         {
             phone : this.mobileNumber.value(),
             otp : this.enterOTP.value(),
         }

     )
    }

    getInfo1()
    {
     var pc = database.ref("users/" + this.x + "/Phone");
     pc.on("value", (data)=>{
         this.v = data.val();
     });
    // console.log(this.x);
    }

    getInfo()
    {
     var pc = database.ref("EZAddresses/" + this.mobileNumber.value() + "/EZAddress");
     pc.on("value", (data)=>{
         this.x = data.val();
     });
    // console.log(this.x);
    }
}