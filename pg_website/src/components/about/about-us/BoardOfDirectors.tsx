'use client';
// src/components/about/BoardOfDirectors.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Linkedin, Mail, Star, Heart, Leaf, Sparkles, Target, Building, Users } from 'lucide-react';

type CoreValue = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type BoardMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  shortBio: string;
  fullBio: string;
  values?: CoreValue[];
  focus?: string[];
};

const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "MOSHIUR RAHMAN",
    position: "Managing Director",
    image: "/images/board/moshiur-rahman.jpeg",
    shortBio: "Started as an entrepreneur in 1979, transformed a printing factory into a diversified business empire.",
    fullBio: "I started my journey as an entrepreneur in the heart of a printing factory in 1979 with my father, Mizanur Rahman. As new industries began to evolve throughout Bangladesh, I pivoted towards the poultry industry in 1992 as an opportunity, capital, and vision amalgamated with what is Paragon today.",
    values: [
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Innovation",
        description: "We constantly push the boundaries of what is possible, using technology and creativity to solve problems and create value for our customers."
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Integrity",
        description: "We uphold the highest standards of honesty and ethics in all business dealings, treating our employees, customers, and partners with respect and fairness."
      },
      {
        icon: <Leaf className="w-6 h-6" />,
        title: "Sustainability",
        description: "We are committed to minimizing our environmental impact and promoting sustainable practices by implementing waste reduction and recycling programs in all our projects."
      }
    ]
  },
  {
    id: 2,
    name: "YASMIN RAHMAN",
    position: "Director",
    image: "/images/board/yasmin-rahman.jpg",
    shortBio: "Co-founder who started with 100 layer birds, now leads one of Bangladesh's largest poultry industries.",
    fullBio: "My husband and I started this company with a flock of 100-layer birds in my father's backyard. After 25 years of commitment to this industry, Paragon is now one of the largest poultry and animal feed industries in Bangladesh.",
    focus: [
      "Sustainable business practices",
      "Women entrepreneurship empowerment",
      "Creating inclusive business environments",
      "Supporting women's access to resources and networks"
    ]
  },
  {
    id: 3,
    name: "MEHRAN RAHMAN",
    position: "Director",
    image: "/images/board/mehran-rahman.jpeg",
    shortBio: "21st-century industrialist focused on sustainable agriculture and food security.",
    fullBio: "Paragon proudly serves our customers with high-quality agricultural products, industrial-grade packaging, and consumer foods and services. As an industrialist from the 21st century, my mission is to deliver sustainable solutions that contribute to the growth of our industries and ensure food security for our nation.",
    focus: [
      "Food security initiatives",
      "Sustainable agriculture",
      "Research and development",
      "Technology innovation",
    ]
  }
];

const BoardOfDirectors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-company-royal">Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries who have transformed Paragon from humble beginnings into 
            a leading conglomerate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <Dialog key={member.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-96">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-company-royal to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm leading-relaxed">{member.shortBio}</p>
                          <p className="text-company-orange mt-4 font-medium">Click to read more</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-company-royal mb-1">{member.name}</h3>
                        <p className="text-company-orange font-medium">{member.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-company-royal">
                    {member.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-company-orange mb-2">
                          {member.position}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {member.fullBio}
                        </p>
                      </div>

                      {member.values && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-company-royal">Core Values</h4>
                          {member.values.map((value, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="text-company-orange mt-1">
                                {value.icon}
                              </div>
                              <div>
                                <h5 className="font-medium text-company-royal">
                                  {value.title}
                                </h5>
                                <p className="text-gray-600 text-sm">
                                  {value.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {member.focus && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-company-royal">Key Focus Areas</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {member.focus.map((item, idx) => (
                              <div 
                                key={idx}
                                className="bg-gray-50 p-3 rounded-lg text-sm text-company-royal flex items-center space-x-2"
                              >
                                <Target className="w-4 h-4 text-company-orange" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;