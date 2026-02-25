const Footer = () => (
  <footer className="py-12 border-t border-border/50 bg-background">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-1 mb-4">
        <span className="font-serif text-xl font-bold tracking-wider text-foreground">GLOSS</span>
        <span className="font-serif text-xl font-medium tracking-wider text-primary">MEDIA</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Neuroinclusive social media strategy & mentorship.
      </p>
      <p className="text-xs text-muted-foreground mt-4">
        © {new Date().getFullYear()} GLOSS MEDIA. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
