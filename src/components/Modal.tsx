import { Background, CloseButton } from 'src/styles/modal'

import React from 'react'

interface IModalProps {
  onClose: () => void
}

const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  return (
    <Background>
      <CloseButton onClick={onClose}>
        &#10006;
      </CloseButton>
      {children}
    </Background>
  )
}

export default Modal
