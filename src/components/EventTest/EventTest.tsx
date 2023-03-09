import React, { useEffect, useState } from 'react'

// React v18のイベントの伝播に関するテストコンポーネント
export const Container: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => {
          console.log('Triggered button clicked.🌝')
          setIsOpen(true)
        }}
      >
        Open
      </button>
      {isOpen && <Dialog handleCloseDialog={handleCloseDialog} />}
    </>
  )
}

const Dialog: React.FC<{ handleCloseDialog: () => void }> = ({
  handleCloseDialog,
}) => {
  const handler = () => {
    handleCloseDialog()
    console.log('I am a handler defined in the window object.🥹')
  }

  useEffect(() => {
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      style={{
        width: '300px',
        height: '100px',
        background: '#E2C9DF',
      }}
    >
      <p>我、Dialog component を名乗りし者也</p>
    </div>
  )
}
