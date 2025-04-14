
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-7xl font-display font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="flex items-center gap-2">
          <Link to="/">
            <Home size={18} /> Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
