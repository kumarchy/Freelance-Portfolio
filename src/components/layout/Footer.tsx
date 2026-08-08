export const Footer = () => {
  return (
    <footer className="border-t border-divider py-16 px-6 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-heading font-bold text-text-primary tracking-tighter">
              LAMPHU<span className="text-emerald-primary">X</span>
            </span>
            <p className="text-text-secondary text-sm mt-4 max-w-xs leading-relaxed">
              Helping businesses automate workflows, build intelligent software, and streamline operations with AI-powered solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "Process", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-emerald-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:chaudharykumar228@gmail.com" className="text-sm text-text-secondary hover:text-emerald-primary transition-colors">
                  chaudharykumar228@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-emerald-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-emerald-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-divider pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} LamphuX. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
};