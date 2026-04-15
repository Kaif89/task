import React from 'react';
import { ShoppingBag, Globe } from 'lucide-react';
import GithubIcon from './GithubIcon';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <ShoppingBag className="footer-brand-icon" size={18} />
          ShopExplorer
        </div>
        <div className="footer-links">
          <a
            href="https://fakestoreapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Globe size={14} style={{ marginRight: '0.3rem', verticalAlign: '-2px' }} />
            API
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <GithubIcon size={14} style={{ marginRight: '0.3rem', verticalAlign: '-2px' }} />
            GitHub
          </a>
        </div>
        <span className="footer-copy">
          &copy; {year} ShopExplorer. Built with React &amp; Vite.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
