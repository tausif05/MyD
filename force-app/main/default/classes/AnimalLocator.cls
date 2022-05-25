public  class AnimalLocator
{

  public static String getAnimalNameById(Integer ID )
   {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+ ID);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        String strResp = '';
        strResp=string.valueof(response.getStatusCode());
        if (response.getStatusCode() == 200) {
    	// Deserialize the JSON string into collections of primitive data types.
    	Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
    	// Cast the values in the 'animals' key as a list
    	List<Object> animals = (List<Object>) results.get('animals');
    	System.debug('Received the following animals:');
    	//for (Object animal: animals) {
        	//System.debug(animal);
    	//}
    	System.debug(animals);
	} 
       return 'strResp';
   }
  
}