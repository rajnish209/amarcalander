public with sharing class data {
    public data() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAccounts() {
        return [SELECT Id, Amount, CloseDate, Description FROM Opportunity LIMIT 10];
    }
}