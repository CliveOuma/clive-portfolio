# Contact Form Setup

## Environment Variables Required

To fix the 500 Internal Server Error, you need to create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular Gmail password) in `EMAIL_PASS`

## File Structure
```
portfolio-website/
├── .env.local          # Create this file with your credentials
├── pages/
│   └── api/
│       └── contact.js  # Updated with better error handling
└── ...
```

## Testing
After setting up the environment variables, restart your development server:
```bash
npm run dev
```

The contact form should now work without the 500 error.
