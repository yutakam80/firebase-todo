import * as firebase from '@firebase/testing'
import * as fs from 'fs'
import * as uuid from 'uuid'

const randomID = () => uuid.v4()

const projectId = 'test-project'
const databaseName = 'firestore'
const rules = fs.readFileSync('./firestore.rules', 'utf8')

const adminDB = firebase.initializeAdminApp({ projectId, databaseName })

type Auth = {
  uid?: string
  [key: string]: any
}

const clientDB = (auth?: Auth) => (
  firebase.initializeTestApp({ projectId, auth }).firestore()
)

const serverTimestamp = () => (
  firebase.firestore.FieldValue.serverTimestamp()
)

beforeAll(async () => {
  await firebase.loadFirestoreRules({ projectId, rules });
})

beforeEach(async () => {
  await firebase.clearFirestoreData({ projectId });
})

afterAll(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
})

describe('/users', () => {
  describe('create', () => {
    it ('OK:正常データ',  async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertSucceeds(db.collection('users').doc(userId).set({
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }))
    })
    it ('OK:名前20文字', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertSucceeds(db.collection('users').doc(userId).set({
        name: '12345678901234567890',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }))
    })
    it ('NG:異常データ', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertFails(db.collection('users').doc(userId).set({ name: 'hoge' }))
    })
    it ('NG:名前21文字', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertFails(db.collection('users').doc(userId).set({
        name: '123456789012345678901',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }))
    })
  })
})

describe('/todos', () => {
  describe('create', () => {
    it('OK:正常データ', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertSucceeds(db.collection('users').doc(userId).set({
        title: '卵を買う',
        isCompleted: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }))
    })
    it('OK:completedAtがnull', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertSucceeds(db.collection('users').doc(userId).set({
        title: '卵を買う',
        isCompleted: false,
        completedAt: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }))
    })
    it('NG:異常データ', async () => {
      const userId = randomID()
      const db = clientDB({ uid: userId })
      await firebase.assertFails(db.collection('users').doc(userId).set({
        title: '卵を買う',
      }))
    })
  })
})