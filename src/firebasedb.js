import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBWPLBKKK3GP8wpUnx4bzLSXefMqIZhQ5Y',
  authDomain: 'lab3-f8b17.firebaseapp.com',
  databaseURL: 'https://lab3-f8b17.firebaseio.com',
  projectId: 'lab3-f8b17',
  storageBucket: 'lab3-f8b17.appspot.com',
  messagingSenderId: '206176413784',
};

firebase.initializeApp(config);

export function fetchNotes(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function addNote(text) {
  const key = firebase.database().ref('notes').push().key;
  firebase.database().ref('notes').child(key).set({ title: text, text: '', x: 30, y: 30 });
}

export function deleteNote(id) {
  firebase.database().ref('notes').child(id).remove();
}

export function update(id, note) {
  firebase.database().ref('notes').child(id).set(note);
}
