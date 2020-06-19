import { NextPage } from 'next'
import { signIn } from 'services/firebase'
import Router from 'next/router'
import { useEffect, useState, useMemo } from 'react'

const Index: NextPage = () => {
  const [initialMount, setInitialMount] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('pending')) {
      sessionStorage.removeItem('pending')
      Router.push('/todo')
    } else {
      setInitialMount(true)
    }
  }, [])
  return useMemo(() => {
    if (!initialMount) {
      return null
    }
    return (
      <div>
        <h1>firebase-todo</h1>
        <button onClick={signIn}>
          Googleアカウントでログイン
        </button>
      </div>
    )
  }, [initialMount])
}

export default Index
