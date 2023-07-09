import React from 'react'
type MyComponentProps = {
  name: string
}

const DemoComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to my component.</p>
      <ul>
        <li>
          <a href="https://github.com/">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </div>
  )
}

export default DemoComponent