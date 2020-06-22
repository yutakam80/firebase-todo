import { NextPage } from 'next'
import { useMemo } from 'react'
import { useSignIn } from 'hooks/useSignIn'

const Index: NextPage = () => {
  const { initialized, signIn } = useSignIn()
  const clickSignIn = () => {
    signIn()
  }
  return useMemo(() => {
    if (!initialized) {
      return null
    }
    return (
      <div>
        <h1>firebase-todo</h1>
        <button onClick={clickSignIn}>
          Googleアカウントでログイン
        </button>
      </div>
    )
  }, [initialized])
}

export default Index
