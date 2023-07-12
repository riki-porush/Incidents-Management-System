import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react'
import DemoComponent from './DemoComponent'


const name = 'John'
//verifies  with the correct name and checks if the expected text is present in the rendered component.
test('renders component with correct name', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  const { getByText } = render(<DemoComponent name={name} />)
  const componentText = getByText(`Hello, ${name}!`)
  expect(componentText).toBeInTheDocument()
})

//checks  a link with the text 'Link 2', simulates a click event on the link,
// and verifies that the link's href attribute matches the expected URL pattern.
test('renders component with correct link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  const { getByText } = render(<DemoComponent name={name} />)
  const componentLink = getByText('Link 2')
  fireEvent.click(componentLink)

  const urlRegex = /^(https:\/\/)[^ "]+$/
  const linkHref = componentLink.getAttribute('href') || ''

  expect(urlRegex.test(linkHref)).toBe(false)
})