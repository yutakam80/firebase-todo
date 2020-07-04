import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

export const onCreateUser = functions.region('asia-northeast1')
  .auth.user().onCreate(async (user) => {
    await admin.auth().setCustomUserClaims(user.uid, {
      suspended: false,
    })

    const batch = admin.firestore().batch()

    batch.set(admin.firestore().doc(`users/${user.uid}`), {
      name: user.displayName,
      iconURL: user.photoURL,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    })

    await batch.commit()
  })
