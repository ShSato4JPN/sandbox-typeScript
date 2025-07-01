// before
// import * as React from 'react'

// type Props = {
//   children?: React.ReactNode
// }

// const Child = (props: Props) => (
//   <div>{props.children}</div>
// )
// const Parent = (props: Props & { childLabel: string }) => {
//   <Child>
//     {props.childLabel}
//   </Child>
// }

// after
import * as React from 'react'
const Child: React.FC = props => (
  <div>{props.children}</div>
)

const Parent: React.FC<{ childLabel: string}> = props => (
  <Child>
    {props.childLabel}
  </Child>
)

const Test: React.FC = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}
