# Kaero Prescribe CMS

A comprehensive content management system for the Kaero Prescribe website built with Sanity CMS.

## Features

- **Hero Section Management**: Control main banner content with image upload/URL options
- **Pricing Plans**: Manage pricing tiers with features, images, and CTAs
- **Services**: Showcase service offerings with detailed descriptions
- **Features**: Highlight key features with icons and descriptions
- **About Section**: Manage company information with rich content
- **Testimonials**: Customer reviews with ratings and profile images
- **Contact Information**: Manage contact details and social links
- **Site Settings**: Global configuration for branding and SEO

## Content Types

### 1. Site Settings (Global)
- Site name, description, and branding
- Logo and favicon management
- Brand colors and footer content
- SEO keywords and analytics

### 2. Hero Section
- Main title and subtitle
- Description and CTA buttons
- Background images (upload or URL)

### 3. Pricing Plans
- Plan details with pricing and billing periods
- Feature lists and plan images
- Popular plan highlighting
- Custom CTAs and ordering

### 4. Services
- Service titles and descriptions
- Feature lists and pricing
- Service images and CTAs

### 5. Features
- Feature highlights with icons
- Descriptions and optional links
- Custom ordering

### 6. About Section
- Rich content with statistics
- Company images and CTAs

### 7. Testimonials
- Customer reviews with ratings
- Profile images and company info

### 8. Contact Section
- Contact information and hours
- Social media links with icons
- Location maps

## Image Management

Each content type supports dual image options:
- **Upload**: Direct file upload to Sanity
- **URL**: External image URL linking

## API Usage

Fetch content using Sanity's GROQ queries:

```javascript
// Get all active pricing plans
const pricingPlans = await client.fetch(`
  *[_type == "pricingPlan" && isActive == true] | order(order asc) {
    planName,
    price,
    currency,
    billingPeriod,
    features,
    isPopular,
    ctaText,
    ctaLink,
    "imageUrl": planImage.imageUpload.asset->url,
    "externalImageUrl": planImage.imageUrl
  }
`)

// Get hero section
const heroSection = await client.fetch(`
  *[_type == "heroSection" && isActive == true][0] {
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    "backgroundImageUrl": backgroundImage.imageUpload.asset->url,
    "externalBackgroundUrl": backgroundImage.imageUrl
  }
`)

// Get site settings
const siteSettings = await client.fetch(`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    "logoUrl": logo.imageUpload.asset->url,
    "externalLogoUrl": logo.imageUrl,
    primaryColor,
    secondaryColor,
    footerText
  }
`)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access the CMS at `http://localhost:3333`

## Deployment

```bash
npm run build
npm run deploy
```

## Content Management Workflow

1. **Site Settings**: Configure global settings first
2. **Hero Section**: Set up main landing content
3. **Services**: Add your service offerings
4. **Features**: Highlight key features
5. **Pricing Plans**: Configure pricing tiers
6. **About Section**: Add company information
7. **Testimonials**: Add customer reviews
8. **Contact Section**: Set up contact information

Each content type includes an "Active" toggle to control visibility on the frontend.