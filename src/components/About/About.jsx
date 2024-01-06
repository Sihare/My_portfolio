import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Hello Guys!!! Nikhil sihare this side!!!
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Hello there! I'm Nikhil, a passionate and skilled web developer with a flair for creating stunning and functional websites. With a keen eye for detail and a commitment to delivering high-quality work, I bring a unique blend of creativity and technical expertise to every project.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Languages: Proficient in HTML, CSS, JavaScript, and experienced with modern frameworks such as React and Angular.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}