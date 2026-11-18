# SRKSS web app

The frontend is a Vite/React application. Signup and login call the Express API in `srkss.backend`.

For local development against a local API, set `VITE_API_BASE=http://localhost:3000` in `SRKSS/.env.local` and run the API from `srkss.backend`. To use the deployed API instead, leave `VITE_API_BASE` blank; the Vite dev server proxies `/api` requests to Render.

Vercel proxies `/api` requests to `https://srkss-backend-3.onrender.com`, so no `VITE_API_BASE` environment variable is needed in Vercel. Production API requests use this same-origin proxy to avoid browser CORS restrictions. The root-level `api/` directory contains legacy Vercel function handlers and is excluded from deployment so those handlers do not shadow the Render proxy.

The frontend sends the name, gender, mobile number, address, and password to the API. The API stores the password only as a bcrypt hash. Confirm Password is a client-side check and is not stored.
