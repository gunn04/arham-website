import type { RenderGroup } from "../ProjectPage"

export const PrinceProject={
        title: "Mr. Prince Jain Residence",
        overview:
          "A modern luxury 3BHK residence blending elegance, comfort, and functionality.",
        info: {
          client: "Mr. Prince Jain",
          projectType: "Residential",
          location: "Bangalore",
          area: "1600 Sft",
          
        },
        renderGroups: [
          {
            id: 1,
            title: "Living, Dining & Kitchen",
            description:
              "A refined open-plan space designed in warm neutral tones with soft textures and elegant wood finishes. The living area feels calm and inviting, seamlessly flowing into the dining and kitchen zones for a spacious, clutter-free experience. Subtle lighting, modern furniture, and balanced proportions create a timeless yet contemporary interior.",
            images: [{ src: "/images/pl1.webp" },
                     { src: "/images/pl2.webp"},
                     { src: "/images/pl3.webp"},
                     { src: "/images/pl4.webp"},
                     { src: "/images/pl5.webp"},
                     { src: "/images/pl6.webp"},
                     { src: "/images/pl7.webp"},
                     { src: "/images/pl8.webp"},
                     { src: "/images/pk1.webp"},
                     { src: "/images/pk2.webp"},
                     { src: "/images/pk3.webp"},
                     { src: "/images/pk4.webp"},

            ],
          },
          {
            id: 2,
            title: "Master Bedroom",
            description:
              "A calm and elegant bedroom finished in soft neutral tones, featuring a plush upholstered bed with warm integrated lighting. Clean-lined wardrobes and subtle textures create a cozy yet modern retreat.",
            images: [{ src: "/images/pmb1.webp" },
                     { src: "/images/pmb2.webp"},
                     { src: "/images/pmb3.webp"},
                     { src: "/images/pmb4.webp"}],
          },
          {
            id: 3,
            title: "Kids Bedroom",
            description:
              "A warm and playful kids’ bedroom designed with soft earthy tones and smart built-in furniture. The bunk bed with curved detailing, integrated storage, and a compact study area creates a fun yet functional space with a calm, modern feel.",
            images: [{ src: "/images/Kids 2.webp" },
                     { src: "/images/Kids 3.webp"},
                     { src: "/images/Kids1.webp"},
                     { src: "/images/Kids 4.webp"},
                     ],
          },

          {
            id: 4,
            title: " Guest Bedroom",
            description:
              "A warm and welcoming guest bedroom featuring rich wood paneling and soft neutral finishes. The upholstered bed, subtle ambient lighting, and minimal décor create a calm, comfortable space with a refined modern feel.",
            images: [{ src: "/images/pg1.webp" },
                     { src: "/images/pg2.webp"},
                     { src: "/images/pg3.webp"},
                     { src: "/images/pg4.webp"},
                     ],
          },
          
        ] as RenderGroup[],
      }