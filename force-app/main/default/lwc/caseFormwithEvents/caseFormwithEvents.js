import { LightningElement } from 'lwc';

export default class CaseFormwithEvents extends LightningElement {
    objectApiName = 'Case';

    handleSubmit(event){
        console.log('Form is Submitted for Case creation' + JSON.stringify(event.detail));
    }

    handleSuccess(event){
        alert('Case created successfully with Case Number: ' + JSON.stringify(event.detail));
    }

}