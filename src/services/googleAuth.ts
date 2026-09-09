import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
	getAuth,
	getAdditionalUserInfo,
	GoogleAuthProvider as JsGoogleAuthProvider,
	signInWithCredential,
	signInWithPopup,
	type User,
} from 'firebase/auth';

/**
 * Inicia sesión con Google.
 *
 * - Web/PWA: usa el flujo de popup del SDK de Firebase (funciona en navegador).
 * - Android/iOS: usa el flujo nativo del plugin @capacitor-firebase/authentication
 *   y luego firma la sesión del SDK JS de Firebase con signInWithCredential,
 *   para que toda la app (Firestore y demás) vea el mismo usuario autenticado.
 */
export async function signInWithGoogleJS(): Promise<{
	user: User;
	isNewUser: boolean;
}> {
	if (Capacitor.isNativePlatform()) {
		const nativeResult = await FirebaseAuthentication.signInWithGoogle();
		const idToken = nativeResult.credential?.idToken;
		if (!idToken) {
			throw new Error('Google Sign-In no devolvió un ID token.');
		}
		const auth = getAuth();
		const credential = JsGoogleAuthProvider.credential(idToken);
		const result = await signInWithCredential(auth, credential);
		return {
			user: result.user,
			isNewUser: getAdditionalUserInfo(result)?.isNewUser ?? false,
		};
	}

	const provider = new JsGoogleAuthProvider();
	const auth = getAuth();
	const result = await signInWithPopup(auth, provider);
	return {
		user: result.user,
		isNewUser: getAdditionalUserInfo(result)?.isNewUser ?? false,
	};
}
