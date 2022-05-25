public class AccountController {
@auraenabled
 public static list<Account> fetchAccounts()
 {
     list<Account> accList=[SELECT Id, Name, BillingState, Website, Phone, Industry, Type from Account LIMIT 20];
     return accList;
 }
@auraenabled
public static void updateAccount(List<Account> acc)
{
    update acc;
}
}