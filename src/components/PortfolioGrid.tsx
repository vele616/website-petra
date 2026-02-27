"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

interface ArtworkItem {
  src: string
  alt: string
  title: string
  medium: string
  year: string
  aspectRatio: "portrait" | "square" | "landscape"
  width: number
  height: number
  tileClass: string
}

const artworks: ArtworkItem[] = [
  {
    src: "/portrait-1.jpg",
    alt: "Ghostly figure emerging from deep black shadows with blue-teal skin tones",
    title: "Night Resident",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "portrait",
    width: 900,
    height: 1200,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-5 lg:-translate-y-2",
  },
  {
    src: "/portrait-2.jpg",
    alt: "Shadowed face half-hidden in darkness with cold blue-grey light",
    title: "Total Obscurity",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "square",
    width: 720,
    height: 720,
    tileClass: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-2 lg:row-span-3 translate-y-1",
  },
  {
    src: "/portrait-3.jpg",
    alt: "Cloaked figure standing in deep shadows with faint teal luminescence",
    title: "The Watcher",
    medium: "Oil on panel",
    year: "2023",
    aspectRatio: "portrait",
    width: 840,
    height: 1180,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-6 lg:translate-y-2",
  },
  {
    src: "/portrait-4.jpg",
    alt: "Multiple hands reaching through a pitch black void",
    title: "Grasping",
    medium: "Charcoal and ink on paper",
    year: "2023",
    aspectRatio: "square",
    width: 640,
    height: 640,
    tileClass: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-2 lg:row-span-3 -translate-y-1",
  },
  {
    src: "/portrait-5.jpg",
    alt: "Woman's silhouette dissolving into black smoke",
    title: "Dissolution",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "portrait",
    width: 780,
    height: 1080,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-5 lg:-translate-y-3",
  },
  {
    src: "/portrait-6.jpg",
    alt: "Close-up of closed eyes and lips in deep shadow",
    title: "Dormant",
    medium: "Oil on linen",
    year: "2024",
    aspectRatio: "portrait",
    width: 860,
    height: 1200,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-6 lg:translate-y-1",
  },
  {
    src: "/portrait-7.jpg",
    alt: "Abstract figure curled in fetal position in black void",
    title: "Void",
    medium: "Ink on paper",
    year: "2023",
    aspectRatio: "square",
    width: 700,
    height: 700,
    tileClass: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-2 lg:row-span-3",
  },
  {
    src: "/portrait-8.jpg",
    alt: "Spectral figure with arms outstretched in total darkness",
    title: "Ascension",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "portrait",
    width: 820,
    height: 1120,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-5 translate-y-2",
  },
  {
    src: "/portrait-8.jpg",
    alt: "Spectral figure with arms outstretched in total darkness",
    title: "Ascension",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "portrait",
    width: 820,
    height: 1120,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-5 translate-y-2",
  },
  {
    src: "/portrait-8.jpg",
    alt: "Spectral figure with arms outstretched in total darkness",
    title: "Ascension",
    medium: "Oil on canvas",
    year: "2024",
    aspectRatio: "portrait",
    width: 820,
    height: 1120,
    tileClass: "col-span-2 row-span-4 sm:col-span-2 sm:row-span-5 lg:col-span-2 lg:row-span-5 translate-y-2",
  },
  {
    src: "/portrait-7.jpg",
    alt: "Abstract figure curled in fetal position in black void",
    title: "Void",
    medium: "Ink on paper",
    year: "2023",
    aspectRatio: "square",
    width: 700,
    height: 700,
    tileClass: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-2 lg:row-span-3",
  },
  {
    src: "/portrait-7.jpg",
    alt: "Abstract figure curled in fetal position in black void",
    title: "Void",
    medium: "Ink on paper",
    year: "2023",
    aspectRatio: "square",
    width: 700,
    height: 700,
    tileClass: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-2 lg:row-span-3",
  },
]


export function PortfolioGrid() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null)

  return (
    <>
      <section className="mx-auto max-w-350 px-4 py-8 lg:px-10 lg:py-12">
        <div className="grid auto-rows-[90px] grid-cols-2 gap-4 sm:auto-rows-[120px] sm:grid-cols-4 lg:auto-rows-[140px] lg:grid-cols-6">
          {artworks.map((artwork, index) => (
            <button
              key={index}
              className={`group relative block w-full cursor-pointer overflow-hidden ${artwork.tileClass}`}
              onClick={() => setSelectedArtwork(artwork)}
              aria-label={`View ${artwork.title}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  width={artwork.width}
                  height={artwork.height}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4 text-left">
                  <p className="text-sm font-medium text-white">{artwork.title}</p>
                  <p className="text-xs text-white/70">{artwork.medium}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedArtwork(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Artwork: ${selectedArtwork.title}`}
        >
          <button
            className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white"
            onClick={() => setSelectedArtwork(null)}
            aria-label="Close lightbox"
          >
            <X className="h-7 w-7" />
          </button>
          <div
            className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-6 md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex-1 overflow-hidden">
              <Image
                src={selectedArtwork.src}
                alt={selectedArtwork.alt}
                width={900}
                height={1200}
                className="max-h-[75vh] w-auto object-contain"
                sizes="90vw"
              />
            </div>
            <div className="shrink-0 text-center md:w-48 md:text-left">
              <h2 className="text-xl font-medium text-white">{selectedArtwork.title}</h2>
              <p className="mt-1 text-sm text-white/60">{selectedArtwork.medium}</p>
              <p className="mt-0.5 text-sm text-white/60">{selectedArtwork.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
