import { useEffect, useState } from 'react'

// React v18のイベントの伝播に関するテストコンポーネント
export const Container: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      {isOpen && <Dialog />}
    </>
  )
}

const Dialog: React.FC = () => {
  const handler = () => {
    console.log('I am a handler defined in the window object.🥹')
  }

  useEffect(() => {
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  return null // サンプルなのでDOMは返しません
}
