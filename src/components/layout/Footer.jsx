import React from "react";
import { footerColumns } from "../../data/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-apple-gray text-apple-gray-dark text-xs border-t border-gray-300">
      <div className="max-w-wide mx-auto px-4 sm:px-6 py-4 border-b border-gray-300">
        <p>
          A little more time to say I love you. Shop{" "}
          <a href="#" className="text-apple-blue hover:underline">
            Mother&rsquo;s Day gifts
          </a>
          .
        </p>
      </div>

      <div className="max-w-wide mx-auto px-4 sm:px-6 py-8">
        <p className="pb-4 border-b border-gray-300">
          More ways to shop:{" "}
          <a href="#" className="text-apple-blue hover:underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-apple-blue hover:underline">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 py-8 border-b border-gray-300">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-apple-dark mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pt-4">
          <p>
            Copyright &copy; {new Date().getFullYear()} Apple Clone Inc. All rights
            reserved (demo project).
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
