

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Environment setup

Create a `.env` file in the project root with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<dbName>?retryWrites=true&w=majority&appName=<appName>
```

For your provided cluster, set:

```
MONGODB_URI=mongodb+srv://rajjubabu531_db_user:c22DpB8EDOKUtEzh@srkss.wj2xqv4.mongodb.net/?retryWrites=true&w=majority&appName=srkss
```

Then restart the dev server.

For local development with both frontend and API:

```
# one-time install
npm i -g vercel

# from project root
vercel dev
```

Open `https://srkss-backend.onrender.com`. Frontend calls to `/api/...` will work via the hosted backend. If you use `npm run dev` (Vite at 5173), set `VITE_API_BASE=https://srkss-backend.onrender.com` and the frontend will talk to the hosted API.

### Auth API endpoints

- `POST /api/auth/register` with JSON `{ email, password, role? }`
- `POST /api/auth/login` with JSON `{ email, password }`

Users are stored in the `srkss.users` collection with `passwordHash` (bcrypt).

