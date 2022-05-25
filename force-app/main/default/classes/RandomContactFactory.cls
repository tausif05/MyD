public class RandomContactFactory {

    public static list<Contact> generateRandomContacts(Integer NoOfContact,string LastName)
    {
        list<Contact> newContact=new list<Contact>();
        for(Integer i=0;i<NoOfContact;i++)
        {
            newContact.add(new contact(FirstName=LastName+ i,LastName=LastName));
        }
        insert newContact;
        return newContact;
    }
}