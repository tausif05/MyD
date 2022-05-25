trigger AccountDeletion on Account (before delete) {
for(Account a:[select Id from Account WHERE  Id in (select AccountId from Opportunity) and Id in :Trigger.old])
{
    trigger.oldMap.get(a.Id).addError('Cannot delete account with related opportunities.');
}
}