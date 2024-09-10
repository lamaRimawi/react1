// src/components/FormInput.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For jest-dom matchers
import FormInput from './FormInput'; // Adjust the import path as needed
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Mock react-bootstrap components
jest.mock('react-bootstrap', () => ({
  Form: {
    Group: ({ children, ...props }) => <div {...props}>{children}</div>,
    Label: ({ children, ...props }) => <label {...props}>{children}</label>,
    Control: ({ ...props }) => <input {...props} />,
    Feedback: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  InputGroup: ({ children, ...props }) => <div {...props}>{children}</div>,
  Text: ({ children, ...props }) => <span {...props}>{children}</span>,
}));

// Mock FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, ...props }) => <i {...props} data-icon={icon.iconName}></i>,
}));

describe('FormInput Component', () => {
  const mockProps = {
    id: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    error: { message: 'Username is required' },
    registerProps: { name: 'username' },
    icon: faUser,
  };

  test('renders the FormInput component with all props', () => {
    render(<FormInput {...mockProps} />);

    // Check if the label is rendered correctly
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();

    // Check if the input has the correct placeholder
    expect(screen.getByPlaceholderText(/enter your username/i)).toBeInTheDocument();

    // Check if the icon is rendered
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('data-icon', 'user');

    // Check if the error message is displayed
    expect(screen.getByText(/username is required/i)).toBeInTheDocument();
  });

  test('renders without error message when no error prop is provided', () => {
    const { error, ...propsWithoutError } = mockProps;
    render(<FormInput {...propsWithoutError} />);

    // Check that no error message is rendered
    expect(screen.queryByText(/username is required/i)).not.toBeInTheDocument();
  });
});
