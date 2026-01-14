import type { RenderGroup } from "../ProjectPage"

export const SureshProject={
        title: "Mr. Suresh Jain Residence",
        overview:
          "A modern luxury 3BHK residence blending elegance, comfort, and functionality.",
        info: {
          client: "Mr. Suresh Jain",
          projectType: "Residential",
          location: "Bangalore",
          area: "1700 Sft",
          
        },
        renderGroups: [
          {
            id: 1,
            title: "Living, Dining & Kitchen",
            description:
              "A refined open-plan space designed in warm neutral tones with soft textures and elegant wood finishes. The living area feels calm and inviting, seamlessly flowing into the dining and kitchen zones for a spacious, clutter-free experience. Subtle lighting, modern furniture, and balanced proportions create a timeless yet contemporary interior.",
            images: [{ src: "/images/sul11.webp" },
                     { src: "/images/sul2.webp"},
                     { src: "/images/sul3.webp"},
                     { src: "/images/sul4.webp"},
                     { src: "/images/sul5.webp"},
                     
                     

            ],
          },
          {
            id: 2,
            title: "Master Bedroom",
            description:
              "A calm and elegant bedroom finished in soft neutral tones, featuring a plush upholstered bed with warm integrated lighting. Clean-lined wardrobes and subtle textures create a cozy yet modern retreat.",
            images: [{ src: "/images/sub1.webp" },
                     { src: "/images/sub2.webp" },
                     { src: "/images/sub3.webp" },
                     { src: "/images/sub4.webp" },
                    ],
          },
          {
            id: 3,
            title: "Son's Bedroom",
            description:
              "A warm and modern bedroom designed with soft earthy tones and playful curved details. The cozy bed, smart built-in storage, and compact study elements create a comfortable, functional space that feels calm, youthful, and inviting.",
            images: [{ src: "/images/sc1.webp" },
                     { src: "/images/sc2.webp"},
                     { src: "/images/sc3.webp"},
                     { src: "/images/sc4.webp"}, 
                     ],
          },

          {
            id: 4,
            title: " Parents Bedroom",
            description:
              "A calm and elegant bedroom designed with soft neutral tones, clean wall paneling, and warm ambient lighting. The upholstered bed, minimal décor, and seamless wardrobe integration create a refined yet comfortable space, ideal for relaxation and everyday living",
            images: [{ src: "/images/sp1.webp" },
                     { src: "/images/sp2.webp"},
                     { src: "/images/sp3.webp"},
                     
                     ],
          },
          
        ] as RenderGroup[],
      }