import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UpTabs from './Tabs';
import theme from '../../theme';

const onEvent = (functionName:string,status:string)=>{
    console.log(`on event succeeded to send for function:${functionName} in status: ${status}`);
}

describe('UpTabs', () => {
  test('renders the component', () => {
    render(<UpTabs onEvent={onEvent}/>);
  });

  test('changes the active tab on click', () => {
    const { getByText } = render(<UpTabs onEvent={onEvent}/>);
    const activeTab = getByText('Active Incidents');
    const solvedTab = getByText('Solved Incidents');

    fireEvent.click(solvedTab);

    expect(solvedTab).toHaveStyle(`backgroundColor: ${theme.palette.secondary.main}`);
    expect(activeTab).not.toHaveStyle(`backgroundColor: ${theme.palette.secondary.main}`);
  });

  test('calls the onEvent function when the tab changes', () => {
    const mockOnEvent = jest.fn();
    const { getByText } = render(<UpTabs onEvent={mockOnEvent} />);
    const activeTab = getByText('Active Incidents');
    const solvedTab = getByText('Solved Incidents');

    fireEvent.click(solvedTab);

    expect(mockOnEvent).toHaveBeenCalledTimes(1);
    expect(mockOnEvent).toHaveBeenCalledWith('filterRowsByStatus', 'resolved');

    fireEvent.click(activeTab);

    expect(mockOnEvent).toHaveBeenCalledTimes(2);
    expect(mockOnEvent).toHaveBeenCalledWith('filterRowsByStatus', 'active');
  });
});