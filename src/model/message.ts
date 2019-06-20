import {User} from './user';

export class Message {

    messages : any = []

    constructor(private from: User, private content: string) {}


    setMessage(message : Message ){
        this.messages.push( message)
    }

    getMessage(){
        return this.messages
    }

}