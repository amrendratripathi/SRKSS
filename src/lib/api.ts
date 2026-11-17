export function getApiBase(): string {
  const base = import.meta.env.VITE_API_BASE as string | undefined;
  const configuredBase = base?.trim().replace(/\/$/, "");
  if (import.meta.env.PROD) return "";
  return configuredBase || "";
}

export async function apiFetch(input: string, init?: RequestInit) {
  const base = getApiBase();
  const url = base ? `${base}${input}` : input;
  const headers = new Headers(init?.headers);
  const storedUser = localStorage.getItem("srkss_user");
  if (storedUser) {
    try {
      const token = JSON.parse(storedUser)?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
    } catch {
      localStorage.removeItem("srkss_user");
    }
  }
  const res = await fetch(url, { ...init, headers });
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










