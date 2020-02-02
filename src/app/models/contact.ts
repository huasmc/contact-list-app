import { Deserializable } from '../interfaces/deserializable';

export class Contact implements Deserializable {
    private id: number;
    private name: string;
    private numbers: number[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getName() {
        return this.name;
    }

    getNumber() {
        for(var n in this.numbers) {
            if(this.numbers[n] !== null) {
                return this.numbers[n];
            }
        }
    }
}
