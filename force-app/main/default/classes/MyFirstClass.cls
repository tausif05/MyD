public class MyFirstClass {
   public String valueOne { get; set; }
    public String valueTwo { get; set; }
   
    public PageReference iWantMyJSValues() {
        valueOne = Apexpages.currentPage().getParameters().get('FirstJSParameter');
        valueTwo = Apexpages.currentPage().getParameters().get('SecondJSParameter');
        return null;
    }
}