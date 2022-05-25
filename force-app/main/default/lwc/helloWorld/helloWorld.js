import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'Tausif';
    @track greeting2 = 'Jawed';
    changeHandler(event) {
        this.greeting = event.target.value;
        //this.greeting2=event.greeting2.value;
    }
}