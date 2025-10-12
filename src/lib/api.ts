export function getApiBase(): string {
  // Use VITE_API_BASE in development to talk to Vercel dev server (port 3000)
  const base = import.meta.env.VITE_API_BASE as string | undefined;
  return base?.trim() || "";
}

export async function apiFetch(input: string, init?: RequestInit) {
  const base = getApiBase();
  const url = base ? `${base}${input}` : input;
  const res = await fetch(url, init);
  let data: any = null;
  try {
    data = await res.json();
  } catch {
    // ignore non-JSON
  }
  if (!res.ok) {
    const message = (data && (data.error || data.message)) || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  return data;
}





