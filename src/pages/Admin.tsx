import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserCheck, Search, Download, RefreshCw } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

type TrustMember = { 
  _id?: string; 
  name: string; 
  email: string; 
  mobile: string; 
  location: string; 
  gender: string; 
  createdAt: string; 
};

type User = { 
  id: string; 
  email: string; 
  name: string;
  gender: string;
  role: string; 
  createdAt: string;
};

export default function Admin() {
  const [trustMembers, setTrustMembers] = useState<TrustMember[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const loadData = async () => {
    if (!loading) setLoading(true);
    try {
      // Fetch registered users
      const res = await fetch("http://localhost:3000/api/users");
      if (!res.ok) throw new Error("Failed to load users data");
      const data = await res.json();
      if (data.users) {
        setUsers(data.users);
      }

      // Fetch trust members separately if needed
      const trustRes = await fetch("/api/admin/trust-members");
      if (trustRes.ok) {
        const trustData = await trustRes.json();
        if (trustData.trustMembers) {
          setTrustMembers(trustData.trustMembers);
        }
      }
    } catch (error) {
      console.error("Failed to load data:", error);
      // Don't clear existing data on error
      toast({
        title: "Error loading data",
        description: "Failed to refresh the data. Previous data is still shown.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.gender?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportUsers = () => {
    const csvContent = [
      ['Name', 'Email', 'Gender', 'Role', 'Created Date'].join(','),
      ...filteredUsers.map(user => [
        user.name || '',
        user.email,
        user.gender || '',
        user.role || 'user',
        formatDate(user.createdAt || '')
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.email}</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-lg">Loading...</div>
        </div>
      ) : (
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Manage Users ({users.length})
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              Trust Members ({trustMembers.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Registered Users
                    <Badge variant="secondary">{users.length}</Badge>
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button onClick={exportUsers} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {users.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No registered users found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="py-3 pr-4 font-medium">Name</th>
                          <th className="py-3 pr-4 font-medium">Email</th>
                          <th className="py-3 pr-4 font-medium">Gender</th>
                          <th className="py-3 pr-4 font-medium">Role</th>
                          <th className="py-3 pr-4 font-medium">Created</th>
                          <th className="py-3 pr-4 font-medium">Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id} className="border-b last:border-b-0 hover:bg-muted/50">
                            <td className="py-3 pr-4 font-medium">{user.name}</td>
                            <td className="py-3 pr-4">{user.email}</td>
                            <td className="py-3 pr-4">
                              <Badge variant="outline">{user.gender}</Badge>
                            </td>
                            <td className="py-3 pr-4">
                              <Badge variant={user.role === "admin" ? "default" : "outline"}>
                                {user.role}
                              </Badge>
                            </td>
                            <td className="py-3 pr-4 text-muted-foreground">
                              {formatDate(user.createdAt)}
                            </td>
                            <td className="py-3 pr-4 text-muted-foreground">
                              {formatDate(user.createdAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filteredUsers.length === 0 && searchTerm && (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No users found matching "{searchTerm}"</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Trust Members
                  <Badge variant="secondary">{trustMembers.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {trustMembers.length === 0 ? (
                  <div className="text-center py-12">
                    <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No trust members found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="py-3 pr-4 font-medium">Name</th>
                          <th className="py-3 pr-4 font-medium">Email</th>
                          <th className="py-3 pr-4 font-medium">Mobile</th>
                          <th className="py-3 pr-4 font-medium">Location</th>
                          <th className="py-3 pr-4 font-medium">Gender</th>
                          <th className="py-3 pr-4 font-medium">Joining Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trustMembers.map((member) => (
                          <tr key={member._id || member.email} className="border-b last:border-b-0 hover:bg-muted/50">
                            <td className="py-3 pr-4 font-medium">{member.name}</td>
                            <td className="py-3 pr-4">{member.email}</td>
                            <td className="py-3 pr-4">{member.mobile}</td>
                            <td className="py-3 pr-4">{member.location}</td>
                            <td className="py-3 pr-4">
                              <Badge variant="outline">{member.gender}</Badge>
                            </td>
                            <td className="py-3 pr-4 text-muted-foreground">
                              {formatDate(member.createdAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}



