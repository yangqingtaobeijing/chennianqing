import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: '首页', path: '/' },
    { name: '团建业务', path: '/team-building' },
    { name: '徒步路线', path: '/route-details' }, // Linking to the provided route details page
    { name: '关于我们', path: '/about' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cloud-white dark:bg-background shadow-sm w-full transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-16 w-full max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt="北京趁年轻户外运动"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold font-headline-md text-vibrant-orange dark:text-inverse-primary hidden md:block">
            北京趁年轻户外运动
          </span>
          <span className="text-xl font-bold font-headline-md text-vibrant-orange dark:text-inverse-primary block md:hidden">
            趁年轻户外
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-label-bold text-sm tracking-wide transition-colors duration-200 block py-2 ${
                    isActive
                      ? 'text-vibrant-orange dark:text-inverse-primary border-b-2 border-vibrant-orange pb-1 transform translate-y-0.5'
                      : 'text-slate-gray dark:text-on-surface-variant hover:text-vibrant-orange'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Trailing Action */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:flex items-center justify-center h-12 px-6 rounded bg-vibrant-orange text-cloud-white font-label-bold text-sm hover:bg-surface-tint transition-colors duration-200 shadow-md shadow-vibrant-orange/10 transform hover:-translate-y-0.5">
            立即咨询
          </Link>
          
          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-on-surface hover:text-vibrant-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
{/* Mobile Menu (simplified dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cloud-white border-t border-surface-variant px-4 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block font-label-bold text-slate-gray text-base py-2 hover:text-vibrant-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4 flex items-center justify-center h-12 px-6 rounded bg-vibrant-orange text-cloud-white font-label-bold text-sm">
            立即咨询
          </Link>
        </div>
      )}
    </nav>
  );
}
