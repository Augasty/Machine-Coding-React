import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


const Modal_Styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: 'skyblue',
  padding: '15px',
  zIndex: 2,
}

const Overlay_Style = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 2
}

export const Modal = ({ open, onClose }) => {
  if (!open) return null
  // only return will work also
  return ReactDOM.createPortal(
    <>
      <div style={Overlay_Style} onClick={onClose}></div>
      <div style={Modal_Styles}>
        <div>Fancy modal</div>
        <button onClick={() => alert('wah')}>ok</button>
        <button onClick={onClose}>close</button>

      </div>
    </>,
    document.getElementById("portal")
  )
}



function ModalHome() {
  const [isOpen, setIsOpen] = useState(false)
  return (<>
    <Link to="/">
      <button className='buttonclass' type="button">Back
      </button></Link>


    <div style={{ zIndex: 1 }}>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
      <div style={{ zIndex: 3 }}>text that has higher zIndex than the modal</div>

  </>
  )
}

export default ModalHome