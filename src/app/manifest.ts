import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StudyScope – Career Guidance for Arts Students",
    short_name: "StudyScope",
    description:
      "India's leading career guidance platform for Arts students. Explore career options, government jobs, competitive exams, and study resources after 12th Arts, BA, and MA.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#6b1c2a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
