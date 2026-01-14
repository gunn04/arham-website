import type { RenderGroup } from "../ProjectPage";

export const prithvirajProject = {
  title: "Mr. Prithviraj Residence",
  overview: "A sophisticated corporate-style residence with warmth and luxury.",
  info: {
          client: "Mr. PrithviRaj",
          projectType: "Residential",
          location: "Bangalore",
          area: "1300 Sft",
          
        },
  renderGroups: [
    {
      id: 1,
      title: "Living, Dining & Kitchen",
      description: "A modern open-plan space with a sleek, minimal kitchen finished in muted tones and warm wood accents. Clean cabinetry, integrated lighting, and marble flooring create a seamless flow between the living, dining, and kitchen areas for a refined contemporary look.",
      images: [
        { src: "/images/pl-1.webp" },
        { src: "/images/pl-2.webp" },
        { src: "/images/pl-3.webp" },
        { src: "/images/pl-4.webp" },
        { src: "/images/pl-5.webp" },
        { src: "/images/pl-6.webp" },
        { src: "/images/pl-7.webp" },
        { src: "/images/pl-8.webp" },
      ],
    },
    {
      id: 2,
      title: "Master Bedroom",
      description: "A serene master bedroom designed with soft textures, warm neutrals, and subtle gold accents. The upholstered bed, textured accent wall, and clean-lined wardrobes create a calm, elegant space focused on comfort and simplicity.",
      images: [
        { src: "/images/pm1.webp" },
        { src: "/images/pm2.webp" },
        { src: "/images/pm3.webp" },
        { src: "/images/pm4.webp" },
      ],
    },
    {
      id: 3,
      title: "Son's Bedroom",
      description: "A calm and modern bedroom designed with soft neutral tones and clean-lined furniture. The upholstered bed, warm ambient lighting, and integrated storage create a comfortable and well-organized space with a soothing, contemporary feel. ",
      images: [
        { src: "/images/PSR1.webp" },
        { src: "/images/PSR2.webp" },
        { src: "/images/PSR3.webp" },
        { src: "/images/PSR4.webp" },
      ],
    },
    {
      id: 4,
      title: "Son's Bedroom",
      description: "A serene and thoughtfully designed bedroom featuring soft neutral tones and elegant textures. The upholstered bed is framed by a sculptural accent wall with arched detailing and warm vertical lighting, creating a calm yet sophisticated focal point. Subtle false ceiling lighting, minimalist décor, and layered fabrics enhance comfort while maintaining a modern aesthetic. Designed to feel balanced, peaceful, and effortlessly stylish—perfect for rest and relaxation.",
      images: [
        { src: "/images/rb1.webp" },
        { src: "/images/rb2.webp" },
        { src: "/images/rb3.webp" },
        { src: "/images/rb4.webp" },
      ],
    },
  ] as RenderGroup[],
};
