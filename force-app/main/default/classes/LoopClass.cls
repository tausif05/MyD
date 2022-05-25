public  class LoopClass {
public void RunWhileLoop()
{
    try{
    Integer count=1;
 	while (count < 11) {
    System.debug(count);
    count++;
    }
    }
    Catch(Exception e)
    {
        System.debug(e.getMessage());
    }
}

public static  void RunDoWhile()
{
     integer count=1;
     do
     {
         System.debug('Serial Number :' + count);
         count ++;
         System.debug(count);
     }while(count>10);
       
         
 }
public static void RunGeneralizedLoop()
{
       // loop that iterates based on a condition
    for(integer i=0;i<=9;i++)
    {
		System.debug('For Loop : ' + i);
    }
    System.debug(' ');
    integer [] myInts =new integer[]{1,8,9};
    for(integer ctr :myInts)
    {
       System.debug(ctr); 
    }
    //
    String s = 'Acme';
    for(Account a :[SELECT Id,Name from Account where Name like :(S+'%')])
    {
       System.debug(a.Id + ' : '+ a.Name); 
    }
   }
      
}