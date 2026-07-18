import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import InfoCard from "../common/InfoCard";
import Button from "../common/Button";
import macbookImg from "../../assets/images/macbook.svg";
import { macLineup, whyAppleCards, getToKnowCards } from "../../data/macProducts";

const TABS = ["All models", "Compare", "Guided tour"];

export default function MacGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Explore the lineup */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Explore the lineup." align="left" className="mb-4" />
        <div className="flex gap-6 border-b border-gray-200 mb-6 text-sm">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`pb-3 -mb-px border-b-2 transition-colors ${activeTab === i
                  ? "border-apple-dark text-apple-dark font-medium"
                  : "border-transparent text-apple-gray-dark hover:text-apple-dark"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {macLineup.map((mac) => (
            <div
              key={mac.id}
              className={`rounded-2xl p-6 flex flex-col bg-apple-gray ${mac.highlight ? "ring-2 ring-apple-blue" : ""
                }`}
            >
              <img
                src={mac.image}
                alt={mac.title}
                className="w-full h- object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-lg">{mac.title}</h3>
              <p className="text-sm text-apple-gray-dark mb-3 flex-1">
                {mac.tagline}
              </p>
              <div className="flex items-center justify-between">
                <Button variant="text" href="#">
                  Learn more
                </Button>
                <span className="text-sm text-apple-gray-dark">{mac.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Apple */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10 bg-white">
        <SectionHeading
          title="Why Apple is the best place to buy Mac."
          align="left"
          className="mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyAppleCards.map((item, i) => (
            <InfoCard key={item.title} title={item.title} subtitle={item.subtitle} theme={i % 2 === 0 ? "light" : "dark"} />
          ))}
        </div>
      </section>

      {/* Get to know Mac */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Get to know Mac." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getToKnowCards.map((item) => (
            <InfoCard key={item.title} title={item.title} subtitle={item.subtitle} theme="dark" />
          ))}
        </div>
      </section>

      {/* Switch to Mac */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Switch to Mac." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            title="Give us the old, save on the new."
            subtitle="With Apple Trade In, get credit toward a new Mac."
            theme="dark"
            className="h-56"
          />
          <InfoCard
            title="Mac does that."
            subtitle="See what makes switching easy."
            theme="light"
            className="h-56"
          />
        </div>
      </section>

      {/* Mac essentials */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Mac essentials." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            title="Mac accessories"
            subtitle="Explore keyboards, mice, and other essentials."
            theme="light"
            className="h-56"
          />
          <InfoCard
            title="Studio Display"
            subtitle="The 27-inch 5K Retina display beautifully paired with Mac."
            theme="dark"
            className="h-56"
          />
        </div>
      </section>
    </div>
  );
}
