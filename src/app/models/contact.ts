import { Deserializable } from '../interfaces/deserializable';
import { PhoneBook } from './phone-book';

export class Contact implements Deserializable {
    private id: number;
    private name: string;
    private email: string;
    private phoneBook: PhoneBook;

    deserialize(input: any) {
        Object.assign(this, input);
        this.phoneBook = new PhoneBook().deserialize(input.phoneBook);
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

    getPhoneBook() {
        return this.phoneBook;
    }
}
