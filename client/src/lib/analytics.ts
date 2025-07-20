// Google Analytics 4 utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Get the GA4 Measurement ID from environment variables
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Initialize Google Analytics 4
export const initGA = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    console.warn('GA4 Measurement ID not found or running on server');
    return;
  }

  // Don't load GA4 on localhost for development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.info('GA4 tracking disabled on localhost');
    return;
  }

  // Load the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    // Enable enhanced measurement features
    send_page_view: true,
    anonymize_ip: true, // GDPR compliance
  });

  console.info('GA4 initialized successfully');
};

// Track page views manually (useful for SPAs)
export const trackPageView = (path: string, title?: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track specific business events for Clover
export const trackBusinessEvent = {
  // Track when user expresses interest in a service package
  expressInterest: (packageName: string) => {
    trackEvent('express_interest', 'engagement', packageName);
  },

  // Track contact form submissions
  contactFormSubmit: () => {
    trackEvent('form_submit', 'contact', 'contact_form');
  },

  // Track navigation clicks
  navigationClick: (section: string) => {
    trackEvent('navigation_click', 'engagement', section);
  },

  // Track social media clicks
  socialMediaClick: (platform: string) => {
    trackEvent('social_click', 'engagement', platform);
  },

  // Track service interest
  serviceView: (serviceName: string) => {
    trackEvent('service_view', 'engagement', serviceName);
  },

  // Track pricing package views
  packageView: (packageName: string) => {
    trackEvent('package_view', 'pricing', packageName);
  },
};

// Track scroll depth for engagement metrics
export const trackScrollDepth = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  let maxScroll = 0;
  const trackDepth = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      trackEvent('scroll_depth', 'engagement', `${scrollPercent}%`);
    }
  };

  window.addEventListener('scroll', trackDepth, { passive: true });
}; 