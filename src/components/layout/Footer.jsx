import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-border py-12 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold text-secondary tracking-tighter block mb-2 font-display">
            Azam<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted">
            Crafting premium digital experiences.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/MatGol06" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-secondary hover:text-primary transition-colors">
            <FaGithub size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/azam-tajuddin-87734b304" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-[#0A66C2] transition-colors">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:azamtajuddin05@gmail.com" className="flex items-center gap-2 text-sm text-muted hover:text-[#EA4335] transition-colors">
            <FaEnvelope size={18} /> Email
          </a>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {currentYear} Azam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
