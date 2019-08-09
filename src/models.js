import { v4 as uuid } from 'uuid';

import { relationship, addOne, primaryKey, removeOne, truncateCollection } from "./store";
import { computed } from 'mobx';

export class SpamModel {
    @primaryKey
    id = uuid();
}

export class BarModel {
    @primaryKey
    id = uuid()

    @relationship(() => SpamModel, { cascade: true })
    spams = []
}

export class FooModel {
    @primaryKey
    id = uuid()
    
    @relationship(type => BarModel)
    friends = [];

    @computed
    get spamIds() {
      return this.friends.flatMap(friend => friend.spams);
    }

}

const f = new FooModel();
addOne(f);
const b = new BarModel();
f.friends.push(b);
console.log(BarModel, truncateCollection)

setInterval(() => {
    const b = new BarModel();
    b.spams.push(new SpamModel(), new SpamModel(), new SpamModel(), new SpamModel());
    f.friends.push(b);
}, 1);


setInterval(() => {
    truncateCollection(BarModel);
}, 10000);
