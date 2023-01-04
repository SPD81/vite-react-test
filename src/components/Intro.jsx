import React from "react";
import pozaPortret from "/assets/pozaPortret.webp";

function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-3">
        <img
          className="max-w-[65%] max-h-[65%] rounded-full"
          src={pozaPortret}
          alt="poza"
        />
      </div>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Ionel George Zambrovici
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Cabinet individual de avocat
        </p>

        <p className="text-sm max-w-xl mb-6 font-bold">
          Our services fall into 3 key areas: Identify, Grow & Protect. These
          principles apply across many practice areas including: IP, Sport,
          Tech, Fashion, and Crypto. We exercise our technical expertise and
          commercial understanding across all areas, in order to solve problems
          and make deals happen.{" "}
          <a
            href="#"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-1 decoration-red-500"
          >
            av. Ionel George Zambrovici
          </a>{" "}
          <br />
          Legal expertise is, of course, crucial to understanding litigation.
          But strategy is the key to knowing how and when to implement it. Our
          combination of technical skill and front-line experience means we
          represent our clients with resilience and determination, protecting
          their interests and resisting any challenge. .
        </p>
      </div>
    </>
  );
}

export default Intro;
