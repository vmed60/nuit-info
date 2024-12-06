"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {};

const LearnPage: React.FC<Props> = () => {
  const [score, setScore] = useState<number>(() => {
    // Retrieve score from local storage or initialize to 0
    const storedScore = localStorage.getItem("oceanAppScore");
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  const [contentIndex, setContentIndex] = useState<number>(0);

  const content = [
    {
      title: "The Ocean as Lungs of the Planet",
      description:
        "The ocean produces over 50% of the world's oxygen, similar to how lungs supply oxygen to the body.",
      image: "/images/ocean-lungs.jpg",
    },
    {
      title: "The Circulatory System of the Ocean",
      description:
        "Ocean currents act like arteries and veins, transporting nutrients and regulating temperature globally.",
      image: "/images/ocean-circulation.jpg",
    },
    {
      title: "The Ocean’s Skin: Coral Reefs",
      description:
        "Coral reefs, like skin, protect the ocean and absorb harmful elements while supporting biodiversity.",
      image: "/images/coral-reefs.jpg",
    },
  ];

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    localStorage.setItem("oceanAppScore", newScore.toString());
    setContentIndex((prev) => (prev + 1) % content.length);
  };

  const getAvatarMood = (): string => {
    if (score < 3) return "😐"; // Neutral
    if (score < 6) return "😊"; // Happy
    return "🌟"; // Very Happy
  };

  useEffect(() => {
    // Synchronize local storage changes on score update
    localStorage.setItem("oceanAppScore", score.toString());
  }, [score]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Explore Ocean-Human Parallels
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Discover how the human body and ocean systems mirror each other, and learn how to take meaningful action to preserve the planet.
        </p>
      </header>

      {/* Avatar and Score Section */}
      <div className="flex items-center justify-center mb-12">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=Ocean+Hero&background=random`}
            alt="Avatar"
          />
          <AvatarFallback>{getAvatarMood()}</AvatarFallback>
        </Avatar>
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-blue-900">Your Score: {score}</h2>
          <p className="text-blue-700">Progress by learning and exploring the content!</p>
        </div>
      </div>

      {/* Content Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-800">
            {content[contentIndex].title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={content[contentIndex].image}
            alt={content[contentIndex].title}
            className="rounded-lg mb-6 w-full h-auto object-cover shadow-lg"
          />
          <p className="text-blue-700 text-lg">{content[contentIndex].description}</p>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="text-center">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700"
          onClick={increaseScore}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default LearnPage;
