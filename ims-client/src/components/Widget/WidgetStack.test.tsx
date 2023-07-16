import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import apiCalls from '../../service/apiCalls';
import WidgetsStack from './WidgetsStack';

jest.mock('../../service/apiCalls');

describe('WidgetsStack', () => {
  it('renders the component with correct data', async () => {
    const mockResponse = {
      activeCount: 10,
      averageCost: 50,
      averageDurationHours: 2,
    };

    apiCalls.getAggregation = jest.fn().mockResolvedValue(mockResponse);
   

    render(<WidgetsStack />);

    await act(async () => {
      await screen.findByText('Active Count');
      await screen.findByText('Average Cost');
      await screen.findByText('Average Duration Hours');
    });

    expect(screen.getByText('Active Count')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Average Cost')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('Average Duration Hours')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders the component with error message when API call fails', async () => {
    const errorMessage = 'Failed to fetch data';
    apiCalls.getAggregation = jest.fn().mockRejectedValue(new Error(errorMessage));
    

    render(<WidgetsStack />);

    await act(async () => {
      await screen.findByText('Error fetching data:', { exact: false });
    });

    expect(screen.getByText(`Error fetching data: ${errorMessage}`)).toBeInTheDocument();
  });
});

