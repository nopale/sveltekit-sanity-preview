import type { Cookies } from '@sveltejs/kit';
import { client, getPreviewClient } from '$lib/sanityClient';
import { PRIVATE_PREVIEW_TOKEN } from '$env/static/private';
import type { Author, Homepage, Post } from '$lib/types';

function getClient(cookies: Cookies) {
	const isPreview = cookies.get('preview-mode') === 'true';
	return isPreview ? getPreviewClient(PRIVATE_PREVIEW_TOKEN) : client;
}

export async function querySanity<T extends Homepage | Post | Author >(cookies: Cookies, query: string, params?: any): Promise<T> {
	const currentClient = getClient(cookies);
	return currentClient.fetch(query, params);
}
