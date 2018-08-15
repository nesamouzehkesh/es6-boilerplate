import {add, complex} from './math';

describe ('Testing math service', () => {
  test ('test add function', () => {
    expect (add (2, 5)).toEqual (7);
    expect (add (2, 5)).toMatchSnapshot ();
  });

  test ('test complex function', () => {
    expect (complex (10)).toMatchSnapshot ();
  });
});
