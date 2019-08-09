import React from 'react';
import logo from './logo.svg';
import './App.css';

import { trace } from 'mobx';

import { findAll } from './store';
import { FooModel } from './models';

import { observer } from 'mobx-react';

function App() {
  trace();
  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(findAll(FooModel).flatMap(model => model.spamIds).length)}</div>
      </header>
    </div>
  );
}

export default observer(App);
