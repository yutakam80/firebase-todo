import { useState, useCallback } from 'react'
import firebase from 'services/firebase'

export const useAddTodo = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleAddTodo = useCallback(async () => {
    setLoading(true)
    try {
      // firebase.firestore().collection()
    } catch(e) {
      setError(true)
      setLoading(false)
    }
  }, [])

  return { loading, error }
}
