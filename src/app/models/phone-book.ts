import { Deserializable } from '../interfaces/deserializable';

export class PhoneBook implements Deserializable {
    private id: number;
    private houseNumber: number;
    private officeNumber?: number;
    private faxNumber?: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getId() {
        return this.id;
    }

    getHouseNumber() {
        return this.houseNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getfaxNumber() {
        return this.faxNumber;
    }
}
