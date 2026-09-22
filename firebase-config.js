/* ============================================================
   Linsa Salon de Beauté — Koneksyon Firebase (baz done pataje)
   ============================================================
   POUKISA: Sa a pèmèt randevou kliyan pran sou paj piblik la
   (randevou.html) parèt otomatikman nan app kès la (index.html),
   menm si se pa menm aparèy/navigatè.

   KIJAN POU KONFIGIRE L (gratis, ~5 minit):
   1. Ale sou https://console.firebase.google.com
   2. "Add project" → bay li yon non (egzanp: linsa-salon)
   3. Nan meni goch la: Build → Firestore Database → "Create database"
      → chwazi "Start in test mode" pou kòmanse (ou ka sekirize l pi
      devan ak Firestore Security Rules)
   4. Nan meni goch la tou: Build → Storage → "Get started" (pou ka
      telechaje videyo/foto pwomosyon depi Admin → Pwomosyon)
   5. Nan Project settings (zanno a) → "Your apps" → klike </> (Web)
      → anrejistre app la → Firebase ap ba w yon objè "firebaseConfig"
   6. Kopye valè yo, mete yo nan FIREBASE_CONFIG anba a, epi sove.
   7. Pouse (push) chanjman an — tou de index.html ak randevou.html
      ap otomatikman konekte ak menm baz done a.

   Toutotan ou pa ranpli valè yo, aplikasyon an ap kontinye fonksyone
   ak localStorage sèlman (chak aparèy separe), tankou anvan.
============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD2eZXWNBdrKpctZG-E7Gv5h0p8Td0GIBk",
  authDomain: "linsa-salon.firebaseapp.com",
  projectId: "linsa-salon",
  storageBucket: "linsa-salon.firebasestorage.app",
  messagingSenderId: "633678693483",
  appId: "1:633678693483:web:39bdab173534c400b21d2e"
};

let _linsaDb = null;
let _linsaStorage = null;
let _linsaFirebaseReady = false;

function linsaFirebaseConfigured(){
  return FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "REMPLACE_MWEN";
}

function linsaInitFirebase(){
  if(_linsaDb) return _linsaDb;
  if(!linsaFirebaseConfigured()) return null;
  if(typeof firebase === 'undefined') return null;
  try{
    if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    _linsaDb = firebase.firestore();
    _linsaFirebaseReady = true;
    return _linsaDb;
  } catch(e){
    console.error('Firebase init erè:', e);
    return null;
  }
}

function linsaInitStorage(){
  if(_linsaStorage) return _linsaStorage;
  if(!linsaInitFirebase()) return null;
  if(typeof firebase === 'undefined' || !firebase.storage) return null;
  try{
    _linsaStorage = firebase.storage();
    return _linsaStorage;
  } catch(e){
    console.error('Firebase Storage init erè:', e);
    return null;
  }
}

/* Koute (an tan reyèl) tout randevou k ap vini yo.
   callback(list) rele chak fwa gen chanjman. Si Firebase pa konfigire,
   callback(null) rele yon sèl fwa pou moun ki rele l la ka fè fallback. */
function linsaSubscribeAppointments(callback){
  const db = linsaInitFirebase();
  if(!db){ callback(null); return function(){}; }
  return db.collection('appointments')
    .orderBy('date').orderBy('time')
    .onSnapshot(function(snap){
      const list = [];
      snap.forEach(function(doc){ list.push(Object.assign({ id: doc.id }, doc.data())); });
      callback(list);
    }, function(err){
      console.error('Firebase lekti erè:', err);
      callback(null);
    });
}

async function linsaAddAppointment(appt){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('appointments').add(Object.assign({}, appt, {
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }));
}

async function linsaDeleteAppointment(id){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('appointments').doc(id).delete();
}

/* ============================================================
   PWOMOSYON (carousel) — videyo/foto anplwaye yo telechaje
   sove nan Firebase Storage, ak metadata nan koleksyon 'promos'.
============================================================ */

/* Telechaje yon fichye (videyo/foto) sou Firebase Storage.
   onProgress(pourcentaj 0-100) rele pandan telechajman an. */
function linsaUploadPromoMedia(file, onProgress){
  return new Promise(function(resolve, reject){
    const storage = linsaInitStorage();
    if(!storage){ reject(new Error('firebase-not-configured')); return; }
    const safeName = Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const ref = storage.ref().child('promos/' + safeName);
    const task = ref.put(file);
    task.on('state_changed',
      function(snap){
        if(onProgress) onProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100));
      },
      function(err){ reject(err); },
      function(){
        task.snapshot.ref.getDownloadURL().then(function(url){
          resolve({ url: url, path: ref.fullPath });
        }).catch(reject);
      }
    );
  });
}

/* Koute (an tan reyèl) tout slide pwomosyon k ap sove nan baz done a.
   callback(list) rele chak fwa gen chanjman; callback(null) si Firebase
   pa konfigire, pou moun ki rele l la ka fè fallback sou site-content.js. */
function linsaSubscribePromos(callback){
  const db = linsaInitFirebase();
  if(!db){ callback(null); return function(){}; }
  return db.collection('promos').orderBy('createdAt', 'asc')
    .onSnapshot(function(snap){
      const list = [];
      snap.forEach(function(doc){ list.push(Object.assign({ id: doc.id }, doc.data())); });
      callback(list);
    }, function(err){
      console.error('Firebase lekti pwomosyon erè:', err);
      callback(null);
    });
}

async function linsaAddPromo(promo){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('promos').add(Object.assign({}, promo, {
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }));
}

async function linsaDeletePromo(id, storagePath){
  const db = linsaInitFirebase();
  if(!db) throw new Error('firebase-not-configured');
  await db.collection('promos').doc(id).delete();
  if(storagePath){
    const storage = linsaInitStorage();
    if(storage){
      try { await storage.ref().child(storagePath).delete(); }
      catch(e){ console.warn('Pa t ka efase fichye Storage la:', e); }
    }
  }
}
