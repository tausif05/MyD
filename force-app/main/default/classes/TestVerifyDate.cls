@isTest
private class TestVerifyDate {

@isTest static void check1(){
      Date chk1 = verifyDate.CheckDates(date.ValueOf('2015-03-08'),date.ValueOf('2015-02-20'));
    System.assertEquals(date.ValueOf('2015-03-31'), chk1); }
@isTest static void check2(){
      Date chk2 = verifyDate.CheckDates(date.ValueOf('2015-02-19'),date.ValueOf('2015-02-20'));
    System.assertEquals(date.ValueOf('2015-03-31'), chk2);}
}