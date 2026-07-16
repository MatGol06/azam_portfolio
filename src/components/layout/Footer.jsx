export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-border py-12 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold text-secondary tracking-tighter block mb-2">
            Azam<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted">
            Crafting premium digital experiences.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/MatGol06" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-secondary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/azam-tajuddin-87734b304" className="text-sm text-muted hover:text-secondary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:azamtajuddin05@gmail.com" className="text-sm text-muted hover:text-secondary transition-colors">
            Email
          </a>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {currentYear} Azam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
