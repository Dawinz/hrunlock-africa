# Setup Instructions

## Quick Start

This is a pure static website with no build process required. Simply open `index.html` in a browser or deploy the files to any static hosting service.

## Before Deployment

### 1. Configure Formspree Forms

Replace `YOUR_FORM_ID` in `index.html` with your actual Formspree form IDs:

- **Contact Form** (line ~292): Create a form at [formspree.io](https://formspree.io) and replace the form ID
- **Newsletter Form** (line ~180): Create a separate form for newsletter subscriptions

Example:
```html
<!-- Before -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- After -->
<form action="https://formspree.io/f/abc123xyz" method="POST">
```

### 2. Update Google Maps Embed

Update the Google Maps iframe (line ~312) with the correct embed URL for your location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "MNF Square, Sokoine Drive, Dar es Salaam"
3. Click "Share" → "Embed a map"
4. Copy the iframe code and replace the existing one

### 3. Add Your Images

Upload your images to the appropriate folders:

- `images/gallery/` - Gallery images
- `images/customers/` - Customer/partner logos
- `images/team/` - Team member photos
- `images/logo/` - Brand logos
- `images/hero/` - Hero section images

Then update the HTML to reference your images instead of placeholders.

### 4. Update Social Media Links

Update the social media links in the footer (around line ~330) with your actual profiles:

```html
<a href="YOUR_LINKEDIN_URL" target="_blank">LinkedIn</a>
<a href="YOUR_TWITTER_URL" target="_blank">Twitter</a>
<a href="YOUR_FACEBOOK_URL" target="_blank">Facebook</a>
```

### 5. Update Learning Platform Links

Update the links in the Online Learning section (around line ~150) with your actual platform URLs:

- WBG Institute link
- LearnWorlds link

### 6. Configure Analytics (Optional)

The site includes Plausible Analytics. Update the `data-domain` attribute in the script tag (line ~18) with your actual domain:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

Or replace with Google Analytics 4 if preferred.

### 7. Newsletter Integration (Optional)

You can replace the Formspree newsletter form with:
- Beehiiv embed
- Mailchimp embed
- Any other newsletter service

Simply replace the form HTML with the embed code provided by your service.

## File Structure

```
HRUNLOCK Africa/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All styles
├── scripts/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets
│   ├── gallery/
│   ├── customers/
│   ├── team/
│   ├── logo/
│   └── hero/
├── README.md           # Project documentation
└── SETUP.md            # This file
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect and deploy the static site

### Deploy to Other Static Hosts

You can deploy to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

Simply upload all files maintaining the folder structure.

## Testing

1. Open `index.html` in a browser
2. Test all navigation links
3. Test form submissions (after configuring Formspree)
4. Test on mobile devices
5. Verify all images load correctly

## Customization

### Colors

All brand colors are defined as CSS custom properties in `styles/main.css`:

```css
:root {
    --primary-green: #00A859;
    --secondary-green: #32B34B;
    /* ... */
}
```

### Typography

Fonts are loaded from Google Fonts. To change fonts, update:
1. The Google Fonts link in `index.html` (line ~12)
2. The font-family variables in `styles/main.css`

## Support

For issues or questions, contact: contact@hrunlockafrica.com

