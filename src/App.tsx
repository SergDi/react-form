import * as React from 'react';
import Components from './components';
import { delivery } from './model';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>test Form</h1>
      {delivery.children.map((block) => Components(block))}
    </div>
  );
}
