import type { RenderGroup } from "../ProjectPage";

export const niteshProject = {
  title: "Mr. Nitesh Malani Residence",
  overview: "",
  info: {
          client: "Mr. Nitesh Malani",
          projectType: "Residential",
          location: "Bangalore",
          area: "1500 Sft",
         
        },
  renderGroups: [
    {
      id: 1,
      title: "Living, Dining & Kitchen",
      description: "A seamless open-plan living, dining, and kitchen space with polished marble floors, warm neutrals, and clean architectural detailing, creating an elegant and contemporary atmosphere.",
      images: [
        { src: "/images/ml1.webp" },
        { src: "/images/ml2.webp" },
        { src: "/images/ml3.webp" },
        { src: "/images/ml4.webp" },
        { src: "/images/ml5.webp" },
        { src: "/images/ml6.webp" },
        { src: "/images/ml7.webp" },
        { src: "/images/ml8.webp" },
        { src: "/images/ml9.webp" },
        { src: "/images/ml11.webp"},
        { src: "/images/ml10.webp" },
        { src: "/images/ml12.webp" },
       
      ],
    },
    {
      id: 2,
      title: "Master Bedroom",
      description: "A restrained master bedroom defined by balanced proportions, layered lighting, and a seamlessly integrated walk-in wardrobe—crafted for quiet luxury and timeless comfort.",
      images: [
        { src: "/images/mm1.webp" },
        { src: "/images/mm2.webp" },
        { src: "/images/mm3.webp" },
        { src: "/images/mm4.webp" },
        { src: "/images/mm5.webp" },
        { src: "/images/mm6.webp" },
        { src: "/images/mm7.webp" },
      ],
    },
    {
      id: 3,
      title: "Daughter's Bedroom",
      description: "A softly composed bedroom defined by gentle curves, warm materials, and a calm neutral palette—designed for comfort, clarity, and timeless appeal.",
      images: [
        { src: "/images/md.webp" },
        { src: "/images/md2.webp" },
    
      ],
    },
    
  ] as RenderGroup[],
};
