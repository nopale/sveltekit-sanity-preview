import type { Post } from '$lib/types';
import { querySanity } from '$lib/utils/sanity';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params, cookies }) => {
	const { slug } = params as { slug: string }; // Type assertion here

	const postPage = await querySanity<Post>(
		cookies,
		`*[_type == "post" && slug.current == $slug][0]{
            ...,
           
        }`,
		{ slug }
	);

	return {
		postPage,
		isPreview: cookies.get('preview-mode') === 'true'
	};
};
