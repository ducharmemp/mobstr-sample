import { v4 as uuid } from 'uuid';

import { relationship, add, primaryKey } from "./store";
import { computed, observable } from 'mobx';

export class BarModel {
    @primaryKey
    id = uuid()
}

export class FooModel {
    @primaryKey
    id = uuid()

    @observable
    @relationship(type => BarModel)
    friends = [];

    @computed
    get friendIds() {
      console.log(this)
      return this.friends.map(friend => friend.id);
    }

}

const f = new FooModel();
add(f);
console.log(f);

// setInterval(() => {
//     add(new FooModel())
// }, 1000);

setInterval(() => {
    f.friends.push(new BarModel())
    console.log(f.friends)
}, 500);
