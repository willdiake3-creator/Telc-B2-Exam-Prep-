import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { 
  getFirestore,
  initializeFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  serverTimestamp,
  doc,
  getDoc,
  Firestore
} from "firebase/firestore";
import firebaseAppletConfig from "../firebase-applet-config.json";
import { ExamAttempt } from "./types";

export const ADMIN_EMAIL = "diakeyves3@gmail.com";

const firebaseConfig = {
  apiKey: firebaseAppletConfig.apiKey,
  authDomain: firebaseAppletConfig.authDomain,
  projectId: firebaseAppletConfig.projectId,
  storageBucket: firebaseAppletConfig.storageBucket,
  messagingSenderId: firebaseAppletConfig.messagingSenderId,
  appId: firebaseAppletConfig.appId,
};

const FIRESTORE_DB_ID = firebaseAppletConfig.firestoreDatabaseId || "ai-studio-zertifikatb1neum-8e808cf3-be5d-40f0-bbc0-06e12bef8f49";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore safely with fallback for database ID
const customDbId = firebaseAppletConfig.firestoreDatabaseId;
let firestoreDb: Firestore;

try {
  if (customDbId && customDbId !== '(default)') {
    firestoreDb = getFirestore(app, customDbId);
  } else {
    firestoreDb = getFirestore(app);
  }
} catch {
  firestoreDb = getFirestore(app);
}

export const db = firestoreDb;
export const googleProvider = new GoogleAuthProvider();

export async function testConnection() {
  try {
    await getDoc(doc(db, 'test', 'connection'));
  } catch (error) {
    console.warn("Firestore connection notice:", error);
  }
}

export async function loginWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

export async function loginWithEmail(email: string, pass: string) {
  return await signInWithEmailAndPassword(auth, email, pass);
}

export async function registerWithEmail(email: string, pass: string) {
  return await createUserWithEmailAndPassword(auth, email, pass);
}

export async function logout() {
  return await signOut(auth);
}

export async function saveExamAttempt(user: User, attempt: Omit<ExamAttempt, 'userId' | 'email' | 'timestamp'>) {
  if (!user) throw new Error("User must be signed in to save exam progress");

  const attemptData = {
    userId: user.uid,
    email: user.email || 'Anonymous',
    sectionId: attempt.sectionId || 'full',
    sectionTitle: attempt.sectionTitle || 'Full TELC B2 Practice Test',
    score: attempt.score,
    total: attempt.total,
    percentage: attempt.percentage,
    passed: attempt.passed,
    durationSeconds: attempt.durationSeconds || 0,
    timestamp: serverTimestamp()
  };

  const attemptsRef = collection(db, `users/${user.uid}/attempts`);
  const docRef = await addDoc(attemptsRef, attemptData);
  return docRef.id;
}

export async function getUserAttempts(user: User): Promise<ExamAttempt[]> {
  if (!user) return [];
  try {
    const attemptsRef = collection(db, `users/${user.uid}/attempts`);
    const snap = await getDocs(attemptsRef);
    const results: ExamAttempt[] = [];
    snap.forEach((docSnap) => {
      const data = docSnap.data();
      results.push({
        id: docSnap.id,
        userId: data.userId || user.uid,
        email: data.email || user.email || '',
        sectionId: data.sectionId || 'full',
        sectionTitle: data.sectionTitle || 'Full TELC B2 Practice Test',
        score: data.score || 0,
        total: data.total || 0,
        percentage: data.percentage || 0,
        passed: !!data.passed,
        durationSeconds: data.durationSeconds || 0,
        timestamp: data.timestamp
      });
    });
    return results.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
  } catch (err) {
    console.error("Error fetching user attempts:", err);
    return [];
  }
}

export async function fetchAllAttemptsForAdmin(): Promise<ExamAttempt[]> {
  try {
    const usersSnap = await getDocs(collection(db, "users"));
    const allAttempts: ExamAttempt[] = [];

    for (const userDoc of usersSnap.docs) {
      try {
        const attemptsSnap = await getDocs(collection(db, `users/${userDoc.id}/attempts`));
        attemptsSnap.forEach(docSnap => {
          const data = docSnap.data();
          allAttempts.push({
            id: docSnap.id,
            userId: userDoc.id,
            email: data.email || 'Unknown',
            sectionId: data.sectionId || 'full',
            sectionTitle: data.sectionTitle || 'Full TELC B2 Practice Test',
            score: data.score || 0,
            total: data.total || 0,
            percentage: data.percentage || 0,
            passed: !!data.passed,
            durationSeconds: data.durationSeconds || 0,
            timestamp: data.timestamp
          });
        });
      } catch (subErr) {
        // Individual user subcollection fetch permission error ignored if isolated
      }
    }

    return allAttempts.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
  } catch (err) {
    console.error("Error fetching admin attempts:", err);
    throw err;
  }
}
