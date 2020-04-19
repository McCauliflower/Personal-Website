import { artworks, codeProjects } from "@/models/images.ts"
import { Artwork, CodeProjects } from "@/types/types.interface"

// Simulate api calls
export function getImages(): Promise<Artwork[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res(artworks), 500)
  })
}

export function getCodeProjects(): Promise<CodeProjects[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res(codeProjects), 500)
  })
}
