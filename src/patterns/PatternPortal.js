import React from 'react'
import ReactDOM from 'react-dom'
const ModalNode = document.getElementById('pattern')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    ModalNode.appendChild(this.el)
  }
  componentWillUnmount() {
    ModalNode.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}