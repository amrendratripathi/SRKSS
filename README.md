# SRKSS web app

The frontend is a Vite/React application. Signup and login call the Express API in `srkss.backend`.

For local development, set `VITE_API_BASE=http://localhost:3000` in `SRKSS/.env.local`, run the API from `srkss.backend`, and run `npm run dev` from `SRKSS`. See `srkss.backend/README.md` for PostgreSQL setup.

When `VITE_API_BASE` is not set, the frontend uses the deployed API at `https://srkss-backend-3.onrender.com`. To change it for a Vercel deployment, set `VITE_API_BASE` in the Vercel project's Environment Variables and redeploy.

The frontend sends the name, gender, mobile number, address, and password to the API. The API stores the password only as a bcrypt hash. Confirm Password is a client-side check and is not stored.
