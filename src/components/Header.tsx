import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="relative bg-gradient-hero border-b shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/lovable-uploads/trust_logo.png"
            alt="Shri Sanatan Seva Foundation Sangh Logo"
            className="h-16 w-16 rounded-full shadow-divine"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              श्री सनातन सेवा फाउंडेशन संघ
            </h1>
            <p className="text-sm text-muted-foreground">Shri Sanatan Seva Foundation Sangh</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#events" className="text-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#join" className="text-foreground hover:text-primary transition-colors">
            Join Us
          </a>
          <a 
            href="mailto:tiwarimahendra1974@gmail.com" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Link to={user.role === "admin" ? "/admin" : "/user"}>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="default">Login</Button>
            </Link>
          )}
        </div>

        {/* Hamburger button for mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card shadow-lg absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col items-center py-4 space-y-3">
            <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Events
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Gallery
            </a>
            <a href="#join" className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Join Us
            </a>
            <a 
              href="mailto:tiwarimahendra1974@gmail.com" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
            {user ? (
              <>
                <span className="text-sm text-muted-foreground text-center">
                  Welcome, {user.email}
                </span>
                <Link to={user.role === "admin" ? "/admin" : "/user"} onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full" onClick={() => { logout(); setMobileOpen(false); }}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="default" className="w-full">Login</Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}