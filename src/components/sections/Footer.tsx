
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="full pb-16 text-sm text-slate-400 sm:pb-0 space-y-6">
      <div className="space-y-4 leading-relaxed">
        <p className="font-medium text-teal-500/80 italic border-l-2 border-teal-500/50 pl-4 py-1">
          `Architecting scalable solutions and building the future, one line of
          code at a time.`
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-800/60 text-xs text-slate-500">
        <p>&copy; {currentYear} All rights reserved.</p>
        <p>Rajshahi, Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
