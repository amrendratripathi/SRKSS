# Local development setup

1. Configure `DATABASE_URL` in `srkss.backend/.env` using your pgAdmin PostgreSQL database connection details.
2. Start the API from `srkss.backend` with `npm run dev`.
3. Set `VITE_API_BASE=http://localhost:3000` in `SRKSS/.env.local`.
4. Start the frontend from `SRKSS` with `npm run dev` and open the Vite URL.

See `srkss.backend/README.md` for connection string and deployment guidance.
