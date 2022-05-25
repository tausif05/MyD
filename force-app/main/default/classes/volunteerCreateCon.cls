public WITH SHARING class volunteerCreateCon {

    @AuraEnabled
    public static id  createVolunteer(String volName,Integer volHeight,Integer volWeight,String volMobile,String volEmail)
    {
        Volunteer__c objVolunteer=new Volunteer__c(
            Name=volName,
            Height__c=volHeight,
            Weight__c=volWeight,
            Mobile__c=volMobile,
            Email__c=volEmail);
        insert objVolunteer;
        return objVolunteer.id;
    }
}