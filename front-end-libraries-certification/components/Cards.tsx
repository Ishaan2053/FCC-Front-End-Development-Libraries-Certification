import Link from "next/link";
import React from "react";

type Props = {};

function Cards({}: Props) {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            FreeCodeCamp Front End Libraries Certification Projects
          </h2>

          <p className="mt-4 text-yellow-200">
           This Page contains all the projects I made to earn the FreeCodeCamp Front End Libraries Certification.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-800/10"
            href="/services/digital-campaigns"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <h2 className="mt-4 text-xl font-bold text-white">25 + 5 Clock</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-800/10"
            href="/services/digital-campaigns"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="arcs"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>

            <h2 className="mt-4 text-xl font-bold text-white">Calculator</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-yellow-800/10"
            href="/services/digital-campaigns"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="arcs"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>

            <h2 className="mt-4 text-xl font-bold text-white">Random Quote Machine</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-800/10"
            href="/services/digital-campaigns"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="arcs"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>

            <h2 className="mt-4 text-xl font-bold text-white">Drum Machine</h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-800/10"
            href="/services/digital-campaigns"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="arcs"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>

            <h2 className="mt-4 text-xl font-bold text-white">Markdown Previewer</h2>

            <p className="mt-1 text-sm text-gray-300">
              A simple markdown previewer to show how your markdown code will look when rendered. 
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cards;
