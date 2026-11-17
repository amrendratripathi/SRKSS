import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type Member = {
  id: string;
  name: string;
  address: string;
  photoUrl: string;
  memberSince: string;
};

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    apiFetch("/api/members")
      .then((data) => setMembers(data.members || []))
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load members"))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (value: string) => value
    ? new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "long" })
    : "Date unavailable";
  const filteredMembers = members.filter((member) =>
    `${member.name} ${member.address}`.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link to="/user" className="mb-6 inline-flex items-center text-primary hover:text-primary/80">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to dashboard
        </Link>
        <div className="mb-8 flex items-center gap-3">
          <Users className="h-7 w-7 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Our Members</h1>
            <p className="text-muted-foreground">Meet the people in our community.</p>
          </div>
        </div>

        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or address…"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="pl-10"
            aria-label="Search members by name or address"
          />
        </div>

        {loading ? <p className="py-12 text-center text-muted-foreground">Loading members…</p> : null}
        {error ? <p className="py-12 text-center text-destructive">{error}</p> : null}
        {!loading && !error && filteredMembers.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            {members.length === 0 ? "No members found yet." : "No members match your search."}
          </p>
        ) : null}
        {!loading && !error && filteredMembers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden border-border/70 bg-card shadow-soft transition-shadow hover:shadow-divine">
                <div className="aspect-square w-full overflow-hidden bg-muted">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={`${member.name}'s profile`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl font-semibold text-muted-foreground">
                      {member.name?.charAt(0)?.toUpperCase() || "?"}
                    </div>
                  )}
                </div>
                <CardContent className="space-y-1 p-4">
                  <h2 className="truncate text-lg font-semibold">{member.name}</h2>
                  <p className="truncate text-sm text-muted-foreground">{member.address || "Address unavailable"}</p>
                  <p className="pt-2 text-xs text-muted-foreground">Member since {formatDate(member.memberSince)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null}
      </main>
    </div>
  );
}
