class AddForm
{
    constructor()
    {
        this.name = createInput("");
        this.addressline1 = createInput("");
        this.addressline2 = createInput("");
        this.city = createInput("");
        this.state = createInput("");
        this.zipcode = createInput("");
        this.country = createInput("");
        this.landmark = createInput("");
        this.email = createInput("");
        this.mobile = createInput("");

        this.EZAddress = " ";

        this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();

        this.x = null;
        this.xi = null;
        this.xii = null;
        this.v = null;

       this.star1 = null;
       this.star2 = null;
       this.star3 = null;
       this.star4 = null;
       this.star5 = null;
       this.star6 = null;
       this.star7 = null;

          this.y = 2;
       
    }

    display()
    {

        this.getInfo();
        //this.xii = Math.round(this.x);
        this.xi = this.x;

        this.name.position(820, 170);
        this.name.style('font-size : 20px');
        this.name.style('font-family : Century Gothic');
        this.name.style('width : 170px');
        this.name.style('border-radius : 10px');
        this.name.style('color : rgb(0, 58, 188)');
        //this.name.style('background-color :  #D3D3D3');

        this.addressline1.position(820, 210);
        this.addressline1.style('font-size : 20px');
        this.addressline1.style('font-family : Century Gothic');
        this.addressline1.style('width : 170px');
        this.addressline1.style('border-radius : 10px');
        this.addressline1.style('color : rgb(0, 58, 188)');
        //this.addressline1.style('background-color :  #D3D3D3');

        this.addressline2.position(820, 250);
        this.addressline2.style('font-size : 20px');
        this.addressline2.style('font-family : Century Gothic');
        this.addressline2.style('width : 170px');
        this.addressline2.style('border-radius : 10px');
        this.addressline2.style('color : rgb(0, 58, 188)');
        //this.addressline2.style('background-color :  #D3D3D3');

        this.city.position(820, 290);
        this.city.style('font-size : 20px');
        this.city.style('font-family : Century Gothic');
        this.city.style('width : 170px');
        this.city.style('border-radius : 10px');
        this.city.style('color : rgb(0, 58, 188)');
        //this.city.style('background-color :  #D3D3D3');

        this.state.position(820, 330);
        this.state.style('font-size : 20px');
        this.state.style('font-family : Century Gothic');
        this.state.style('width : 170px');
        this.state.style('border-radius : 10px');
        this.state.style('color : rgb(0, 58, 188)');
        //this.state.style('background-color :  #D3D3D3');

        this.zipcode.position(820, 370);
        this.zipcode.style('font-size : 20px');
        this.zipcode.style('font-family : Century Gothic');
        this.zipcode.style('width : 170px');
        this.zipcode.style('border-radius : 10px');
        this.zipcode.style('color : rgb(0, 58, 188)');
        //this.zipcode.style('background-color :  #D3D3D3');

        this.country.position(820, 410);
        this.country.style('font-size : 20px');
        this.country.style('font-family : Century Gothic');
        this.country.style('width : 170px');
        this.country.style('border-radius : 10px');
        this.country.style('color : rgb(0, 58, 188)');
        //this.country.style('background-color :  #D3D3D3');

        this.landmark.position(820, 450);
        this.landmark.style('font-size : 20px');
        this.landmark.style('font-family : Century Gothic');
        this.landmark.style('width : 170px');
        this.landmark.style('border-radius : 10px');
        this.landmark.style('color : rgb(0, 58, 188)');
        //this.landmark.style('background-color :  #D3D3D3');

        this.email.position(820, 490);
        this.email.style('font-size : 20px');
        this.email.style('font-family : Century Gothic');
        this.email.style('width : 170px');
        this.email.style('border-radius : 10px');
        this.email.style('color : rgb(0, 58, 188)');
        //this.email.style('background-color :  #D3D3D3');

        this.mobile.position(820, 530);
        this.mobile.style('font-size : 20px');
        this.mobile.style('font-family : Century Gothic');
        this.mobile.style('width : 170px');
        this.mobile.style('border-radius : 10px');
        this.mobile.style('color : rgb(0, 58, 188)');
        //this.mobile.style('background-color :  #D3D3D3');

        // stroke(0, 58, 188);
        // strokeWeight(2);
        ///line(120, 170, 120, 550);


        if(this.y === 2)
        {
        this.star1 = image(AsteriskText, 300, 175, 10, 10);
        this.star2 = image(AsteriskText, 300, 215, 10, 10);
        //image(AsteriskText, 300, 255, 10, 10);
        this.star3 = image(AsteriskText, 300, 295, 10, 10);
        this.star4 = image(AsteriskText, 300, 335, 10, 10);
        this.star5 = image(AsteriskText, 300, 375, 10, 10);
        //image(AsteriskText, 300, 320, 10, 10);
        this.star6 = image(AsteriskText, 300, 415, 10, 10);
         this.star7 = image(AsteriskText, 300, 535, 10, 10);
        }
        else{
          
            this.star1 = null;
            this.star2 = null;
            this.star3 = null;
            this.star4 = null;
            this.star5 = null;
            this.star6 = null;
            this.star7 = null;
        }
  

       // next3.x = 200;

        // if(mousePressedOver(next3))
        // {
        //     this.update();
        // }
        

    }

    update()
    {
     //this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();
     var EZAddressOfficialCode = "users/" + this.xi;
     database.ref(EZAddressOfficialCode).update(
         {
            Name : this.name.value(),
            Email : this.email.value(),
            Phone : this.mobile.value(),
            AddressPT1 : this.addressline1.value(),
            AddressPT2 : this.addressline2.value(),
            City : this.city.value(),
            State : this.state.value(),
            Country : this.country.value(),
            Zipcode : this.zipcode.value(),
            Landmark : this.landmark.value(),
            EZAddress : this.xi,
         }

     )
    }

    hide()
    {
            this.name.hide();
            this.addressline1.hide();
            this.addressline2.hide();
            this.city.hide();
            this.state.hide();
            this.zipcode.hide();
            this.country.hide();
            this.landmark.hide();
            this.email.hide();
            this.mobile.hide();

        
            NameT.visible = false;
            AddressLine1T.visible = false;
            AddressLine2T.visible = false;
            CityT.visible = false;
            StateT.visible = false;
            CountryT.visible = false;
            EmailT.visible = false;
            ZipcodeT.visible = false;
            LandmarkT.visible = false;
            PhoneT.visible = false;

            // this.star1.position(1000000, 175);
            // this.star2.position(1000000, 175);
            // this.star4.position(1000000, 175);
            // this.star5.position(1000000, 175);
            // this.star6.position(1000000, 175);
            // this.star7.position(1000000, 175);
            // this.star8.position(1000000, 175);
    
            // this.star1.x = 10000;
            // console.log(this.star1.x);

            this.y = 1;
    }

    getInfo()
    {
     var pc = database.ref("EZAddresses/" + form.mobileNumber.value() + "/EZAddress");
     pc.on("value", (data)=>{
         this.x = data.val();
     });
    // console.log(this.x);
    }
}