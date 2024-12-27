export type SanityImagePaletteSwatch = {
    _type: 'sanity.imagePaletteSwatch'
    background?: string
    foreground?: string
    population?: number
    title?: string
  }
  
  export type SanityImagePalette = {
    _type: 'sanity.imagePalette'
    darkMuted?: SanityImagePaletteSwatch
    lightVibrant?: SanityImagePaletteSwatch
    darkVibrant?: SanityImagePaletteSwatch
    vibrant?: SanityImagePaletteSwatch
    dominant?: SanityImagePaletteSwatch
    lightMuted?: SanityImagePaletteSwatch
    muted?: SanityImagePaletteSwatch
  }
  
  export type SanityImageDimensions = {
    _type: 'sanity.imageDimensions'
    height?: number
    width?: number
    aspectRatio?: number
  }
  
  export type SanityFileAsset = {
    _id: string
    _type: 'sanity.fileAsset'
    _createdAt: string
    _updatedAt: string
    _rev: string
    originalFilename?: string
    label?: string
    title?: string
    description?: string
    altText?: string
    sha1hash?: string
    extension?: string
    mimeType?: string
    size?: number
    assetId?: string
    uploadId?: string
    path?: string
    url?: string
    source?: SanityAssetSourceData
  }
  
  export type Geopoint = {
    _type: 'geopoint'
    lat?: number
    lng?: number
    alt?: number
  }

export type Homepage = {
	_id: string;
	_type: 'homepage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	subtitle?: string;
	hero?: {
		heading?: string;
		tagline?: string;
		backgroundImage?: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
	};
	content?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
		listItem?: 'bullet' | 'number';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
	featuredPosts?: Array<Post>;
};

export type Post = {
	_id: string;
	_type: 'post';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	content?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
		listItem?: 'bullet' | 'number';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
	excerpt?: string;
	coverImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	publishedAt?: string;
	author?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
	};
};

export type Slug = {
	_type: 'slug';
	current?: string;
	source?: string;
};

export type Author = {
	_id: string;
	_type: 'author';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	picture?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	bio?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
		listItem?: 'bullet' | 'number';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
};

export type SanityImageCrop = {
	_type: 'sanity.imageCrop';
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: 'sanity.imageHotspot';
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type SanityImageAsset = {
	_id: string;
	_type: 'sanity.imageAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
	_type: 'sanity.assetSourceData';
	name?: string;
	id?: string;
	url?: string;
};

export type SanityImageMetadata = {
	_type: 'sanity.imageMetadata';
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
};
