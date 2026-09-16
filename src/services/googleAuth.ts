import {
	getAdditionalUserInfo,
	getAuth,
	getRedirectResult,
	GoogleAuthProvider as JsGoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	type User,
} from 'firebase/auth';

export interface GoogleSignInResult {
	user: User;
	isNewUser: boolean;
}

/**
 * Inicia sesión con Google.
 *
 * Usa `signInWithPopup` y, si el navegador/PWA lo bloquea, cae a
 * `signInWithRedirect`. En ese caso el resultado se resuelve al volver con
 * `resolveGoogleRedirect()` (llamado en el montaje de la pantalla de login).
 */
export async function signInWithGoogleJS(): Promise<GoogleSignInResult> {
	const provider = new JsGoogleAuthProvider();
	const auth = getAuth();

	try {
		const result = await signInWithPopup(auth, provider);
		return {
			user: result.user,
			isNewUser: getAdditionalUserInfo(result)?.isNewUser ?? false,
		};
	} catch (error) {
		const code = (error as { code?: string } | null)?.code;
		if (
			code === 'auth/popup-blocked' ||
			code === 'auth/operation-not-supported-in-this-environment'
		) {
			await signInWithRedirect(auth, provider);
			return new Promise<GoogleSignInResult>(() => {
				// La página navega hacia Google; el resultado llega vía redirect.
			});
		}
		throw error;
	}
}

/**
 * Resuelve el resultado de un `signInWithRedirect` pendiente.
 * Devuelve `null` si la entrada no vino de un redirect.
 */
export async function resolveGoogleRedirect(): Promise<GoogleSignInResult | null> {
	const auth = getAuth();
	const result = await getRedirectResult(auth);
	if (!result) return null;
	return {
		user: result.user,
		isNewUser: getAdditionalUserInfo(result)?.isNewUser ?? false,
	};
}
