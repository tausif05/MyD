public Class paramtest
{
 public String value{get;Set;}
 Public Void testDirect(){
 System.Debug(Value);
 }
 Public Void testinput(){
 	 value = apexpages.currentPage().getParameters().get('inpval');
     system.debug(value);
 }
}