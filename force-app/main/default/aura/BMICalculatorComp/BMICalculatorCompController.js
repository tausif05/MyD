({
	calculateBMI : function(bmiComp, bmiEvent, bmiHelper) {
		console.log("------Start of CalculateBMI-------");
        var gHeight=bmiComp.get("v.guestHeight");
        var gWeight=bmiComp.get("v.guestWeight");
        //var gName=bmiComp.get("v.guestName");
        var gNameCmp=bmiComp.find("gName");
        //alert(gNameCmp);
        //console.log('gNameCmp' + gNameCmp);
       var gNameCmpValue='';
        if(gNameCmp!= null)
        {   gNameCmp.set("v.label","Enter Guest Name")
            var gNameCmpValue=gNameCmp.get("v.value")
            console.log('gNameCmpValue ' + gNameCmpValue);
         	//alert('ddd');
        }
        else
        {   
            console.log("Attribute is not there");
        }
        	
        if(gNameCmpValue.length==0)
        {
            gNameCmp.set("v.errors",[{message : "Please enter Guest Name."}])
            return;
        }
        else
            gNameCmp.set("v.errors",null)
            
        if(gNameCmpValue.length<6)
        {   
            gNameCmp.set("v.errors",[{message : "Please enter minimum 5 character letter."}]);
            //alert('Please enter minimum 5 character letter');
            //console.log("Please enter minimum 5 character letter")
        }
        else
        {
            gNameCmp.set("v.errors",null)
            //console.log(gHeight);
        var BMI=gWeight/(gHeight/100 * gHeight/100);
        var BMIRound=Math.round(BMI*10)/10;
        console.log(BMIRound);
        var gCategory;
        if(BMIRound < 18.5)
            gCategory = "UNDER-WEIGHT";
        else if(BMIRound>18.5 && BMIRound <25)
            gCategory="NORMAL-WEIGHT";
        else
            gCategory="OVER-WEIGHT";
        bmiComp.set("v.BMICategory",gCategory);
        console.log(gCategory);
        }
        
	}
})