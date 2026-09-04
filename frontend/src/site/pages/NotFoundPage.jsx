import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFoundPage = () => {
  return (
    <section className="page-section">
      <SEO title="Page Not Found – RescueNet360" description="The page you requested is unavailable." path="" />
      <div className="wrap">
        <div className="surface-card border border-white/15 bg-white/5 p-8 text-center">
          <img
            src="/images/marketing/404-mascot.jpg"
            alt="A curious puppy and kitten looking up"
            className="w-40 h-40 mx-auto mb-6 object-contain"
            loading="lazy"
          />
          <p className="kicker">Not Found</p>
          <h1 className="font-display text-4xl font-extrabold text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[#c5d5ea]">
            The page you requested is unavailable. Use the navigation to return to a supported path.
          </p>
          <Link to="/" className="btn-primary mt-6">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
};
