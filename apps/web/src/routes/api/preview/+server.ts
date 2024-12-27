import { error, redirect, type RequestHandler } from '@sveltejs/kit';
import { PRIVATE_PREVIEW_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const secret = url.searchParams.get('secret');
	const slug = url.searchParams.get('slug');

	if (secret !== PRIVATE_PREVIEW_TOKEN) {
		throw error(401, 'Invalid token');
	}

	cookies.set('preview-mode', 'true', {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		maxAge: 60 * 30 // 30 minutes
	});

	throw redirect(303, slug ? `/${slug}` : '/');
};
