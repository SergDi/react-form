import React from 'react';

import Input from './components/Input';
import Radio from './components/Radio';
import Select from './components/Select';

const Components = {
  radio: Radio,
  input: Input,
  select: Select,
};

export default (block) => {
  if (typeof Components[block.type] !== 'undefined') {
    return React.createElement(Components[block.type], {
      block: block,
    });
  }
};
