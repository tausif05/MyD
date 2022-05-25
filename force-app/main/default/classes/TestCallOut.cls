public class TestCallOut {

    public Static String GetAnimals()
    {
        string strAnimals='';
        Http  http=new Http();
        HttpRequest request=new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('GET');
        
        HttpResponse response=http.send(request);
        if(response.getStatusCode()==200)
        {
            Map<String,Object> results=(Map<String,Object>) JSON.deserializeUntyped(response.getBody());
            list<object> animals=(list<object>) results.get('animals');
            
            for(Object animal:animals)
            {
                System.debug(animal);
            }
        }
        return '';
    }
    
}