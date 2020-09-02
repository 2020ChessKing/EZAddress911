class searchForm
{
    constructor()
    {
     this.searchInput = createInput("Search Here");
     this.mobile = 0;

     this.phone = createElement('h3');
     this.name = createElement('h3');
     this.email = createElement('h3');
     this.address = createElement('h3');
     this.address2 = createElement('h3');
     this.city = createElement('h3');
     this.state = createElement('h3');
     this.country = createElement('h3');
     this.zipcode = createElement('h3');
     this.landmark = createElement('h3');
     this.ezaddress = createElement('h3');

     this.phoneI = 'Not Found';
     this.nameI = 'Not Found';
     this.emailI = 'Not Found';
     this.addressI = 'Not Found';
     this.addressII = 'Not Found';
     this.cityI = 'Not Found';
     this.stateI = 'Not Found';
     this.countryI = 'Not Found';
     this.zipcodeI = 'Not Found';
     this.landmarkI = 'Not Found';
     this.EZAddressI = 'Not Found';

     this.x = 1;
    }

    display()
    {
     this.searchInput.position(720, 180);
     this.searchInput.style('font-size : 20px');
     this.searchInput.style('font-family : Century Gothic');
     this.searchInput.style('width : 350px');
     this.searchInput.style('border-radius : 10px');
     this.searchInput.style('color : rgb(0, 58, 188)');
     //this.searchInput.style('background-color :  #D3D3D3');



    //  SearchAddress.x =100000;
    //  AddAddress.x = 1000000;
    //  if(this.x === 1)
    //  {
    //  next2.x = 200;
    //  }
    this.getInfo();
    this.getInfo2();
    this.getInfo3();
    this.getInfo4();
    this.getInfo5();
    this.getInfo6();
    this.getInfo7();
    this.getInfo8(); 
    this.getInfo9();
    this.getInfo10();
    this.getInfo11();

   
     }

    step2()
    {
        this.searchInput.hide();
       
            if(this.phoneI === null)
            {
                this.phoneI = 'Not Found';
            }

            if(this.nameI === null)
            {
                this.nameI = 'Not Found';
            }

            if(this.emailI === null)
            {
                this.emailI = 'Not Found';
            }

            if(this.emailI === '')
            {
                this.emailI = 'Not Found';
            }

            if(this.addressI === null)
            {
                this.addressI = 'Not Found';
            }

            if(this.EZAddressI === null)
            {
                this.EZAddressI = 'Not Found';
            }

            if(this.addressII === null)
            {
                this.addressII = 'Not Found';
            }

            if(this.addressII === '')
            {
                this.addressII = 'Not Found';
            }


            if(this.cityI === null)
            {
                this.cityI = 'Not Found';
            }

            if(this.stateI === null)
            {
                this.stateI = 'Not Found';
            }

            if(this.countryI === null)
            {
                this.countryI = 'Not Found';
            }

            if(this.zipcodeI === null)
            {
                this.zipcodeI = 'Not Found';
            }

            if(this.landmarkI === null)
            {
                this.landmarkI = 'Not Found';
            }

            if(this.landmarkI === '')
            {
                this.landmarkI = 'Not Found';
            }

            this.phone.html("Phone : " + this.phoneI);
            this.ezaddress.html("EZAddress Code : " + this.EZAddressI);
            this.name.html("Name : " + this.nameI);
            this.email.html("Email : " + this.emailI);
            this.address.html("Add. Line 1 : " + this.addressI);
            this.address2.html("Add. Line 2 : " + this.addressII);
            this.city.html("City : " + this.cityI);
            this.state.html("State : " + this.stateI);
            this.country.html("Country : "+ this.countryI);
            this.zipcode.html("Zipcode : " + this.zipcodeI);
            this.landmark.html("Landmark : " + this.landmarkI)
            //this.address3.html(" " + this.addressII)
    
            this.name.position(710, 160);
            this.ezaddress.position(710, 125);
            this.phone.position(710, 200);
            this.email.position(710, 240);
            this.address.position(710, 280);      
            this.address2.position(710, 320);
            this.city.position(710, 360);
            this.state.position(710, 400);
            this.country.position(710, 440);
            this.zipcode.position(710, 480);
            this.landmark.position(710, 520);
            //this.address3.position(0, 400);
        // }, 100);
        // }, 1000);
       
    }

    
    getInfo()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Phone");
     pc.on("value", (data)=>{
         this.phoneI = data.val();
     });
    // console.log(this.phoneI);
    }

    getInfo2()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Name");
     pc.on("value", (data)=>{
         this.nameI = data.val();
     });
    // console.log(this.phoneI);
    }

    getInfo3()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Email");
     pc.on("value", (data)=>{
         this.emailI = data.val();
     });
     //console.log(this.phoneI);
    }

    getInfo4()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/AddressPT1");
     pc.on("value", (data)=>{
         this.addressI = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo5()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/AddressPT2");
     pc.on("value", (data)=>{
         this.addressII = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo6()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/City");
     pc.on("value", (data)=>{
         this.cityI = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo7()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/State");
     pc.on("value", (data)=>{
         this.stateI = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo8()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Country");
     pc.on("value", (data)=>{
         this.countryI = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo9()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Zipcode");
     pc.on("value", (data)=>{
         this.zipcodeI = data.val();
     });
     //console.log(this.addressI);
    }

    
    getInfo10()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Landmark");
     pc.on("value", (data)=>{
         this.landmarkI = data.val();
     });
     //console.log(this.addressI);
    }

    getInfo11()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/EZAddress");
     pc.on("value", (data)=>{
         this.EZAddressI = data.val();
     });
     //console.log(this.addressI);
    }


    hide()
    {
        this.phone.hide();
        this.name.hide();
        this.email.hide();
        this.address.hide();
        this.city.hide();
        this.state.hide();
        this.country.hide();
        this.zipcode.hide();
        this.landmark.hide();
        this.address2.hide();
        this.searchInput.hide();
        this.ezaddress.hide();
        //AddAddress.x = 200;
    }
}