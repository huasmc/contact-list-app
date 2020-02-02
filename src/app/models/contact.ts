import { Deserializable } from '../interfaces/deserializable';
import { PhoneBook } from './phone-book';

export class Contact implements Deserializable {
    private id: number;
    private name: string;
    private email: string;
    private numbers: PhoneBook;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }

    getNumber() {
        for(var n in this.numbers) {
            if(this.numbers[n] !== null) {
                return this.numbers[n];
            }
        }
    }

    getNumbers() {
        console.log(this.numbers)
        return this.numbers;
    }
}
