<style>
@media print {
    .printArea {
        background-color: white;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 15px;
        font-size: 14px;
        line-height: 18px;
        
    }
}

img {
  max-width: 100%;
  height: auto;
}

.field1 {
   float:left;
}







</style>








<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></script>


<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
   
<script>




$(function(){
    $("#btnClick").click(function(){

        
        
        var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('EmployeeCommencementForm')/items";  //Within the 'Employees' part, you put in the list URL
           $.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: onSuccess,
              error: onError
});




  function onSuccess(data) {
     var objItems = data.d.results;
     console.log(objItems);
     
     var testOne = objItems[0].Title;
     var testTwo = objItems[0].Surname;

     var testThree = objItems[0].DateofBirth;
     var testFour = objItems[0].Gender; //Choice
     var testFive = objItems[0].LegalWorkRights; //Choice
     var testSix = objItems[0].HomeAddress;
     var testSeven = objItems[0].MailingAddress;

     var testEight = objItems[0].MobileNumber;
     var testNine = objItems[0].HomePhone;
     var testTen = objItems[0].EmailAddress;
     var testEleven = objItems[0].EmergencyName;
     var testTwelve = objItems[0].EmergencyRelationship;

     var testThirteen = objItems[0].EmergencyHomeWorkPhone;
     var testFourteen = objItems[0].EmergencyMobile;
     var testFifteen = objItems[0].EmergencyAddress;
     var testAboriginal = objItems[0].AnAboriginalorTorresStrait; //Choice
     var testSixteen = objItems[0].CountryofBirth;

     var testfirstLanguage = objItems[0].EnglishFirstLanguage; //Choice
     var testparentsLanguage = objItems[0].ifYeswasEnglishBothParents; //Choice
     var testSeventeen = objItems[0].MainLanguageSpokenHome;
     var testDisability = objItems[0].HaveDisability; //Choice
     var testdisabilityType = objItems[0].ifYesDisabilityWhatType; //Choice


     //Note - Below holds the columns that are at the end of SharepointList
     var testEighteen = objItems[0].SuperMemberNumber;
     var testNineteen = objItems[0].SuperFundABN;
     var testTwenty = objItems[0].SuperFundName;
     var testTwentyone = objItems[0].UniqueSuperIdentifier;
     //Note - Above holds the columns that are at the end of SharepointList

     var testTwentytwo = objItems[0].SuperBankName;
     var testTwentythree = objItems[0].SuperBankBranch;
     var testTwentyfour = objItems[0].SuperBSBNumber;

     var testTwentyfive = objItems[0].SuperAccountNumber;
     var testTwentysix = objItems[0].SuperAccountName;
     var testTwentyseven = objItems[0].SuperAccountType;

     var testTwentyeight = objItems[0].WageBankName;
     var testTwentynine = objItems[0].WageBranch;
     var testThirty = objItems[0].WageBSBNumber;


     var testThirtyone = objItems[0].WageAccountNumber;
     var testThirtytwo = objItems[0].WageAccountName;
     var testThirtythree = objItems[0].WageAccountType;


     
     console.log(testfirstLanguage); 
    if(!testfirstLanguage)
    {
      testfirstLanguage = "no";

    }
    if(!testDisability)
    {
      testDisability = "no";

    }

    console.log(testfirstLanguage); 
     





     $(function(){
      $('input[name=gender][value=' + testFour + ']').prop('checked',true)
      $('input[name=legalworkrights][value=' + testFive + ']').prop('checked',true)

      $('input[name=aboriginal][value=' + testAboriginal + ']').prop('checked',true)
      $('input[name=firstlanguage][value=' + testfirstLanguage + ']').prop('checked',true)

      $('input[name=parentslanguage][value=' + testparentsLanguage + ']').prop('checked',true)
      $('input[name=disability][value=' + testDisability + ']').prop('checked',true)

      $('input[name=disabilitytype][value=' + testdisabilityType + ']').prop('checked',true)


    });

    









     








     console.log(testOne);
     console.log(testTwo);

     document.getElementById("firstname").value = testOne;
     document.getElementById("lastname").value = testTwo;
     document.getElementById('dateofbirth').value = testThree; 
     //document.getElementsByName('gender').value = testFour;     //choice
     //document.getElementById("legalworkingrights").value = testFive; //choice
    
     document.getElementById('homeaddress').value = testSix;   
     document.getElementById('mailingaddress').value = testSeven;
     document.getElementById('mobile').value = testEight;
     document.getElementById('homephone').value = testNine;
     document.getElementById('emailaddress').value = testTen;
     
     document.getElementById('emergencyname').value = testEleven;
     document.getElementById('emergencyrelationship').value = testTwelve;
     document.getElementById('emergencyhome').value = testThirteen;
     document.getElementById('emergencymobile').value = testFourteen;
     document.getElementById('emergencyaddress').value = testFifteen;

    // document.getElementById('aboriginal').value = testAboriginal; //Choice
     
     document.getElementById('countryofbirth').value = testSixteen;

    // document.getElementById('firstlanguage').value = testfirstLanguage; //choice
    // document.getElementById('parentslanguage').value = testparentsLanguage; //choice

     document.getElementById('englishother').value = testSeventeen;

    // document.getElementById('disability').value = testDisability; //choice
    // document.getElementById('disabilitytype').value = testdisabilityType; //choice


     document.getElementById('supermembernumber').value = testEighteen;
     document.getElementById('superfundabn').value = testNineteen;
     document.getElementById('superfundname').value = testTwenty;
     document.getElementById('superusi').value = testTwentyone;

     document.getElementById('superbuildname').value = testTwentytwo;
     document.getElementById('superbuildbranch').value = testTwentythree;
     document.getElementById('superbankbsbnumber').value = testTwentyfour;
     document.getElementById('superbankaccountnumber').value = testTwentyfive;
     
     document.getElementById('superbankaccountname').value = testTwentysix;  
     document.getElementById('superbankaccounttype').value = testTwentyseven;

     document.getElementById('wagename').value = testTwentyeight;
     document.getElementById('wagebranch').value = testTwentynine;  
     document.getElementById('wagebsbnumber').value = testThirty;
     
     document.getElementById('wageaccountnumber').value = testThirtyone;     
     document.getElementById('wageaccountname').value = testThirtytwo;  
     document.getElementById('wageaccounttype').value = testThirtythree;





     $("#Resubmit").click(function()
    {
      createListItem();
        
        function createListItem() 
        {
            //date of birth will return date object, turn it into value

            //Gender is set as a choice value, see if it's an object.console

            //var genderTest = document.getElementsByName("gender").value;
            //console.log(genderTest);

            //This checks for checked mark and returns checked value
            var choices = [];
            var gend = document.getElementsByName('gender');
            var rights = document.getElementsByName('legalworkrights');
            var aboriginalTorres = document.getElementsByName('aboriginal');
            var firstLanguage = document.getElementsByName('firstlanguage');
            
            var parentsLanguage = document.getElementsByName('parentslanguage');
            var disabilityChoice = document.getElementsByName('disability');
            var disabilityType = document.getElementsByName('disabilitytype');

            var testNum = 0;

            


            
            for (var i=0;i<gend.length;i++)
            {
                if ( gend[i].checked ) 
                {
                    if(gend[i] === "undefined")
                    {
                        choices[0] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[0] = gend[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        
        
        


        
            for (var i=0;i<rights.length;i++)
            {
                if ( rights[i].checked ) 
                {
                    if(rights[i] === "undefined")
                    {
                        choices[1] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[1] = rights[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        



        
            for (var i=0;i<aboriginalTorres.length;i++)
            {
                if ( aboriginalTorres[i].checked ) 
                {
                    if(aboriginalTorres[i] === "undefined")
                    {
                        choices[2] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[2] = aboriginalTorres[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<firstLanguage.length;i++)
            {
                if ( firstLanguage[i].checked ) 
                {
                    if(firstLanguage[i] === "undefined")
                    {
                        choices[3] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[3] = firstLanguage[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<parentsLanguage.length;i++)
            {
                if ( parentsLanguage[i].checked ) 
                {
                    if(parentsLanguage[i] === "undefined")
                    {
                        choices[4] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[4] = parentsLanguage[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        

        





        
            for (var i=0;i<disabilityChoice.length;i++)
            {
                if ( disabilityChoice[i].checked ) 
                {
                    if(disabilityChoice[i] === "undefined")
                    {
                        choices[5] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[5] = disabilityChoice[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        






        
            for (var i=0;i<disabilityType.length;i++)
            {
                if ( disabilityType[i].checked ) 
                {
                    if(disabilityType[i] === "undefined")
                    {
                        choices[6] = "Empty here";
                        console.log("We got an undefined here")
                    }
                    else
                    {
                        choices[6] = disabilityType[i].value;
                        console.log("Value passed safely")
                    }
                }
            }
        






            console.log("Choices will be consoled after this");
            console.log(choices);

            console.log(choices[0]);//Gender
            console.log(choices[1]);//Rights
            console.log(choices[2]);//An Aboriginal or Torres Strait Islander
            console.log(choices[3]);//English first language?
            console.log(choices[4]);//Parents first language?
            console.log(choices[5]);//Disability yes/no
            console.log(choices[6]);//Disability type

            


            //Need to mass create grabs here (30 needed)
            


            var firstName = document.getElementById('firstname').value;

            console.log(firstName);
            
            var lastName = document.getElementById('lastname').value;

            console.log(lastName);
            
            var dateTest = document.getElementById("dateofbirth").value;
           
            var homeAddress = document.getElementById('homeaddress').value;
            
            var mailingAddress = document.getElementById('mailingaddress').value;
            
            var mobileNumber = document.getElementById('mobile').value;
            


            var homePhone = document.getElementById('homephone').value;
            
            var emailAddress = document.getElementById('emailaddress').value;
            
            var emergencyName = document.getElementById('emergencyname').value;
            
            var emergencyRelationship = document.getElementById('emergencyrelationship').value;
            
            var emergencyHome = document.getElementById('emergencyhome').value;
            


            var emergencyMobile = document.getElementById('emergencymobile').value;
            
            var emergencyAddress = document.getElementById('emergencyaddress').value;
            
            var countryofBirth = document.getElementById('countryofbirth').value;
            
            var englishOther = document.getElementById('englishother').value;
            
            var supermemberNumber = document.getElementById('supermembernumber').value;
            



            var superfundAbn = document.getElementById('superfundabn').value;
            
            var superfundName = document.getElementById('superfundname').value;
            
            var superUsi = document.getElementById('superusi').value;
            
            var superbuildName = document.getElementById('superbuildname').value;
            
            var superbuildBranch = document.getElementById('superbuildbranch').value;
            


            var superbankbsbNumber = document.getElementById('superbankbsbnumber').value;
            
            var superbankaccountNumber = document.getElementById('superbankaccountnumber').value;
            
            var superbankaccountName = document.getElementById('superbankaccountname').value;
            
            var superbankaccountType = document.getElementById('superbankaccounttype').value;
            
            var wageName = document.getElementById('wagename').value;
            


            var wageBranch = document.getElementById('wagebranch').value;
            
            var wagebsbNumber = document.getElementById('wagebsbnumber').value;
            
            var wageaccountNumber = document.getElementById('wageaccountnumber').value;
            
            var wageaccountName = document.getElementById('wageaccountname').value;
            
            var wageaccountType = document.getElementById('wageaccounttype').value;
            




            var genderChosen = choices[0];
            var rightsChosen = choices[1];
            var aboriginalChosen = choices[2];
            var englishChosen = choices[3];
            var parentsChosen = choices[4];
            var disabilityChosen = choices[5];
            var disabilitytypeChosen = choices[6];


            




            
            

            var clientContext = new SP.ClientContext();
            console.log(clientContext);
            var oList = clientContext.get_web().get_lists().getByTitle('EmployeeCommencementForm');
            console.log(oList);    
            var itemCreateInfo = new SP.ListItemCreationInformation();

            console.log(itemCreateInfo);
            this.oListItem = oList.addItem(itemCreateInfo);

            console.log(oListItem);

            
                
            





            oListItem.set_item('Title', firstName);
            oListItem.set_item('Surname', lastName);
            oListItem.set_item('DateofBirth', dateTest);
            oListItem.set_item('HomeAddress', homeAddress);
            oListItem.set_item('MailingAddress', mailingAddress);
            oListItem.set_item('MobileNumber', mobileNumber);

            oListItem.set_item('HomePhone', homePhone);
            oListItem.set_item('EmailAddress', emailAddress);
            oListItem.set_item('EmergencyName', emergencyName);
            oListItem.set_item('EmergencyRelationship', emergencyRelationship);
            oListItem.set_item('EmergencyHomeWorkPhone', emergencyHome);

            oListItem.set_item('EmergencyMobile', emergencyMobile);
            oListItem.set_item('EmergencyAddress', emergencyAddress);
            oListItem.set_item('CountryofBirth', countryofBirth);
            oListItem.set_item('MainLanguageSpokenHome', englishOther);
            oListItem.set_item('SuperMemberNumber', supermemberNumber);

            oListItem.set_item('SuperFundABN', superfundAbn);
            oListItem.set_item('SuperFundName', superfundName);
            oListItem.set_item('UniqueSuperIdentifier', superUsi);
            oListItem.set_item('SuperBankName', superbuildName);
            oListItem.set_item('SuperBankBranch', superbuildBranch);

            oListItem.set_item('SuperBSBNumber', superbankbsbNumber);
            oListItem.set_item('SuperAccountNumber', superbankaccountNumber);
            oListItem.set_item('SuperAccountName', superbankaccountName);
            oListItem.set_item('SuperAccountType', superbankaccountType);
            oListItem.set_item('WageBankName', wageName);

            oListItem.set_item('WageBranch', wageBranch);
            oListItem.set_item('WageBSBNumber', wagebsbNumber);
            oListItem.set_item('WageAccountNumber', wageaccountNumber);
            oListItem.set_item('WageAccountName', wageaccountName);
            oListItem.set_item('WageAccountType', wageaccountType);




            oListItem.set_item('Gender', genderChosen);
            oListItem.set_item('LegalWorkRights', rightsChosen);
            oListItem.set_item('AnAboriginalorTorresStrait', aboriginalChosen);
            oListItem.set_item('EnglishFirstLanguage', englishChosen);
            oListItem.set_item('ifYeswasEnglishBothParents', parentsChosen);
            oListItem.set_item('HaveDisability', disabilityChosen);
            oListItem.set_item('ifYesDisabilityWhatType', disabilitytypeChosen);






            
            
            

            console.log(oListItem);
                
            oListItem.update();

            console.log("test 7");
        
            clientContext.load(oListItem);

            console.log("test 8");
                
            clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
        }
        
        function onQuerySucceeded() 
        {
        
            alert('Item created: ' + oListItem.get_id());
            //window.location.reload();
        }
        
        function onQueryFailed(sender, args) 
        {
        
            alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
            //window.location.reload();
        }









    })
      



    }); 
     








   
   }
    function onError(error) {
        alert('Error');
   }
  });
});

</script>

<div class="printArea">


<img src="https://jbepl.sharepoint.com/PublishingImages/PrintForm/Home/test.PNG"></a><br></br>
<br></br>







  <input type="button" id="btnClick" value="Fill List"/> <br></br><br></br>



  <form action="/action_page.php">

  <h2>Your Personal Information</h2>

  First name:&nbsp;Last name:<br>
  <input type="text" id="firstname" class="field1">
  

  Last name:<br>
  <input type="text" id="lastname" class="field2">
  <br>

  Date of Birth:<br>
  <input type="text" id="dateofbirth">
  <br>

  Gender:<br>
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female<br></br>

  <br>

  Do you have the legal work rights within Australia?:<br>
  <input type="radio" name="legalworkrights" value="citizen">Yes, I am an Australian or New Zealand citizen<br></br>
  <input type="radio" name="legalworkrights" value="resident">Yes, I am an Australian resident<br></br>
  <input type="radio" name="legalworkrights" value="workingvisa">Yes, I have a valid working visa<br></br>
  <input type="radio" name="legalworkrights" value="noworkingrights">No, I don't have work rights within Australia<br></br>

  <br>

  Home Address:<br>
  <input type="text" id="homeaddress" ></br>
  <br>

  Mailing Address:<br>
  <input type="text" id="mailingaddress" >
  <br>

  Mobile:<br>
  <input type="text" id="mobile" >
  <br>

  Home Phone:<br>
  <input type="text" id="homephone" >
  <br>

  Email Address:<br>
  <input type="text" id="emailaddress" >
  <br>

  Emergency Name:<br>
  <input type="text" id="emergencyname" >
  <br>

  Emergency Relationship:<br>
  <input type="text" id="emergencyrelationship" >
  <br>

  Emergency Home/Work Phone:</br><br>
  <input type="text" id="emergencyhome" >
  <br>

  Emergency Mobile:<br>
  <input type="text" id="emergencymobile" >
  <br>

  Emergency Address:<br>
  <input type="text" id="emergencyaddress" >
  <br>

  Are you an Aboriginal or Torres Straight Islander:<br>
  <input type="radio" name="aboriginal" value="aboriginal">Aboriginal<br></br>
  <input type="radio" name="aboriginal" value="torres">Torres Strait Islander<br></br>
  <input type="radio" name="aboriginal" value="bothaboriginaltorres">Aboriginal Torres Straight Islander<br></br>
  <input type="radio" name="aboriginal" value="notaboriginal">No, not Aboriginal and/or Torres Strait Islander</input>
  <br>

  What was your country of birth?:<br>
  <input type="text" id="countryofbirth" >
  <br><br></br>

  Was English your FIRST language?:<br>
  <input type="radio" name="firstlanguage" value="yes">Yes<br></br>
  <input type="radio" name="firstlanguage" value="no">No<br></br>
  <br>

  If yes, was English BOTH of your parents' first language?:<br>
  <input type="radio" name="parentslanguage" value="yes">Yes<br></br>
  <input type="radio" name="parentslanguage" value="no">No<br></br>
  <input type="radio" name="parentslanguage" value="dontknow">Don't know<br></br>

  <br>

  Main language OTHER than English spoken at home?:<br>
  <input type="text" id="englishother" >
  <br>

  Do you have a disability?:<br>
  <input type="radio" name="disability" value="yes">Yes<br></br>
  <input type="radio" name="disability" value="no">No<br></br>
  <br>

  If yes, please select the type of disability. If you have a disability and do not want to identify as having a disability, you may answer 'No':<br>
  <input type="radio" name="disabilitytype" value="hearing">Hearing<br></br>
  <input type="radio" name="disabilitytype" value="mobility">Mobility<br></br>
  <input type="radio" name="disabilitytype" value="vision">Vision<br></br>
  <input type="radio" name="disabilitytype" value="medical">Medical<br></br>
  <input type="radio" name="disabilitytype" value="other">Other<br></br>

  <br>

  Superannuation Member number:<br>
  <input type="text" id="supermembernumber" >
  <br>

  Superannuation Fund ABN:<br>
  <input type="text" id="superfundabn" >
  <br></br>

  Superannuation Fund Name:<br>
  <input type="text" id="superfundname" >
  <br>

  Superannuation Unique Superannuation Identifier (USI):<br>
  <input type="text" id="superusi" >
  <br></br>

  Superannuation Bank Bank/Building Society/Credit Union Name:</input><br>
  <input type="text" id="superbuildname" >
  <br>

  Superannuation Bank Bank/Building Society/Credit Union Branch:</br><br>
  <input type="text" id="superbuildbranch" >
  <br></br>

  Superannuation Bank BSB Number:<br>
  <input type="text" id="superbankbsbnumber" >
  <br>

  Superannuation Bank Account Number:<br>
  <input type="text" id="superbankaccountnumber" >
  <br></br>

  Superannuation Bank Account Name:<br>
  <input type="text" id="superbankaccountname" >
  <br>

  Superannuation Bank Account Type:<br>
  <input type="text" id="superbankaccounttype" >
  <br></br>

  Wage Bank/Building Society/Credit Union Name:</input><br>
  <input type="text" id="wagename" >
  <br>

  Wage Bank/Building Society/Credit Union Branch:</br><br>
  <input type="text" id="wagebranch" >
  <br></br>

  Wage BSB Number:</input><br>
  <input type="text" id="wagebsbnumber" >
  <br>

  Wage Account Number:</br><br>
  <input type="text" id="wageaccountnumber" >
  <br></br>

  Wage Account Name:</input><br></br>
  <input type="text" id="wageaccountname" >
  <br>

  Wage Account Type:<br>
  <input type="text" id="wageaccounttype" >
  <br></br>

  <br>
  <input type="button" id="Resubmit" value="Resubmit">

  </form> 

</div>
