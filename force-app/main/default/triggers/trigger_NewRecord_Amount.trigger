trigger trigger_NewRecord_Amount on Opportunity (before insert,before update) {
for(Opportunity opp :Trigger.New)
{
    if(opp.Amount<501)
    {
        opp.adderror('Please enter the amount greater than 500');
    }
    if(opp.Probability < 10)
    {
        opp.adderror('Please enter probability greater than 10%');
    }
}
/*for(Opportunity oppUp :Trigger.old)
{
    try
    {
    	if(oppUp.Probability < 10)
    	{
        	oppUp.adderror('Please enter probability greater than 10%');
    	}
    }
    catch(DmlException ex)
    {
        ex.getMessage();
    }
}*/

}