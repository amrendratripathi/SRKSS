import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { apiFetch } from "@/lib/api";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Validate required fields
    if (!mobile.trim() || !password) {
      toast({ 
        title: "Missing required fields", 
        description: "Please enter both mobile number and password",
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobile.trim(), password })
      });
      
      if (!data.user) {
        throw new Error("Invalid response from server");
      }

      // Store user data
      login({ ...data.user, token: data.token });
      
      // Show success message
      toast({ 
        title: "Login successful", 
        description: `Welcome back, ${data.user.name}!`
      });
      
      // Redirect based on role
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err: unknown) {
      toast({ 
        title: "Login failed", 
        description: err instanceof Error ? err.message : "Invalid mobile number or password",
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Mobile Number</label>
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="mt-4 text-sm">
        Don&apos;t have an account? <Link className="text-primary" to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
