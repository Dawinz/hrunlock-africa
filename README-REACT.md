# HRUNLOCK Africa - React Application

This is a React application built with Vite, ready for deployment on Vercel.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

This creates a `dist` folder with the production build.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. The `vercel.json` file is already configured for React Router

### Environment Variables

If needed, add environment variables in Vercel dashboard:
- Go to your project settings
- Add environment variables
- Redeploy

## Project Structure

```
HRUNLOCK Africa/
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── pages/          # Page components
│   ├── main.css        # Styles
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── public/
│   └── images/         # Static images
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel configuration
```

## Features

- React Router for navigation
- Responsive design
- Form handling with Formspree
- Optimized for Vercel deployment
- Fast development with Vite

## Configuration

### Formspree Forms

Update the Formspree form IDs in:
- `src/pages/Home.jsx` (newsletter form)
- `src/pages/Journals.jsx` (newsletter form)
- `src/pages/Contact.jsx` (contact form)

Replace `YOUR_FORM_ID` with your actual Formspree form IDs.

### Google Maps

Update the Google Maps embed URL in `src/pages/Contact.jsx` with the actual embed URL for your location.

