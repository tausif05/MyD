public class ContactSearch {
    public static List<Contact> searchForContacts(string lastname,String Postalcode)
    {
        List<Contact> Contacts = [Select ID,Name from Contact where LastName = :lastname AND MailingPostalCode = :Postalcode ];
        system.debug(Contacts);
        return Contacts;
    }
    
}