import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState, useMemo } from 'react'
import { doSignIn } from 'store/thunks'
import { useDispatch } from 'react-redux'

const Index: NextPage = () => {
  const [initialMount, setInitialMount] = useState(false)
  const dispatch = useDispatch()
  const clickSignIn = () => {
    dispatch(doSignIn())
  }
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
        <button onClick={clickSignIn}>
          Googleアカウントでログイン
        </button>
      </div>
    )
  }, [initialMount])
}

export default Index
