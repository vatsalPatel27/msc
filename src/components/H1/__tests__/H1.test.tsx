import { H1 } from '../index';
import { render } from '@testing-library/react';

const children = 'text';

const renderComponent = (props = {}) => {
  const utils = render(<H1 {...props}>{children}</H1>);
  const heading = utils.queryByText(children);
  return { ...utils, heading };
};

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'test';
    const { heading } = renderComponent({ id });
    expect(heading).toHaveAttribute('id', id);
  });

  it('should render its text', () => {
    const { heading } = renderComponent();
    expect(heading).toHaveTextContent(children);
  });
});
