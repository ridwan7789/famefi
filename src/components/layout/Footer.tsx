import { useTranslation } from "react-i18next";
import { Twitter } from "lucide-react";
import fameLogo from "@/assets/fame-logo.jpeg";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/20 bg-card/50 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={fameLogo} alt="FameFi" className="w-10 h-10 rounded-full" />
            <div>
              <span className="font-display text-lg font-bold gradient-text">FameFi</span>
              <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://docs.famefi.pro" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              {t("footer.docs")}
            </a>
            <a href="https://x.com/famefi" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
              <Twitter className="h-4 w-4" />
              X
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.disclaimer")}</p>
          <p className="text-sm text-muted-foreground mt-2">© 2024 FameFi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
