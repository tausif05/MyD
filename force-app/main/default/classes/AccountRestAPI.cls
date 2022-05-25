@RestResource(urlMapping ='/v1/AccountManager/')
global  class AccountRestAPI {

    @httpGet
    global static Account doGetAccount()
    {
        Account act=new Account();
        Map<String,String> paramsMap=RestContext.request.params ;
        String actID=paramsMap.get('id');
        act=[select Name,AccountNumber,Phone,Type,CreatedById,LastModifiedById from account where id= : actID];
        return act;
    }
    @httpDelete
    global static String dodeleteAccount()
    {
        Account act=new Account();
        Map<String,String> paramsMap=RestContext.request.params ;
        String actID=paramsMap.get('id');
        act=[select Name,AccountNumber,Phone,Type,CreatedById,LastModifiedById from account where id= : actID];
        delete act;
        return 'Record Deleted';
    }
    @httpPost
    global static Account doCreateAccount(String Name)
    {
         Account act=new Account(Name = Name);
        insert act;
        return act;
    }
    @httpPut
    global static Account doUpdateAccount(String Phone,string Website,string contactLName)
    {
        Account act=new Account();
        Map<String,String> paramsMap=RestContext.request.params ;
        String actID=paramsMap.get('id');
        act=[select Phone,Website from account where id= : actID];
        act.Phone=Phone;
        act.Website=Website;
        update act;
        Contact objCon=new Contact();
        objCon.AccountId=act.Id;
        objCon.lastname=contactLName;
        insert objCon;
        return act;
     }
    global class AccountInfo
    {
        Account act{
            get;set;
        } 
        
    }
}