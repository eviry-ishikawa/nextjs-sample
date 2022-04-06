import { render } from '@testing-library/react';
import { Sample } from '../src/components/Sample';

describe('Sample', () => {
  test('h1要素', () => {
    const { getByText } = render(<Sample />);
    expect(getByText('Hello world!')).toBeTruthy();
  });
});
