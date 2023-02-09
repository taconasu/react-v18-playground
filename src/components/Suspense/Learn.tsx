import React, { Suspense, useState } from 'react'
import { Loading } from '../parts/Loading'

// むにゃむにゃ...あと1秒...Zzz を一生繰り返すお寝坊コンポーネント君
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))
const AlwaysSuspend: React.FC<{ isSuspend: boolean }> = ({ isSuspend }) => {
  console.log('むにゃむにゃ...あと1秒...😪💤')
  // 親コンポーネントから状態を更新することで再レンダリングさせて再びSuspend状態にできます
  if (isSuspend) {
    throw sleep(1000)
  }
  return <p>End of Suspend!</p>
}

export const LearnSuspense: React.FC = () => {
  const [isSuspend, setIsSuspend] = useState(true)
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AlwaysSuspend isSuspend={isSuspend} />
      </Suspense>
      {!isSuspend && (
        <button onClick={() => setIsSuspend(true)}>Suspendを再開</button>
      )}
      <button onClick={() => setIsSuspend(false)}>Suspendを終了</button>
    </>
  )
}
