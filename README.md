# Portfolio Website

A modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design
- Contact form with email functionality using Resend
- Deployed on Vercel

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables for Resend:
   - Get your Resend API key from [resend.com](https://resend.com)
   - Create a `.env.local` file in the root directory:
     ```
     RESEND_API_KEY=your_resend_api_key_here
     TO_EMAIL=your_email@example.com
     ```

4. For the email functionality to work, you need to:
   - Sign up for Resend and verify your domain
   - Update the `from` email in `api/send-email.ts` to use your verified domain
   - Set the `TO_EMAIL` environment variable to your email address

## Development

For local development with API routes working:

```bash
npm run dev:full
```

This uses Vercel CLI to serve both your frontend and API routes locally.

For frontend-only development (API calls will fail):

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. The contact form will send emails using Resend.

Make sure to set the environment variables in your Vercel dashboard:
- `RESEND_API_KEY`
- `TO_EMAIL`