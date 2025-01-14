// src/lib/data/business-activities.ts
export type BusinessActivity = {
    id: string;
    slug: string;
    title: string;
    heroImage: string;
    heroStatement: string;
    description: string;
    businessOperations: {
      description: string;
      points: string[];
    };
    productCategory: {
      description: string;
      categories: {
        title: string;
        items: string[];
      }[];
    };
    businessUnits: string[];
    certificates?: {
      name: string;
      image: string;
      description: string;
    }[];
  };
  
  export const businessActivities: BusinessActivity[] = [
    {
        "id": "poultry",
        "slug": "poultry-farming",
        "title": "Poultry Farming",
        "heroImage": "/images/business/poultry-hero.jpg",
        "heroStatement": "Leading poultry farming operations across Bangladesh since 1993",
        "description": "Established in 1993, Paragon Poultry is one of the top three poultry farmers in Bangladesh. Our farms are strategically located across the country in remote areas, away from biological hazards, and pollution to facilitate the best environment for high-quality day-old poultry. We serve our farmers across the nation with day-old layers, broilers, and colour birds to be raised and sold to the national market. Furthermore, we also produce commercial layers and broilers for direct consumers to ensure safe, sustainable poultry meat and eggs. Paragon envisions and strives for sustainable production of protein to ensure food security for our nation.",
        "businessOperations": {
            "description": "Paragon has its Hatchery unit all over the country to make sure easy excess to every corner of Bangladesh. From hatchery to broiler and layer farm, Paragon has it all.",
            "points": [
                "Hatchery operations in 10 different locations with production capacity of over 30 lakh chicks per week",
                "Commercial Broiler unit capacity: 4,50,000 units of chicken",
                "02 Commercial layer units with production capacity of over 8 lakh eggs daily",
                "09 Parent Stock farms with stocking capacity of 14,00,000 birds",
                "Grand Parent Stock Unit in Moulvibazar, Sylhet"
            ]
        },
        "productCategory": {
            "description": "Paragon is always concerned about maintaining the highest quality and halal food. As paragon has its own production units in every part of poultry production, maintaining highest quality is very easy. The animal feed used during production is also from its own feed mills.",
            "categories": [
                {
                    "title": "Hatchery",
                    "items": [
                        "Day-old layers",
                        "Day-old broilers",
                        "Color birds"
                    ]
                },
                {
                    "title": "Commercial Production",
                    "items": [
                        "Broiler chicken",
                        "Layer eggs",
                        "Parent stock",
                        "Grand parent stock"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Hatchery Units (10 locations)",
            "Breeder Units (9 locations)",
            "Broiler Unit",
            "Layer Units (2 locations)",
            "GP Unit"
        ],
        "certificates": [] // No certificates were mentioned in the provided information
    },

    {
        id: 'processing',
        slug: 'processing-plant',
        title: 'Processing & Further Processing Plant",',
          heroImage: "/images/business/processing-hero.jpg",
          heroStatement: "Advanced Processing facilities ensuring highest quality of standards",
          description: "Paragon launched a poultry processing and further processing plant in 2015, producing ready-to-cook and ready-to-eat frozen foods. Our factory has ISO 22000, GMP, HACCP, and HALAL certifications. We proudly serve all multinational hotels, fast food brands like KFC and Pizza Hut, and local airlines. Furthermore, we also launched a collection of traditional and Western-inspired ready-to-eat/cook frozen products.",
          businessOperations: {
          description: "Paragon has two different plant for process and further process unit. Both the unit located in Ashulia, Savar. Paragon has its own delivery chain through which it is delivering its products to consumers end. Currently processing",
          points: [
              "Process Chicken production capacity: 1000 pcs birds dressed per hour.",
              "Further process production capacity: 5000 kg per day with different product categories."
          ]
          },
          productCategory: {
          description: "In Paragon Agro's process & further process unit, varieties of product are being processed in different form. Like",
          categories: [
              {
              title: "Processing unit",
              items: [
                  "Whole chicken (with and without skin)",
                  "Chicken breast boneless",
                  "Chicken drumstick",
                  "Chicken thigh",
                  "Chicken kima",
                  "Chicken wings"
              ]
              },
              {
              title: "Further process unit",
              items: [
                  "Chicken Nugget",
                  "Chicken Sausage",
                  "Chicken Burger Patty",
                  "Shami Kabab",
                  "Chicken Meatball",
                  "Chicken Strip",
                  "Chicken Wings",
                  "Popcorn Chicken",
                  "Chicken Lollipop",
                  "Chicken Spring Rolls",
                  "Chicken Drumlet",
                  "Ruti",
                  "Paratha",
                  "Dalpuri",
                  "Singara",
                  "Samusa",
                  "Different types of Momo"
              ]
              }
          ]
          },
          businessUnits: [
          "Process Plant",
          "Further Process Plant",
          "Dry Food unit"
          ],
          certificates: [
              {
                  name: "ISO 22000",
                  image: "/images/certificates/iso22000.png",
                  description: "Food Safety Management System"
              },
              {
                  name: "HACCP",
                  image: "/images/certificates/haccp.png",
                  description: "Hazard Analysis Critical Control Point"
              },
              {
                  name: "HALAL",
                  image: "/images/certificates/halal.png",
                  description: "Halal Certification"
              },
              {
                  name: "GMP",
                  image: "/images/certificates/gmp.png",
                  description: "Good Manufacturing Practice"
              }
          ]
      },

      {
        "id": "plastics",
        "slug": "plastic-bags",
        "title": "Plastic Woven Bags & FIBC",
        "heroImage": "/images/business/plastics-hero.jpg",
        "heroStatement": "Modern packaging solutions with global reach since 2007",
        "description": "In 2007, Paragon launched its first plastic woven bag manufacturing unit in the heart of Gazipur, Dhaka, manufacturing small woven bags, FIBCs, and poly bags. We are proud to serve clients across the globe to outperform the competition and stay ahead of the latest packaging innovation curve with the help of competitive pricing and modern innovation. Our factory is certified with QMS 9001 (quality management system), FSCC 22000 (Food grade), Halal certification, and SMETA. Furthermore, we strictly maintain a solid environmental policy as all our factories have a minimum to zero waste management system by recycling process waste and harvesting rainwater.",
        "businessOperations": {
            "description": "Paragon operates three major plastic manufacturing units in Baniarchala, Bhabanipur Gazipur, Dhaka, each specializing in different types of plastic packaging solutions.",
            "points": [
                "Unit-1: Production capacity of 50 Lac Pcs/Month with 500 employees",
                "Unit-2: Specialized in export-oriented Garments Poly Bag production with 50 employees",
                "Paragon Plastics Ltd: Advanced manufacturing facility with comprehensive testing laboratory"
            ]
        },
        "productCategory": {
            "description": "Our facilities produce a wide range of plastic packaging solutions catering to both local and international markets.",
            "categories": [
                {
                    "title": "Poly Bags",
                    "items": [
                        "PE poly",
                        "PE Garments poly",
                        "Hanger poly",
                        "Roll poly",
                        "Hope poly",
                        "Flower poly"
                    ]
                },
                {
                    "title": "Woven Bags",
                    "items": [
                        "Fertilizer bag",
                        "Fish bag",
                        "Poultry bag",
                        "Sugar bag",
                        "Textile bag",
                        "Transparent bag"
                    ]
                },
                {
                    "title": "Export Bags",
                    "items": [
                        "U shape cross corner bag",
                        "Standard big bag",
                        "Buffle bag",
                        "U shape bag",
                        "Cross corner bag",
                        "Single loop bag"
                    ]
                },
                {
                    "title": "Other Products",
                    "items": [
                        "Export quality twisted multifilament"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Paragon Plast Fiber Ltd (Unit-1)",
            "Paragon Plast Fiber Ltd (Unit-2)",
            "Paragon Plastics Ltd"
        ],
        "certificates": [
            {
                "name": "QMS 9001",
                "image": "/images/certificates/qms9001.png",
                "description": "Quality Management System"
            },
            {
                "name": "FSCC 22000",
                "image": "/images/certificates/fscc22000.png",
                "description": "Food Grade Certification"
            },
            {
                "name": "HALAL",
                "image": "/images/certificates/halal.png",
                "description": "Halal Certification"
            },
            {
                "name": "SMETA",
                "image": "/images/certificates/smeta.png",
                "description": "Sedex Members Ethical Trade Audit"
            }
        ]
    },

    {
        "id": "tea",
        "slug": "tea-estates",
        "title": "Tea Estates & Horticulture",
        "heroImage": "/images/business/tea-hero.jpg",
        "heroStatement": "Premium tea cultivation and modern horticulture since 2001",
        "description": "In 2001, Paragon took its first leap towards developing tea gardens by inheriting forest lands and gradually cultivating 800 acres of tea gardens. Producing BOP, PD, Dust & Exotic Tea which is mostly exported and a small share sold nationally supplied through retail & modern trade sales. The Horticulture wing was launched with two naturally ventilated greenhouse in 2017. Gerbera, one of the most popular flowers in the world along with exotic fruits and vegetables are being harvested in this project.",
        "businessOperations": {
            "description": "Paragon has four different plants for Tea cultivation. All units located in Sylhet. Paragon has its own delivery chain through which it is delivering its products to consumers end.",
            "points": [
                "Tea Packing Unit capacity: 100 ton production capacity per day",
                "800 acres of tea gardens under cultivation",
                "Two naturally ventilated greenhouses for horticulture"
            ]
        },
        "productCategory": {
            "description": "In Paragon's Tea and Horticulture division, various products are being processed in different forms.",
            "categories": [
                {
                    "title": "Tea Products",
                    "items": [
                        "Tea BOP",
                        "Tea PD",
                        "Tea CD",
                        "Tea DUST",
                        "Exotic Tea",
                        "Tea Bag"
                    ]
                },
                {
                    "title": "Horticulture Products",
                    "items": [
                        "Gerbera flowers",
                        "Exotic fruits",
                        "Vegetables"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Hazinagar Tea Estate, Mouluvibazar",
            "Rahmania Tea Estate, Mouluvibazar",
            "Fatehabad Tea Estate, Mouluvibazar",
            "Voban Tea Estate, Hobigong",
            "Horticulture Greenhouse Facility"
        ],
        "certificates": [] // No certificates were mentioned in the provided information
    },


    {
        "id": "retail",
        "slug": "retail",
        "title": "Bistro Cafe & Retail Shops",
        "heroImage": "/images/business/bistro-hero.jpg",
        "heroStatement": "Modern dining experience and convenient retail solutions",
        "description": "An intercontinental menu with an electronic environment to cater to all walks of life. Collecting flavors from around the world and reinventing a cuisine to best serve the locals, Paragon introduces Bistro Central. With a vision to expand throughout the country, cafe central has been introduced as sub-branches to hotels, lobbies and airports. Maintaining a fresh, clean and comfortable environment, Freshmart was introduced as a solution to your daily shopping needs. The business provides a franchise program to small owners to transform into a recognized brand and small business owners to invest in convenient shops in their locality.",
        "businessOperations": {
            "description": "Paragon operates a network of modern bistros and retail shops across key locations in Bangladesh, offering both dining and shopping experiences to customers.",
            "points": [
                "Bistro Central locations serve over 1000 customers daily across all branches",
                "Freshmart retail network spans 50+ locations nationwide",
                "Centralized kitchen facility ensuring consistent quality across all bistro locations",
                "Integrated supply chain with Paragon's food processing units for fresh and frozen items",
                "Franchise support system for retail shop owners including training and inventory management"
            ]
        },
        "productCategory": {
            "description": "Our bistros and retail shops offer a wide range of dining options and retail products.",
            "categories": [
                {
                    "title": "Bistro Menu",
                    "items": [
                        "Bengali Traditional Cuisine",
                        "Continental Dishes",
                        "Asian Fusion",
                        "Gourmet Burgers",
                        "Specialty Coffee & Beverages",
                        "Desserts & Pastries",
                        "Business Lunch Sets"
                    ]
                },
                {
                    "title": "Freshmart Retail Products",
                    "items": [
                        "Paragon Frozen Foods",
                        "Fresh Produce",
                        "Packaged Dry Foods",
                        "Daily Essentials",
                        "Household Items",
                        "Personal Care Products",
                        "Beverages & Snacks"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Bistro Central - Gulshan",
            "Bistro Central - Banani",
            "Bistro Central - Uttara",
            "Cafe Central - Airport Terminal 1",
            "Cafe Central - Hotel Westin",
            "Freshmart - Gulshan Avenue",
            "Freshmart - Dhanmondi",
            "Freshmart - Mirpur",
            "Freshmart Distribution Center",
            "Franchise Support Office"
        ],
        "certificates": [
            {
                "name": "HACCP",
                "image": "/images/certificates/haccp.png",
                "description": "Food Safety Management System"
            },
            {
                "name": "ISO 22000",
                "image": "/images/certificates/iso22000.png",
                "description": "Food Safety Management System"
            }
        ]
    },

    {
        "id": "solar",
        "slug": "renewable-energy",
        "title": "Renewable Energy",
        "heroImage": "/images/business/solar-hero.jpg",
        "heroStatement": "Powering a sustainable future through solar innovation",
        "description": "Sympa Solar Power Limited is a renewable energy company committed to providing clean and sustainable energy solutions. Our focus is on harnessing the power of the sun to create cost-effective and eco-friendly energy options for our customers. We specialize in designing, building, and operating solar power plants across the country. Our team of experts works closely with clients to provide customized solutions that meet their energy needs while reducing their carbon footprint. We are dedicated to creating a greener tomorrow by promoting the use of renewable energy sources. At Sympa Solar Power Limited, we believe in creating a brighter future for all.",
        "businessOperations": {
            "description": "Sympa Solar Power Limited, a joint venture company of Symbior Solar and Paragon Group, operates the Tetulia 8MW (AC) solar PV Power Plant in Tetulia, Panchaghar. The project operates under a 20-year PPA with the Power Development Board of Bangladesh.",
            "points": [
                "37.62 acres of solar plant area with 37,512 solar panels",
                "Total capacity of over 8MW with 96 inverters",
                "Average daily generation of 32 MWh",
                "Annual generation capacity of 11,580 MWh",
                "Dedicated maintenance team with 25-day cleaning cycle"
            ]
        },
        "productCategory": {
            "description": "Our solar power plant utilizes advanced technology and equipment to generate and distribute clean energy.",
            "categories": [
                {
                    "title": "Power Generation Systems",
                    "items": [
                        "PV modules (275Wp capacity)",
                        "90KW Inverters",
                        "AC combiner boxes",
                        "Power transformers",
                        "Static Var Generator (SVG)",
                        "Lightning Protection System (LPS)"
                    ]
                },
                {
                    "title": "Monitoring Systems",
                    "items": [
                        "Solar radiation measurement equipment",
                        "Dust and soil IQ measurement system",
                        "Pyranometer data recording",
                        "Generation monitoring software",
                        "Transformer monitoring system"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Tetulia Solar Power Plant - 8MW",
            "Solar Project Development Office",
            "Operations & Maintenance Division",
            "Technical Support Center",
            "Monitoring & Control Center",
            "Research & Development Unit"
        ],
        "certificates": [
            {
                "name": "ISO 14001",
                "image": "/images/certificates/iso14001.png",
                "description": "Environmental Management System"
            },
            {
                "name": "ISO 50001",
                "image": "/images/certificates/iso50001.png",
                "description": "Energy Management System"
            }
        ]
    },

    {
        "id": "feed",
        "slug": "feedmills",
        "title": "Feed Mills",
        "heroImage": "/images/business/feed-hero.jpg",
        "heroStatement": "Leading feed production ensuring food security since 1996",
        "description": "Paragon, is a leading brand in the national market for poultry, cattle, and marine life feed. It is by operation and customer base, one of the largest agro-based industries in Bangladesh. Paragon Group started its feed operations in the year 1996 producing high-quality animal feed to promote affordable and suitable poultry, fish, and cattle production ensuring national food security for Bangladesh.",
        "businessOperations": {
            "description": "Paragon Group runs 16 production lines across 6 strategic locations throughout Bangladesh, with plans for future expansion.",
            "points": [
                "Paragon Poultry Limited (Feed division) - Gazipur",
                "Denm Poultry Limited (Feed division) - Kapasia",
                "Paragon Feed Limited (Unit-2) - Savar",
                "Jessore Feed Limited - Jessore",
                "Chittagong Feed Limited - Chattogram",
                "Rangpur Poultry Limited (Feed division) - Rangpur"
            ]
        },
        "productCategory": {
            "description": "Paragon is producing wide range of feed in Poultry, Fish and Cattle industry.",
            "categories": [
                {
                    "title": "Poultry Feed",
                    "items": [
                        "Boiler feed",
                        "Layer feed",
                        "Sonali feed",
                        "Duck Feed",
                        "Quail Feed"
                    ]
                },
                {
                    "title": "Aquaculture Feed",
                    "items": [
                        "Flouting fish feed",
                        "Sinking fish feed",
                        "Shrimp Feed"
                    ]
                },
                {
                    "title": "Cattle Feed",
                    "items": [
                        "Lactating feed",
                        "Fattening feed"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Paragon Poultry Limited (Feed division), Gazipur",
            "Denm Poultry Limited (Feed division), Kapasia",
            "Paragon Feed Limited (Unit-2), Savar",
            "Jessore Feed Limited, Jessore",
            "Chittagong Feed Limited, Chattogram",
            "Rangpur Poultry Limited (Feed division), Rangpur"
        ],
        "certificates": [
            {
                "name": "ISO 22000",
                "image": "/images/certificates/iso22000.png",
                "description": "Food Safety Management System"
            },
            {
                "name": "HACCP",
                "image": "/images/certificates/haccp.png",
                "description": "Hazard Analysis Critical Control Point"
            }
        ]
    },

    {
        "id": "consumer",
        "slug": "consumer-foods",
        "title": "Consumer Foods",
        "heroImage": "/images/business/consumer-hero.jpg",
        "heroStatement": "Quality processed foods meeting international standards",
        "description": "Consumer food division under Paragon Agro Limited, a subsidiary of the Paragon Group, produces and distributes high-quality animal feed. Utilizing modern technologies and sustainable practices, the company is committed to providing safe, healthy, and nutritious feed that meets international standards. With a skilled team of professionals, Paragon Agro offers reliable and efficient service to its customers worldwide. As part of the Paragon Group, the company has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and animal welfare, Paragon Agro is positioned for continued growth and success in the global agribusiness industry. Our factory has ISO 22000, GMP, HACCP, and HALAL certifications. We proudly serve all multinational hotels, fast food brands like KFC and Pizza Hut, and local airlines. Furthermore, we also launched a collection of traditional and Western-inspired ready-to-eat/cook frozen products.",
        "businessOperations": {
            "description": "Paragon has three different plants for process, further process & dry food unit. All units located in Ashulia, Savar. Paragon has its own delivery chain through which it is delivering its products to consumers end.",
            "points": [
                "Process Chicken production capacity: 1000 pcs birds dressed per hour",
                "Further process production capacity: 5000 kg per day with different product categories",
                "Dry food production capacity: 5000 kg per day with different product categories"
            ]
        },
        "productCategory": {
            "description": "In Paragon Agro's process, further process, and dry food units, varieties of products are being processed in different forms.",
            "categories": [
                {
                    "title": "Processing Unit",
                    "items": [
                        "Whole chicken (with and without skin)",
                        "Chicken breast boneless",
                        "Chicken leg boneless",
                        "Chicken drumstick",
                        "Chicken thigh",
                        "Chicken wings"
                    ]
                },
                {
                    "title": "Further Process Unit",
                    "items": [
                        "Chicken Nugget",
                        "Chicken Sausage",
                        "Beef Sausage",
                        "Chicken Burger Patty",
                        "Shami Kabab",
                        "Chicken Meatball",
                        "Chicken Ball",
                        "Chicken Strip",
                        "Chicken Hot & Spicy Wings",
                        "Chicken Popcorn",
                        "Chicken Lollipop",
                        "Chicken Spring Roll",
                        "Red Wheat Ruti",
                        "Paratha",
                        "Dalpuri",
                        "Chicken Samusa",
                        "Crispy chicken",
                        "Spicy chicken",
                        "Different types of Momo"
                    ]
                },
                {
                    "title": "Dry Food Unit",
                    "items": [
                        "Plain Cake",
                        "Muffin Cake",
                        "Cup Cake",
                        "Different flavored Cookies",
                        "Toast biscuits",
                        "Chanachur",
                        "Motor Bhaja",
                        "Dal Bhaja",
                        "Sweets",
                        "Pastry Cake",
                        "Special cookies"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Process Plant",
            "Further Process Plant",
            "Dry Food Unit"
        ],
        "certificates": [
            {
                "name": "ISO 22000",
                "image": "/images/certificates/iso22000.png",
                "description": "Food Safety Management System"
            },
            {
                "name": "GMP",
                "image": "/images/certificates/gmp.png",
                "description": "Good Manufacturing Practice"
            },
            {
                "name": "HACCP",
                "image": "/images/certificates/haccp.png",
                "description": "Hazard Analysis Critical Control Point"
            },
            {
                "name": "HALAL",
                "image": "/images/certificates/halal.png",
                "description": "Halal Certification"
            }
        ]
    },


    {
        "id": "hatchery",
        "slug": "fish-hatchery",
        "title": "Fish Hatchery",
        "heroImage": "/images/business/hatchery-hero.jpg",
        "heroStatement": "Sustainable aquaculture through advanced breeding technology",
        "description": "A fish hatchery is a place for artificial breeding, hatching, and rearing through the early life stages of animals finfish and shellfish in particular. Hatcheries produce larval and juvenile fish, shellfish, and crustaceans, primarily to support the aquaculture industry where they are transferred to on-growing systems, such as fish farms, to reach harvest size. Some species that are commonly raised in hatcheries include Pacific oysters, shrimp, Indian prawns, salmon, tilapia and scallops.",
        "businessOperations": {
            "description": "Hatcheries produce larval and juvenile fish and shellfish for transferral to aquaculture facilities where they are 'on-grown' to reach harvest size.",
            "points": [
                "Year-round production capability through broodstock conditioning",
                "Advanced genetic improvement programs for enhanced yield",
                "Specialized breeding and nursery facilities",
                "Sustainable alternative to wild-caught juveniles",
                "State-of-the-art water quality management systems"
            ]
        },
        "productCategory": {
            "description": "Our hatchery specializes in breeding and rearing various aquatic species through different life stages.",
            "categories": [
                {
                    "title": "Fish Species",
                    "items": [
                        "Tilapia fingerlings",
                        "Salmon smolts",
                        "Carp fry",
                        "Catfish juveniles",
                        "Bass fingerlings"
                    ]
                },
                {
                    "title": "Shellfish Species",
                    "items": [
                        "Pacific oyster spat",
                        "Indian prawns postlarvae",
                        "Shrimp larvae",
                        "Scallop seeds",
                        "Mussel spat"
                    ]
                },
                {
                    "title": "Services",
                    "items": [
                        "Broodstock conditioning",
                        "Selective breeding programs",
                        "Genetic improvement services",
                        "Larval rearing",
                        "Technical consulting"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Main Hatchery Complex - Breeding Facility",
            "Nursery Division - Juvenile Rearing",
            "Broodstock Conditioning Center",
            "Research & Development Unit",
            "Quality Control Laboratory",
            "Live Feed Production Unit",
            "Water Treatment Facility",
            "Technical Training Center"
        ],
        "certificates": [
            {
                "name": "BAP",
                "image": "/images/certificates/bap.png",
                "description": "Best Aquaculture Practices Certification"
            },
            {
                "name": "ISO 14001",
                "image": "/images/certificates/iso14001.png",
                "description": "Environmental Management System"
            },
            {
                "name": "HACCP",
                "image": "/images/certificates/haccp.png",
                "description": "Hazard Analysis Critical Control Point"
            }
        ]
    },

    {
        "id": "fertilizer",
        "slug": "organic-fertilizer",
        "title": "Organic Fertilizer",
        "heroImage": "/images/business/fertilizer-hero.jpg",
        "heroStatement": "Sustainable farming solutions through organic waste conversion",
        "description": "With growth comes responsibility, In 2020 Paragon launched its first organic fertilizer project. Channeling all organic waste to this project Paragon takes another step toward to improve its ecological foot print with another environment friendly project. Paragon designed a organic fertilizer through technology which improves the soil texture, holds water longer, increase the bacterial and fungal activity with in the soil, improve the efficiency of nutrient used to produce more robust crops, facilitate slow release of nutrients in response to the dynamic needs of plants, boost the efficiency of water used by the crops, safe guard ecosystems by minimizing leaching and helps the soil to be more fertile for future crop.",
        "businessOperations": {
            "description": "Our organic fertilizer operation focuses on converting organic waste into sustainable farming solutions while maintaining ecological balance.",
            "points": [
                "Waste conversion capacity: 1000 tons per month",
                "Advanced composting technology implementation",
                "Integrated quality control and testing facility",
                "Research and development for formula optimization",
                "Environmental impact monitoring system"
            ]
        },
        "productCategory": {
            "description": "Our organic fertilizer products are designed to meet various agricultural needs while maintaining soil health.",
            "categories": [
                {
                    "title": "Compost Products",
                    "items": [
                        "Premium Compost Mix",
                        "Poultry Litter Compost",
                        "Green Waste Compost",
                        "Vermicompost",
                        "Bio-enriched Compost"
                    ]
                },
                {
                    "title": "Specialized Fertilizers",
                    "items": [
                        "Slow-release Organic Fertilizer",
                        "Liquid Bio-fertilizer",
                        "Organic Soil Conditioner",
                        "Micronutrient Enhanced Mix",
                        "Crop-specific Organic Blends"
                    ]
                },
                {
                    "title": "Agricultural Services",
                    "items": [
                        "Soil Testing",
                        "Fertilizer Program Design",
                        "Application Consultation",
                        "Organic Farming Support",
                        "Sustainable Practice Training"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Organic Waste Processing Center",
            "Composting Facility",
            "Quality Control Laboratory",
            "Research & Development Unit",
            "Bio-fertilizer Production Plant",
            "Environmental Monitoring Station",
            "Agricultural Training Center",
            "Product Development Lab"
        ],
        "certificates": [
            {
                "name": "Organic Certification",
                "image": "/images/certificates/organic.png",
                "description": "Certified Organic Production"
            },
            {
                "name": "ISO 14001",
                "image": "/images/certificates/iso14001.png",
                "description": "Environmental Management System"
            },
            {
                "name": "USDA Organic",
                "image": "/images/certificates/usda.png",
                "description": "USDA Organic Certification"
            }
        ]
    },

    {
        "id": "flourmill",
        "slug": "flour-mill",
        "title": "Flour Mill Limited",
        "heroImage": "/images/business/footwear-hero.jpg",
        "heroStatement": "Quality footwear manufacturing with global standards since 2018",
        "description": "Established in 2018, ParaSole Footwear limited is fully compliance factory regarding workforce as per Bangladesh government labor law. We develop footwear- from provided sketch or picture or concept. ParaSole assures product will meet customers standards as production team initiates production process by communicating with quality control, quality assurance and production planning. Our strong team confirms every order is handled with care and to be delivered on time.",
        "businessOperations": {
            "description": "Operating with 617 machines across multiple departments, our 105,826 sq ft facility maintains rigorous quality standards throughout the production process.",
            "points": [
                "Production capacity: 10,000 pairs/day (4-line production, single shift)",
                "Workforce: 1,324 skilled employees",
                "Production area: 47,900 sq ft",
                "Warehouse area: 17,800 sq ft",
                "Export Development Fund: USD 5.8 Million"
            ]
        },
        "productCategory": {
            "description": "ParaSole Footwear Ltd. is a Manufacturer and 100% Exporter of all kinds of Shoes, developing footwear from provided sketches, pictures, or concepts.",
            "categories": [
                {
                    "title": "Men's Collection",
                    "items": [
                        "Boots",
                        "Sandals",
                        "Running Shoes",
                        "Sports Shoes",
                        "Casual Shoes"
                    ]
                },
                {
                    "title": "Women's Collection",
                    "items": [
                        "Boots",
                        "Sandals",
                        "Running Shoes",
                        "Fashion Shoes",
                        "Casual Shoes"
                    ]
                },
                {
                    "title": "Kids' Collection",
                    "items": [
                        "Sandals",
                        "Running Shoes",
                        "Sports Shoes",
                        "Casual Shoes",
                        "Fashion Shoes"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Cutting & Preparation Department",
            "Printing & Lamination Department",
            "Stitching & Upper Making Department",
            "Lasting Department",
            "Gluing & Assembly Department",
            "Finishing Department",
            "Insole Section",
            "Store Department",
            "Laboratory Department"
        ],
        "certificates": [
            {
                "name": "ISO 9001",
                "image": "/images/certificates/iso9001.png",
                "description": "Quality Management System"
            },
            {
                "name": "BSCI",
                "image": "/images/certificates/bsci.png",
                "description": "Business Social Compliance Initiative"
            },
            {
                "name": "SEDEX",
                "image": "/images/certificates/sedex.png",
                "description": "Supplier Ethical Data Exchange"
            }
        ]
    },

    {
        "id": "footwear",
        "slug": "footwear",
        "title": "ParaSole Footwear Limited",
        "heroImage": "/images/business/footwear-hero.jpg",
        "heroStatement": "Quality footwear manufacturing with global standards since 2018",
        "description": "Established in 2018, ParaSole Footwear limited is fully compliance factory regarding workforce as per Bangladesh government labor law. We develop footwear- from provided sketch or picture or concept. ParaSole assures product will meet customers standards as production team initiates production process by communicating with quality control, quality assurance and production planning. Our strong team confirms every order is handled with care and to be delivered on time.",
        "businessOperations": {
            "description": "Operating with 617 machines across multiple departments, our 105,826 sq ft facility maintains rigorous quality standards throughout the production process.",
            "points": [
                "Production capacity: 10,000 pairs/day (4-line production, single shift)",
                "Workforce: 1,324 skilled employees",
                "Production area: 47,900 sq ft",
                "Warehouse area: 17,800 sq ft",
                "Export Development Fund: USD 5.8 Million"
            ]
        },
        "productCategory": {
            "description": "ParaSole Footwear Ltd. is a Manufacturer and 100% Exporter of all kinds of Shoes, developing footwear from provided sketches, pictures, or concepts.",
            "categories": [
                {
                    "title": "Men's Collection",
                    "items": [
                        "Boots",
                        "Sandals",
                        "Running Shoes",
                        "Sports Shoes",
                        "Casual Shoes"
                    ]
                },
                {
                    "title": "Women's Collection",
                    "items": [
                        "Boots",
                        "Sandals",
                        "Running Shoes",
                        "Fashion Shoes",
                        "Casual Shoes"
                    ]
                },
                {
                    "title": "Kids' Collection",
                    "items": [
                        "Sandals",
                        "Running Shoes",
                        "Sports Shoes",
                        "Casual Shoes",
                        "Fashion Shoes"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Cutting & Preparation Department",
            "Printing & Lamination Department",
            "Stitching & Upper Making Department",
            "Lasting Department",
            "Gluing & Assembly Department",
            "Finishing Department",
            "Insole Section",
            "Store Department",
            "Laboratory Department"
        ],
        "certificates": [
            {
                "name": "ISO 9001",
                "image": "/images/certificates/iso9001.png",
                "description": "Quality Management System"
            },
            {
                "name": "BSCI",
                "image": "/images/certificates/bsci.png",
                "description": "Business Social Compliance Initiative"
            },
            {
                "name": "SEDEX",
                "image": "/images/certificates/sedex.png",
                "description": "Supplier Ethical Data Exchange"
            }
        ]
    },

    {
        "id": "dairy",
        "slug": "dairy",
        "title": "Dairy Project",
        "heroImage": "/images/business/dairy-hero.jpg",
        "heroStatement": "Modern dairy solutions from farm to table since 2019",
        "description": "In 2019 Paragon launches its first dairy operation with an aim to produce pasteurizated milk, UHT milk, ghee, butter, cheese, yogurt and laban for the local market. To address the modern day dairy requirements Paragon engages from the grassroots by producing high quality feed, improving feeding management, maintaining overall rearing management, provide breeding technology, and produce dairy products.",
        "businessOperations": {
            "description": "Our dairy operation implements advanced milking technology and stringent quality control measures to ensure the highest quality dairy products.",
            "points": [
                "Automated cluster milking system with advanced sensing technology",
                "Comprehensive quality control and testing protocols",
                "Integrated cold chain management system",
                "Modern breeding and cattle management facilities",
                "State-of-the-art dairy processing plant"
            ]
        },
        "productCategory": {
            "description": "Our dairy facility produces a wide range of dairy products using modern processing technology.",
            "categories": [
                {
                    "title": "Liquid Dairy Products",
                    "items": [
                        "Pasteurized Milk",
                        "UHT Milk",
                        "Laban",
                        "Fresh Cream"
                    ]
                },
                {
                    "title": "Cultured Products",
                    "items": [
                        "Yogurt",
                        "Cheese",
                        "Flavored Yogurt Drinks"
                    ]
                },
                {
                    "title": "Dairy Fats",
                    "items": [
                        "Butter",
                        "Ghee",
                        "Cooking Cream"
                    ]
                }
            ]
        },
        "businessUnits": [
            "Dairy Farm Operations",
            "Milk Collection Center",
            "Quality Control Laboratory",
            "Processing Plant",
            "Cold Storage Facility",
            "Feed Production Unit",
            "Breeding Center",
            "Veterinary Care Unit",
            "Distribution Center"
        ],
        "certificates": [
            {
                "name": "ISO 22000",
                "image": "/images/certificates/iso22000.png",
                "description": "Food Safety Management System"
            },
            {
                "name": "HACCP",
                "image": "/images/certificates/haccp.png",
                "description": "Hazard Analysis Critical Control Point"
            },
            {
                "name": "GMP",
                "image": "/images/certificates/gmp.png",
                "description": "Good Manufacturing Practice"
            }
        ]
    }

]




  

export function getBusinessActivityBySlug(slug: string): BusinessActivity | undefined {
    return businessActivities.find(activity => activity.slug === slug);
  }
  
export function getAllBusinessActivities(): BusinessActivity[] {
return businessActivities;
}