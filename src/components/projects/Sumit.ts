import type { RenderGroup } from "../ProjectPage"

export const sumitrankaProject={
        title: "Mr. Sachin Ranka Residence",
        overview:
          "",
        info: {
          client: "Mr. SumitRanka",
          projectType: "Residential",
          location: "Bangalore",
          area: "1500 Sft",
          
        },
        renderGroups: [
        {
            id: 1,
            title: "Living, Dining & Kitchen",
            description:
              "An elegant open-plan living and dining space designed with a harmonious palette of soft greys, warm neutrals, and subtle metallic accents. Sculpted wall art and a contemporary chandelier create visual interest, while plush seating and clean-lined furniture ensure comfort and functionality. Floor-to-ceiling curtains allow natural light to gently filter in, enhancing the airy ambience. The seamless flow between the living and dining zones reflects a perfect balance of luxury, modern design, and everyday practicality.",
            images: [{ src: "/images/d1.webp" },
                     { src: "/images/d2.webp"},
                     { src: "/images/d3.webp"},
                     { src: "/images/d4.webp"},
                     { src: "/images/d5.webp"},
                      { src: "/images/w6.webp"},
                      { src: "/images/w7.webp"},
                      { src: "/images/w8.webp"},
                      { src: "/images/w9.webp"},
                      { src: "/images/w10.webp"},
                      { src: "/images/w11.webp"},
                     
                     ],
          },
          {
            id: 2,
            title: "Master Bedroom",
            description:
              "A refined master bedroom styled with a sophisticated neutral palette, featuring a sculpted upholstered bed set against a textured vertical panel backdrop with integrated lighting. Warm wood finishes, soft drapery, and elegant curved furniture elements create a balanced blend of luxury and comfort. The space is further elevated by marble flooring, minimalist artwork, and thoughtfully curated accent pieces.",
            images: [{ src: "/images/ms-1.webp" },
                     { src: "/images/ms-2.webp"},
                     { src: "/images/ms-3.webp"},
                     { src: "/images/ms-4.webp"}],
          },
          {
            id: 3,
            title: "Son's Bedroom",
            description:
              "A modern bedroom defined by a sculptural accent wall, warm wood finishes, and soft neutral tones. Layered textures and ambient lighting create a calm, refined, and well-balanced living space.",
            images: [{ src: "/images/SSB1.webp" },
                     { src: "/images/SSB2.webp"},
                     { src: "/images/SSB3.webp"},
                     { src: "/images/SSB4.webp"},
                     ],
          },
          {
            id: 4,
            title: "Daughter's Bedroom",
            description:
              "A chic and contemporary daughter’s bedroom featuring a striking marble-inspired accent wall paired with soft neutral tones. The curved upholstered bed, layered textures, and custom marble ledge seating create a refined yet cozy atmosphere. Thoughtful lighting and subtle artistic elements enhance the space, giving it a stylish and modern feminine appeal.",
            images: [{ src: "/images/SDB1.webp" },
                     { src: "/images/SDB2.webp"},
                     { src: "/images/SDB3.webp"},
                     ],
          },
        ] as RenderGroup[],
      }