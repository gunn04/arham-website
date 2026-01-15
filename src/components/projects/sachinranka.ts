import type { RenderGroup } from "../ProjectPage";

export const sachinrankaProject={
        title: "Mr. Sachin Ranka Residence",
        overview:
          "A modern luxury 3BHK residence blending elegance, comfort, and functionality.",
        info: {
          client: "Mr. Sachin Ranka",
          projectType: "Residential",
          location: "Bangalore",
          area: "1500 Sft",
          
        },
        renderGroups: [
          {
            id: 1,
            title: "Living, Dining & Kitchen",
            description:
              "Open-plan living with premium finishes and seamless spatial flow.",
            images: [{ src: "/images/sliv1.webp" },
                     { src: "/images/sliv2.webp"},
                     { src: "/images/sliv3.webp"},
                     { src: "/images/sliv4.webp"},
                     { src: "/images/slliv5.webp"},
                     { src: "/images/sliv6.webp"},
                     { src: "/images/sliv7.webp"},
                     { src: "/images/sliv8.webp"},
                     { src: "/images/sliv9.webp"},
                     { src: "/images/sliv10.webp"},
                     

            ],
          },
          {
            id: 2,
            title: "Master Bedroom",
            description:
              "A refined contemporary bedroom featuring a warm neutral palette, elegant marble flooring, and seamless wall paneling. The space is anchored by a plush platform bed with rich burgundy accents, complemented by bespoke side tables and sculptural décor. Sleek wardrobes, minimalistic lighting, and curated textures create a luxurious yet serene ambience throughout the room.",
            images: [{ src: "/images/ms-1.webp" },
                     { src: "/images/ms-2.webp"},
                     { src: "/images/ms-3.webp"},
                     { src: "/images/ms-4.webp"}],
          },
          {
            id: 3,
            title: "Son's Bedroom",
            description:
              "A modern, luxurious bedroom featuring a sculpted headboard wall, warm wood textures, soft beige tones, and elegant accent lighting. The space combines clean lines, marble flooring, and subtle decor to create a calm, sophisticated, and premium atmosphere",
            images: [{ src: "/images/ss1.webp" },
                     { src: "/images/ss2.webp"},
                     
          },
          {
            id: 4,
            title: "Daughter's Bedroom",
            description:
              "A serene and elegant daughter’s bedroom featuring a stunning marble-inspired accent wall with subtle lighting that adds depth and sophistication. The soft neutral palette, plush bedding, and curved furniture details create a warm, feminine ambience. Ample natural light, seamless storage, and a custom window-side ledge complete the space with both style and functionality",
            images: [{ src: "/images/Krishi1.webp" },
                     { src: "/images/Krishi2.webp"},
                     { src: "/images/Krishi3.webp"},
                     ],
          },
        ] as RenderGroup[],
      };


       