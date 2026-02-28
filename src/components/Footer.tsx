import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Address */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold font-display mb-4 block">
              <span className="text-primary">ev</span>rise
            </span>
            <p className="text-sm opacity-70 leading-relaxed">
              EVRise Finance,<br />
              B1/632, 2nd Floor, Janakpuri,<br />
              New Delhi, 110058
            </p>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="font-bold font-display mb-4 text-sm uppercase tracking-wider opacity-60">Vehicles</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><a href="#vehicles" className="hover:text-primary transition-colors">2 Wheeler</a></li>
              <li><a href="#vehicles" className="hover:text-primary transition-colors">3 Wheeler (Cargo)</a></li>
              <li><a href="#vehicles" className="hover:text-primary transition-colors">3 Wheeler (Passenger)</a></li>
              <li><a href="#vehicles" className="hover:text-primary transition-colors">4-Wheeler (Passenger)</a></li>
              <li><a href="#vehicles" className="hover:text-primary transition-colors">4-Wheeler (Cargo)</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold font-display mb-4 text-sm uppercase tracking-wider opacity-60">About Us</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">SDG Commitment</Link></li>
              <li><a href="#blogs" className="hover:text-primary transition-colors">EVRise Finance in News & Awards</a></li>
            </ul>
            <h4 className="font-bold font-display mb-4 text-sm uppercase tracking-wider opacity-60 mt-8">Blogs</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/blogs" className="hover:text-primary transition-colors">EV Leasing vs. Buying</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">EV Leasing for Employees</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Why EV Fleet Leasing?</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Shared Mobility Models</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">The Role of EV Leasing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-display mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:easyloan@ev-rise.in" className="flex items-center gap-3 text-sm opacity-80 hover:text-primary transition-colors">
                <Mail size={16} />
                easyloan@ev-rise.in
              </a>
              <a href="tel:+919560143549" className="flex items-center gap-3 text-sm opacity-80 hover:text-primary transition-colors">
                <Phone size={16} />
                +919560143549
              </a>
              <a href="tel:+918826343549" className="flex items-center gap-3 text-sm opacity-80 hover:text-primary transition-colors">
                <Phone size={16} />
                +918826343549
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>Copyright 2024 by EVRISE FINANCE. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
