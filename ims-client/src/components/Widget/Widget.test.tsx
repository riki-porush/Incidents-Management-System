import React from 'react';
import { render, screen } from '@testing-library/react';
import Widget from '../Widget/Widget';

describe('Widget', () => {
  it('renders the component with correct props', () => {
    const title = 'Test Widget';
    const aggregation = 123456;
    const img = 'test.jpg';

    render(<Widget title={title} aggregation={aggregation} img={img} />);

    // Assert the title is rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();

    // Assert the aggregation is rendered correctly
    const formattedAggregation = aggregation.toLocaleString();
    expect(screen.getByText(formattedAggregation)).toBeInTheDocument();

    // Assert the image is rendered correctly
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute('src')).toBe(img);
  });

  it('renders the component without an image', () => {
    const title = 'Test Widget';
    const aggregation = 123456;

    render(<Widget title={title} aggregation={aggregation} />);

    // Assert the title is rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();

    // Assert the aggregation is rendered correctly
    const formattedAggregation = aggregation.toLocaleString();
    expect(screen.getByText(formattedAggregation)).toBeInTheDocument();

    // Assert that no image is rendered
    expect(screen.queryByAltText(title)).not.toBeInTheDocument();
  });
});
