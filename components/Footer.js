import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-3 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How it works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessibility</p>
        <p>This is clone site</p>
        <p>Referrals</p>
        <p>Developios</p>
        <p>Extras</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Become a host</p>
        <p>Why us</p>
        <p>Our services</p>
        <p>Physical locations</p>
        <p>Dummy data</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>Contact Us</p>
        <p>About us</p>
        <p>Offices</p>
        <p>News</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
