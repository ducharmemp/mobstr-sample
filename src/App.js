import React from 'react';
import logo from './logo.svg';
import './App.css';

import { trace } from 'mobx';

import { find } from './store';
import { FooModel } from './models';

import { observer } from 'mobx-react';

function App() {
  console.log(find(FooModel));
  trace();
  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(find(FooModel).map(model => model.id))}</div>
      </header>
    </div>
  );
}

export default observer(App);
