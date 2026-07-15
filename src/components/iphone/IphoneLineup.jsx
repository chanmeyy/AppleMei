import React from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import iphoneImg from "../../assets/images/iphone.svg";
import { iphoneLineup } from "../../data/iphoneProducts";

export default function IphoneLineup() {
  return (
    <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
      <SectionHeading title="Explore the lineup." align="left" className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {iphoneLineup.map((phone) => (
          <div
            key={phone.id}
            className={`rounded-2xl p-6 flex flex-col bg-apple-gray ${
              phone.highlight ? "ring-2 ring-apple-blue" : ""
            }`}
          >
            <img
              src={iphoneImg}
              alt={phone.title}
              className="w-full h-40 object-contain mb-4 text-apple-dark"
            />
            <h3 className="font-semibold text-lg">{phone.title}</h3>
            <p className="text-sm text-apple-gray-dark mb-3 flex-1">
              {phone.tagline}
            </p>
            <div className="flex items-center justify-between">
              <Button variant="text" href="#">
                Learn more
              </Button>
              <span className="text-sm text-apple-gray-dark">{phone.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
