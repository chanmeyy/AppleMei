import React from "react";
import IphoneHero from "../../components/iphone/IphoneHero";
import IphoneLineup from "../../components/iphone/IphoneLineup";
import SectionHeading from "../../components/common/SectionHeading";
import InfoCard from "../../components/common/InfoCard";
import { whyApple, getToKnow } from "../../data/iphoneProducts";

export default function Iphone() {
  return (
    <main>
      <IphoneHero />
      <IphoneLineup />

      {/* Take a closer look banner */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Take a closer look." align="left" className="mb-6" />
        <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-700 h-64 sm:h-80 flex items-end p-6 text-white">
          <div>
            <p className="font-semibold text-lg">A Guided Tour of iPhone 17 Pro</p>
            <p className="text-sm text-white/80">Watch the film</p>
          </div>
        </div>
      </section>

      {/* Why Apple */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading
          title="Why Apple is the best place to buy iPhone."
          align="left"
          className="mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyApple.map((item, i) => (
            <InfoCard
              key={item.title}
              title={item.title}
              subtitle={item.desc}
              theme={i % 2 === 0 ? "light" : "dark"}
            />
          ))}
        </div>
      </section>

      {/* Get to know iPhone */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Get to know iPhone." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getToKnow.map((item) => (
            <InfoCard key={item.title} title={item.title} subtitle={item.subtitle} theme="dark" />
          ))}
        </div>
      </section>

      {/* Privacy banner */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-2xl bg-black text-white h-64 sm:h-72 flex flex-col items-center justify-center text-center gap-2 px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Privacy. That&rsquo;s iPhone.
          </h3>
          <p className="text-sm text-gray-300 max-w-sm">
            Safari. A browser that&rsquo;s actually private.
          </p>
        </div>
      </section>

      {/* iPhone essentials */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="iPhone essentials." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            title="iPhone accessories"
            subtitle="Explore cases, chargers, and more."
            theme="light"
            className="h-56"
          />
          <InfoCard
            title="AirTag"
            subtitle="Keep track of and find your items, all in one app."
            theme="dark"
            className="h-56"
          />
        </div>
      </section>

      {/* Significant others */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-10">
        <SectionHeading title="Significant others." align="left" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            title="iPhone and Mac"
            subtitle="They work together seamlessly, effortlessly."
            theme="light"
            className="h-48"
          />
          <InfoCard
            title="iPhone and Apple Watch"
            subtitle="Unlock, pay, and track — right from your wrist."
            theme="light"
            className="h-48"
          />
        </div>
      </section>
    </main>
  );
}
