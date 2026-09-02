'use client'
import React, { useState } from 'react'

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Programming Hero",
      date: "2024",
      pdf: "/certificate/certificate.pdf",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 animate-fade-in">
        My <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Certificate</span>
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Achievements I&apos;m proud of
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer w-72 rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* PDF preview */}
            <div className="relative w-full h-64 overflow-hidden bg-gray-100 pointer-events-none">
              <iframe
                src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                title={cert.title}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg transition-opacity duration-300 flex items-center gap-2">
                  🔍 View Certificate
                </span>
              </div>
            </div>

            <div className="p-4 text-center bg-[linear-gradient(90deg,rgba(214,161,247,1)_0%,rgba(204,95,237,1)_35%,rgba(138,12,176,1)_100%)]">
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <p className="text-sm text-white">{cert.issuer} &middot; {cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(248,150,248,0.274)] backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-xl w-full max-w-3xl h-[85vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition-colors"
            >
              ✕
            </button>
            <iframe
              src={selectedCert.pdf}
              className="w-full h-full"
              title={selectedCert.title}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificate