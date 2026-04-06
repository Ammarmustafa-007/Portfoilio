import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        <p className="text-sm md:text-base text-muted-foreground font-medium">
          &copy; 2025 Ammar Mustafa
        </p>

     
        <p className="text-sm md:text-base text-muted-foreground italic">
          “Transforming imagination into innovation.”
        </p>

        
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
        >
          <ArrowUp size={22} />
        </a>
      </div>
    </footer>
  );
};
