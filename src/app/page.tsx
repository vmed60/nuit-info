"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  HeartPulseIcon,
  CloudRainIcon,
  ShieldIcon,
  PlayCircleIcon,
  TreePine,
  Globe,
  Microscope,
} from "lucide-react";
import { useState } from "react";
import TextLabel from "@/components/global/textLabel/TextLabel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage: NextPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const keyFeatures = [
    {
      icon: HeartPulseIcon,
      title: "Ocean as a Living Body",
      description:
        "Explore fascinating parallels between human anatomy and ocean ecosystems.",
    },
    {
      icon: CloudRainIcon,
      title: "Climate Regulation",
      description:
        "Understand how oceans maintain Earth's climate and absorb carbon dioxide.",
    },
    {
      icon: ShieldIcon,
      title: "Ecosystem Protection",
      description:
        "Learn about the critical importance of preserving marine environments.",
    },
  ];

  const insights = [
    {
      icon: Microscope,
      title: "Methodology",
      description:
        "A comparative analysis based on scientific data and ecological observations.",
    },
    {
      icon: TreePine,
      title: "Interdisciplinary Perspective",
      description:
        "Bridging marine biology, human physiology, and ecology knowledge.",
    },
    {
      icon: ShieldIcon,
      title: "Resilience",
      description:
        "Studying the mechanisms of protection and adaptation in living systems.",
    },
  ];

  const impactSections = [
    {
      icon: TreePine,
      title: "Conservation",
      points: [
        "Reduce plastics",
        "Preserve marine biodiversity",
        "Protect coastal habitats",
      ],
    },
    {
      icon: Globe,
      title: "Global Interconnection",
      points: [
        "Climate regulation",
        "Oxygen production",
        "Nutrient cycling",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Ocean Body - Exploring Ocean Ecosystems</title>
        <meta
          name="description"
          content="An immersive journey exploring the parallels between human body and ocean ecosystems."
        />
      </Head>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-blue-900">
            What if the Ocean Was a Living Body?
          </h1>
          <p className="text-xl text-blue-800 mb-10">
            Discover the incredible similarities between human physiology and
            ocean ecosystems.
          </p>

          <div
            className="relative max-w-3xl mx-auto mb-12 cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="bg-blue-600 text-white rounded-lg shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
              <img
                src="ocean.jpeg"
                alt="Ocean Exploration Video Thumbnail"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircleIcon className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="/comparisons">
              <p className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Explore Parallels
              </p>
            </Link>
            <Link href="/learn">
              <p className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <TextLabel
        title="Our Mission"
        description="To inspire collective awareness of ocean preservation by demonstrating the intricate connections between human health and ocean ecosystems."
        bgColor="bg-blue-50"
      />

      {/* Insights Section */}
      <section className="bg-white rounded-xl shadow-lg p-12 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Scientific Insights
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            A scientific approach to understanding the intricate parallels
            between oceanic and biological systems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="text-center">
              <insight.icon className="mx-auto w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {insight.title}
              </h3>
              <p className="text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Environmental Impact
        </h2>
        <p className="text-lg text-center text-blue-700 max-w-3xl mx-auto mb-10">
          Understanding how our actions impact ocean ecosystems and human
          health.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {impactSections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="mr-3 w-8 h-8 text-green-600" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {section.title === "Conservation"
                    ? "Every effort to protect the ocean protects our internal ecosystems."
                    : "Our health is deeply connected to the health of the oceans."}
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-white rounded-xl shadow-lg p-12">
  <h3 className="text-3xl font-bold text-blue-900 mb-6">
    Learn to Protect the Ocean
  </h3>
  <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
    Start your journey by understanding the practical steps you can take to safeguard our oceans and create a sustainable future.
  </p>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    {/* Item 1 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Reduce Plastic Use</h4>
      <p className="text-blue-700">
        Avoid single-use plastics and support initiatives for plastic-free packaging. Small changes make a big impact.
      </p>
    </div>
    {/* Item 2 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Support Marine Conservation</h4>
      <p className="text-blue-700">
        Donate to or volunteer with organizations working to restore marine ecosystems and protect biodiversity.
      </p>
    </div>
    {/* Item 3 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Make Sustainable Choices</h4>
      <p className="text-blue-700">
        Choose sustainably sourced seafood, and reduce your carbon footprint by adopting eco-friendly practices.
      </p>
    </div>
    {/* Item 4 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Educate Yourself</h4>
      <p className="text-blue-700">
        Learn more about the challenges facing our oceans through books, documentaries, and courses.
      </p>
    </div>
    {/* Item 5 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Advocate for Change</h4>
      <p className="text-blue-700">
        Speak up for ocean-friendly policies and join campaigns to demand action from policymakers and industries.
      </p>
    </div>
    {/* Item 6 */}
    <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-800 mb-4">Participate in Cleanups</h4>
      <p className="text-blue-700">
        Join local beach cleanups or organize your own. Every piece of trash removed helps protect marine life.
      </p>
    </div>
  </div>
  <Link href={'Learn'}>
  <Button size="lg" className="bg-green-600 hover:bg-green-700 mt-8">
    Start Learning Now
  </Button>
  </Link>
</section>


      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Ocean Exploration Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
