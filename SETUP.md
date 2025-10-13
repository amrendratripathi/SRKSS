# SRKSS Admin Setup Guide

## Quick Start for Admin Login

The admin login is now configured to work without MongoDB for testing purposes.

### Admin Credentials
- **Email**: `admin@gmail.com`
- **Password**: `TiwariJi`

## Development Setup

### Option 1: Using Vercel CLI (Recommended)
1. Install Vercel CLI if not already installed:
   ```bash
   npm install -g vercel
   ```

2. Run the development server:
   ```bash
   npx vercel dev
   ```

3. Open your browser and go to `http://localhost:3000`

4. Navigate to `/login` and use the admin credentials above.

### Option 2: Using Vite (Frontend Only)
1. Run the frontend development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:8080`

3. Navigate to `/login` and use the admin credentials above.

**Note**: With Vite only, the API endpoints won't work, but you can test the frontend.

## MongoDB Setup (For Full Functionality)

To see trust members data, you need to set up MongoDB:

1. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/srkss?retryWrites=true&w=majority
   VITE_API_BASE=http://localhost:3000
   ```

2. Replace the MongoDB URI with your actual connection string.

3. Run with Vercel CLI:
   ```bash
   npx vercel dev
   ```

## Testing Admin Login

1. Go to `/login`
2. Enter email: `admin@gmail.com`
3. Enter password: `TiwariJi`
4. Click Login
5. You should be redirected to `/admin` dashboard

## Troubleshooting

- If login fails, check the browser console for errors
- Make sure you're using the correct development server (Vercel CLI for API endpoints)
- Check that the email and password are exactly as specified (case-sensitive)


