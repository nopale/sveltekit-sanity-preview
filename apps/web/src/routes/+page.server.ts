import type { PageServerLoad } from './$types';
import { client, getPreviewClient } from '$lib/sanityClient';
import { PRIVATE_PREVIEW_TOKEN } from '$env/static/private';
import { querySanity } from '$lib/utils/sanity';
import type { Homepage } from '$lib/types';

export const load: PageServerLoad = async ({ cookies }) => {
	const isPreview = cookies.get('preview-mode') === 'true';
	const currentClient = isPreview ? getPreviewClient(PRIVATE_PREVIEW_TOKEN) : client;

	console.log(isPreview)

	const homepage = await querySanity<Homepage>(
		cookies,
		`*[_type == "homepage"][0]{
			...,
			"featuredPosts": featuredPosts[]->{
			title,
			slug,
			excerpt,
			mainImage,
			publishedAt
			}
	    }`
	);

	return {
		homepage,
		isPreview: cookies.get('preview-mode') === 'true'
	};
};
