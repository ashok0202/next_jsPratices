import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Package2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onProfileClick?: () => void;
}

const Navbar = ({ cartItemCount = 0, onCartClick, onProfileClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-nav-background border-b border-nav-border shadow-nav backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
              <Package2 className="w-6 h-6 text-primary-foreground bg-amber-700" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text p-10">
              Redux Tool kit
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onProfileClick}
              className="hidden md:flex"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative"
            >
             <a href="/cart"> <ShoppingCart className="w-5 h-5" /></a>
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 bg-cart-badge text-cart-badge-foreground min-w-[20px] h-5 flex items-center justify-center text-xs font-bold px-1.5"
                >
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="pt-4 pb-2 space-y-2">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>

            {/* Mobile Navigation Links */}
            {navigationLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-left"
                asChild
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}

            {/* Mobile Action Buttons */}
            <div className="flex space-x-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="sm" className="flex-1" onClick={onProfileClick}>
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;