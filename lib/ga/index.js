export const pageview = (url) => {
  window.gtag("config", "G-MY9YZ2S6QR", {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
