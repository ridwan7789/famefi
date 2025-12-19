import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Globe, Wallet } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import fameLogo from "@/assets/fame-logo.jpeg";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "zh", name: "中文" },
  { code: "ko", name: "한국어" },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const handleWalletConnect = () => {
    window.open("https://phantom.app/", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20 rounded-none">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={fameLogo} alt="FameFi" className="w-10 h-10 rounded-full" />
          <span className="font-display text-xl font-bold gradient-text">FameFi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            {t("nav.home")}
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            How it Works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground/80">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground/80"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button onClick={handleWalletConnect} className="btn-neon hidden sm:flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            {t("nav.connectWallet")}
          </Button>
        </div>
      </div>
    </header>
  );
}
