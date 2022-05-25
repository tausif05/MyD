public class NewCaseListController {
 public  List<Case> getNewCases()
    {
        List<Case> caseList = new List<Case>();
        for(Case ct: [Select Id, CaseNumber,status FROM Case WHERE status = 'New'])
            caseList.add(ct);

        return caseList;
    }
}