import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/data.getAccounts';

export default class Datatable extends LightningElement {
   @track totaldata;

    @wire(getAccounts)
    WiredAccount({error ,data}){
        if(data){
            this.totaldata = data;
            console.log('gsgfgsdgh',data);
        }
        if(error){
            console.log('error');
        }
    }

     columns = [
        { label: 'Amount', fieldName: 'Amount' },
        { label: 'CloseDate', fieldName: 'CloseDate' },
        { label: 'Description', fieldName: 'Description' }
        
    ];

@track firstname;
@track lastname;
    handlename(e){
this.firstname = e.target.value;
    }
    handleprev(e){
this.lastname = e.target.value;
    }
    handleClick(){
        console.log('shbgdgvsgcgs',this.firstname);
        console.log('sbhfdvgscbsn',this.lastname);
    }
}