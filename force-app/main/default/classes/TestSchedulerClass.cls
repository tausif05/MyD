global class TestSchedulerClass implements Schedulable{
    global void execute(SchedulableContext sc)
    {
        // Create Account Object with the name test.
        Account account=new Account();
        account.Name='Test account created from scheduler';
        insert account;
    }

}