<<<<<<< HEAD
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AutocompleteTag from './autoCompleteTag';

// Mock tag options
const mockTagOptions = [
  { id: '1', name: 'Tag1' },
  { id: '2', name: 'Tag2' },
  { id: '3', name: 'Tag3' },
];

test('AutocompleteTag renders correctly and handles tag selection and removal', () => {
  // Render the component
  const { getByPlaceholderText, getByText, queryByText } = render(
    <AutocompleteTag tagOptions={mockTagOptions} />
  );

  // Find the input field
  const input = getByPlaceholderText('Write to add');

  // Simulate typing and selecting a tag
  fireEvent.change(input, { target: { value: 'Tag1' } });
  fireEvent.keyDown(input, { key: 'Enter' });

  // Check if the selected tag is displayed
  const selectedTag = getByText('Tag1');
  expect(selectedTag).toBeInTheDocument();

  // Simulate selecting another tag
  fireEvent.change(input, { target: { value: 'Tag2' } });
  fireEvent.keyDown(input, { key: 'Enter' });

  // Check if the second selected tag is displayed
  const secondSelectedTag = getByText('Tag2');
  expect(secondSelectedTag).toBeInTheDocument();

  // Simulate removing a tag
  fireEvent.click(getByText('Tag1'));

  // Check if the removed tag is no longer displayed
  const removedTag = queryByText('Tag1');
  expect(removedTag).not.toBeInTheDocument();
});
=======
import {} from 'react';
>>>>>>> c49e546c84a50ed2ec24c0a1d83d9253ab951249
