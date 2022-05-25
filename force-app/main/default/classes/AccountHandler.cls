public class AccountHandler {
 public static Account insertNewAccount(string Name)
 {
     Account ac=new Account();
     try
     {
     ac.Name=Name;
     insert ac;
     system.debug(ac); 
         return ac;
     }
     catch(dmlexception e)
     {
        system.debug(e);
         return null;
     }
 }
}