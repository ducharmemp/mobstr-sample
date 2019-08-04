import { v4 as uuid } from 'uuid';

import { relationship, add, primaryKey } from "./store";

export class BarModel {
    @primaryKey
    id = uuid()
}

export class FooModel {
    @primaryKey
    id = uuid()

    @relationship(type => BarModel)
    friends = [];
}

const f = new FooModel();
add(f);
console.log(f)

setInterval(() => {
    add(new FooModel())
}, 1000);

setInterval(() => {
    f.friends = [new BarModel()]
}, 500);
