"use client";

import TrekCard from "@/components/TrekCard";

export default function Page() {
  return (
    <TrekCard
      title="Everest Base Camp"
      country="Nepal"
      duration="14 Days"
      route="Kathmandu to Lukla"
      rating={4.8}
      reviewCount={120}
      happyTrekkers="1.2k+"
      bestTime="Mar - May, Sep - Nov"
      stops={[
        { name: "Kathmandu", altitude: 1400 },
        { name: "Lukla", altitude: 2860 },
        { name: "Phakding", altitude: 2610 },
        { name: "Namche Bazaar", altitude: 3440, highlighted: true },
        { name: "Tengboche", altitude: 3860 },
        { name: "Lobuche", altitude: 4940 },
        { name: "Gorakshep", altitude: 5164 },
        { name: "Everest Base Camp", altitude: 5364, highlighted: true },
      ]}
      weather={{ condition: "Partly Cloudy", feelsLike: 10 }}
      onBookNow={() => alert("Booking clicked")}
    />
  );
}
