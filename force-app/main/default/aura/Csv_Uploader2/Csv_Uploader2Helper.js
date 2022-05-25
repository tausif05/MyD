({
 downloadCsv_Helper : function(c, e, h) {
  var stockData = c.get("v.accounts");
        var csv = h.convertArrayOfObjectsToCSV(c,stockData);  
         if (csv == null){return;}
      var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; //
          hiddenElement.download = 'ExportData.csv';
          document.body.appendChild(hiddenElement);
       hiddenElement.click();
 },
    convertArrayOfObjectsToCSV : function(c,objectRecords){
        var csvStringResult, counter, keys, columnDivider, lineDivider;
        if (objectRecords == null || !objectRecords.length) {
            return null;
         } 
        columnDivider = ',';
        lineDivider =  '\n';
        keys = ['Name','NumberOfEmployees','Id' ];
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
        for(var i=0; i < objectRecords.length; i++){  
            counter = 0;
             for(var sTempkey in keys) {
                var skey = keys[sTempkey] ; 
                  if(counter > 0){
                      csvStringResult += columnDivider;
                   }  
               csvStringResult += '"'+ objectRecords[i][skey]+'"';
               counter++;
            }
             csvStringResult += lineDivider;
          }
        return csvStringResult;       
    },
})