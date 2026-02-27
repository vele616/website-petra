export interface ArtworkItem {
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