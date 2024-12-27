import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2024-03-21',
	useCdn: true
});

// Function to get preview client
export function getPreviewClient(token: string) {
	return client.withConfig({
		useCdn: false,
		token,
		perspective: 'previewDrafts' 
	});
}
