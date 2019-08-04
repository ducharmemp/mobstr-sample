import React from 'react';
import logo from './logo.svg';
import './App.css';

import { trace } from 'mobx';

import { find } from './store';
import { FooModel } from './models';

import { observer } from 'mobx-react';

function App() {
  console.log(find(FooModel).flatMap(model => model.friendIds));
  trace();
  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(find(FooModel).flatMap(model => model.friendIds))}</div>
      </header>
    </div>
  );
}

export default observer(App);
