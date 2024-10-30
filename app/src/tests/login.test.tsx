// login.test.ts
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebaseConfig';

describe('Login Page Tests', () => {
  test('User can log in with valid credentials', async () => {
    const email = 'validuser@example.com';
    const password = 'validpassword';

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    expect(userCredential.user.email).toBe(email);
  });

  test('User cannot log in with invalid email', async () => {
    const email = 'invaliduser@example.com'; // Email that doesn't exist
    const password = 'validpassword';

    await expect(signInWithEmailAndPassword(auth, email, password)).rejects.toThrow();
  });

  test('User cannot log in with incorrect password', async () => {
    const email = 'validuser@example.com'; // Valid email
    const password = 'wrongpassword'; // Incorrect password

    await expect(signInWithEmailAndPassword(auth, email, password)).rejects.toThrow();
  });
});
