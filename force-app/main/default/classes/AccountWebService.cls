global class AccountWebService {

    webservice static Account createAccount(String name)
    {
        Account act=new Account(Name =name);
        insert act;
        return act;
    }
}