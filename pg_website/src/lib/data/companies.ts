// lib/data/companies.ts

export interface Company {
    id: string;
    slug: string;
    name: string;
    shortName: string; // For cases where we need a shorter version
    description: string;
    logo: string;
    heroImage: string;
    yearFounded: number;
    employeeCount: string;
    location: string;
    category: string; // For grouping/filtering companies
    website?: string; // Optional website URL
    parentCompany: string;
  }
  
  export const companies: Company[] = [
    {
      id: "aqua-breeders",
      slug: "aqua-breeders",
      name: "Aqua Breeders Ltd.",
      shortName: "Aqua Breeders",
      description: "Aqua Breeders Limited is a subsidiary of the Paragon Group, specializing in high-quality fish and shrimp breeding for commercial purposes. It operates modern aquaculture facilities in Bangladesh, using advanced technologies and sustainable practices. The company produces a range of species including tilapia, pangasius, catfish, and shrimp, supplying both domestic and international markets. Aqua Breeders Limited is known for its commitment to quality and sustainability, constantly innovating to improve efficiency and reduce its carbon footprint. The company's eco-friendly practices include using renewable energy sources and implementing waste management and water treatment best practices. Aqua Breeders Limited is a market leader in the Bangladesh aquaculture industry and continues to grow and succeed due to its innovation and sustainable approach.",
      logo: "/images/companies/aqua-breeders/logo.png",
      heroImage: "/images/companies/aqua-breeders/hero.jpg",
      yearFounded: 2015,  // Replace with actual year
      employeeCount: "200+", // Replace with actual count
      location: "Bangladesh",
      category: "Aquaculture",
      parentCompany: "Paragon Group"
    },
    {
        id: "bay-chicks",
        slug: "bay-chicks",
        name: "Bay Chicks Ltd.",
        shortName: "Bay Chicks",
        description: "Bay Chicks Limited is a dynamic and innovative company committed to providing high-quality broiler chicks to customers worldwide. Operating modern hatcheries in Bangladesh, the company uses advanced technologies and sustainable practices to produce healthy and sustainable products. With a focus on quality and customer satisfaction, Bay Chicks Limited is a trusted supplier of broiler chicks to both domestic and international markets. The company places a high value on environmental sustainability and uses renewable energy sources to reduce its carbon footprint. With a team of experienced professionals, Bay Chicks Limited is dedicated to providing reliable and efficient service to its customers. As a subsidiary of the Paragon Group, Bay Chicks Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Bay Chicks Limited is poised for continued success in the global poultry industry.",
        logo: "/images/companies/bay-chicks/logo.png",
        heroImage: "/images/companies/bay-chicks/hero.jpg",
        yearFounded: 2016, // Replace with actual year
        employeeCount: "150+", // Replace with actual count
        location: "Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
    },
    {
        id: "bay-grand-parents",
        slug: "bay-grand-parents",
        name: "Bay Grand Parents Ltd.",
        shortName: "Bay Grand Parents",
        description: "Bay Grand Parents Limited is a leading supplier of high-quality breeding stock for the poultry industry worldwide. Operating modern hatcheries in Bangladesh, the company uses advanced technologies and sustainable practices to produce healthy and genetically superior parent stock. With a focus on quality and customer satisfaction, Bay Grand Parents Limited is committed to providing its customers with high-performance breeding stock that meets international standards. The company places a high value on environmental sustainability, utilizing renewable energy sources to reduce its carbon footprint. With a team of experienced professionals, Bay Grand Parents Limited is dedicated to providing reliable and efficient service to its customers worldwide. As a subsidiary of the Paragon Group, Bay Grand Parents Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Bay Grand Parents Limited is poised for continued success in the global poultry industry.",
        logo: "/images/companies/bay-grand-parents/logo.png",
        heroImage: "/images/companies/bay-grand-parents/hero.jpg",
        yearFounded: 2017, // Replace with actual year
        employeeCount: "175+", // Replace with actual count
        location: "Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
    },
    {
        id: "chittagong-chicks",
        slug: "chittagong-chicks",
        name: "Chittagong Chicks Ltd.",
        shortName: "Chittagong Chicks",
        description: "Chittagong Chicks Limited is a leading supplier of high-quality broiler chicks for commercial purposes worldwide. Operating modern hatcheries in Chittagong, Bangladesh, the company uses advanced technologies and sustainable practices to produce healthy and fast-growing chicks. With a focus on quality and customer satisfaction, Chittagong Chicks Limited is committed to providing its customers with high-performance broiler chicks that meet international standards. The company places a high value on environmental sustainability, utilizing renewable energy sources to reduce its carbon footprint. With a team of experienced professionals, Chittagong Chicks Limited is dedicated to providing reliable and efficient service to its customers worldwide. As a subsidiary of the Paragon Group, Chittagong Chicks Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Chittagong Chicks Limited is poised for continued success in the global poultry industry.",
        logo: "/images/companies/chittagong-chicks/logo.png",
        heroImage: "/images/companies/chittagong-chicks/hero.jpg",
        yearFounded: 2015, // Replace with actual year
        employeeCount: "200+", // Replace with actual count
        location: "Chittagong, Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
    },
    {
        id: "chittagong-feed",
        slug: "chittagong-feed",
        name: "Chittagong Feed Ltd.",
        shortName: "Chittagong Feed",
        description: "Chittagong Feed Limited, a subsidiary of the Paragon Group, is a leading supplier of high-quality animal feed in Bangladesh. The company operates a modern feed mill in Chittagong, using advanced technologies and sustainable practices to produce nutritious and affordable feed for the poultry, fish, and livestock industries. With a commitment to quality and customer satisfaction, Chittagong Feed Limited offers products that meet international standards and provide exceptional performance. The company places a high value on environmental sustainability, utilizing renewable energy sources, and implementing best practices in waste management and water treatment. With a team of experienced professionals, Chittagong Feed Limited is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Chittagong Feed Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Chittagong Feed Limited is positioned for continued growth and success in the global animal feed market.",
        logo: "/images/companies/chittagong-feed/logo.png",
        heroImage: "/images/companies/chittagong-feed/hero.jpg",
        yearFounded: 2016, // Replace with actual year
        employeeCount: "250+", // Replace with actual count
        location: "Chittagong, Bangladesh",
        category: "Animal Feed",
        parentCompany: "Paragon Group"
    },
    {
        id: "denim-poultry",
        slug: "denim-poultry",
        name: "Denim Poultry Complex (Pvt.) Ltd.",
        shortName: "Denim Poultry",
        description: "Denim Poultry Complex (Pvt.) Limited, a subsidiary of the Paragon Group, is a leading poultry farming company in Bangladesh. The company operates a modern poultry complex in Gazipur, utilizing advanced technologies and sustainable practices to produce high-quality poultry products. Committed to providing safe, healthy, and delicious poultry products that meet international standards, Denim Poultry Complex places a high value on animal welfare, implementing best practices in biosecurity and disease prevention. With a team of experienced professionals, the company is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Denim Poultry Complex has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Denim Poultry Complex is positioned for continued growth and success in the global poultry industry.",
        logo: "/images/companies/denim-poultry/logo.png",
        heroImage: "/images/companies/denim-poultry/hero.jpg",
        yearFounded: 2014, // Replace with actual year
        employeeCount: "300+", // Replace with actual count
        location: "Gazipur, Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
    },
    {
        id: "jessore-feed",
        slug: "jessore-feed",
        name: "Jessore Feed Ltd.",
        shortName: "Jessore Feed",
        description: "Jessore Feed Ltd., a subsidiary of the Paragon Group, is a leading animal feed producer in Bangladesh. The company operates a modern feed mill in Jessore, utilizing advanced technologies and sustainable practices to produce high-quality and nutritious animal feed. Jessore Feed Ltd. is committed to providing its customers with safe and healthy animal feed that meets international standards. With a team of skilled professionals, the company is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Jessore Feed Ltd. has access to the resources and expertise of a diversified conglomerate. Through a commitment to quality, sustainability, and innovation, Jessore Feed Ltd. is positioned for continued growth and success in the global animal feed industry.",
        logo: "/images/companies/jessore-feed/logo.png",
        heroImage: "/images/companies/jessore-feed/hero.jpg",
        yearFounded: 2015, // Replace with actual year
        employeeCount: "200+", // Replace with actual count
        location: "Jessore, Bangladesh",
        category: "Animal Feed",
        parentCompany: "Paragon Group"
    },
    {
        id: "moynamoti-hatchery",
        slug: "moynamoti-hatchery", 
        name: "Moynamoti Hatchery Ltd.",
        shortName: "Moynamoti Hatchery",
        description: "Moynamoti Hatchery Limited, a subsidiary of the Paragon Group, is a modern hatchery producing high-quality poultry products. The company is committed to providing safe, healthy, and nutritious products that meet international standards. With a team of experienced professionals, Moynamoti Hatchery offers reliable and efficient service to customers worldwide. As part of the Paragon Group, the hatchery has access to the resources and expertise of a diversified conglomerate. Through a commitment to animal welfare, sustainability, and innovation, Moynamoti Hatchery is poised for continued growth and success in the global poultry industry.",
        logo: "/images/companies/moynamoti-hatchery/logo.png",
        heroImage: "/images/companies/moynamoti-hatchery/hero.jpg",
        yearFounded: 2016, // Replace with actual year
        employeeCount: "150+", // Replace with actual count
        location: "Moynamoti, Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-agro",
        slug: "paragon-agro",
        name: "Paragon Agro Ltd.",
        shortName: "Paragon Agro",
        description: "Paragon Agro Limited, a subsidiary of the Paragon Group, produces and distributes high-quality animal feed. Utilizing modern technologies and sustainable practices, the company is committed to providing safe, healthy, and nutritious feed that meets international standards. With a skilled team of professionals, Paragon Agro offers reliable and efficient service to its customers worldwide. As part of the Paragon Group, the company has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and animal welfare, Paragon Agro is positioned for continued growth and success in the global agribusiness industry.",
        logo: "/images/companies/paragon-agro/logo.png",
        heroImage: "/images/companies/paragon-agro/hero.jpg",
        yearFounded: 2015, // Replace with actual year
        employeeCount: "400+", // Replace with actual count
        location: "Bangladesh",
        category: "Agribusiness",
        parentCompany: "Paragon Group"
     },
     {
        id: "parasol-energy",
        slug: "parasol-energy",
        name: "Parasol Energy Ltd.",
        shortName: "Parasol Energy",
        description: "Parasol Energy Limited, a subsidiary of the Paragon Group, is a leading developer of renewable energy projects in Bangladesh. The company specializes in solar power generation, offering innovative and sustainable solutions to meet the energy needs of its clients. Parasol Energy is committed to promoting environmental sustainability and reducing dependence on fossil fuels. With a team of experienced professionals, the company delivers reliable and efficient service to its clients. As part of the Paragon Group, Parasol Energy has access to a wide range of resources and expertise, enabling it to drive growth and innovation in the renewable energy sector.",
        logo: "/images/companies/parasol-energy/logo.png",
        heroImage: "/images/companies/parasol-energy/hero.jpg",
        yearFounded: 2018, // Replace with actual year
        employeeCount: "100+", // Replace with actual count
        location: "Bangladesh",
        category: "Renewable Energy",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-feed",
        slug: "paragon-feed",
        name: "Paragon Feed Ltd.",
        shortName: "Paragon Feed",
        description: "Paragon Feed Limited is a leading producer of high-quality animal feed, committed to supporting the growth and development of the livestock industry in Bangladesh. With advanced technology and production techniques, the company offers customized feed solutions tailored to the unique needs of its clients. Paragon Feed Limited ensures that its feed meets the highest standards of quality and safety, providing nutritious and affordable options for farmers. With a team of experienced professionals, the company is dedicated to driving the sustainability of the livestock industry in Bangladesh, contributing to the country's economic development, and supporting the livelihoods of thousands of farmers.",
        logo: "/images/companies/paragon-feed/logo.png",
        heroImage: "/images/companies/paragon-feed/hero.jpg",
        yearFounded: 2014, // Replace with actual year
        employeeCount: "350+", // Replace with actual count
        location: "Bangladesh",
        category: "Animal Feed",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-plastics",
        slug: "paragon-plastics",
        name: "Paragon Plastics Ltd.",
        shortName: "Paragon Plastics",
        description: "Paragon Plastics Limited is a leading manufacturer of high-quality plastic products in Bangladesh, committed to producing eco-friendly and sustainable solutions. With advanced technology and experienced professionals, we provide customized products tailored to meet the unique needs of our clients. Our products range from household goods to industrial items and packaging solutions, ensuring the highest standards of quality and safety. We are dedicated to driving innovation and excellence in the plastic manufacturing industry, contributing to the country's economic growth and development. Our team is passionate about sustainability and uses eco-friendly materials and processes in all our operations. At Paragon Plastics Limited, we believe in providing exceptional customer service and building long-term partnerships with our clients. Choose us for your plastic manufacturing needs and experience the Paragon difference.",
        logo: "/images/companies/paragon-plastics/logo.png",
        heroImage: "/images/companies/paragon-plastics/hero.jpg",
        yearFounded: 2016, // Replace with actual year
        employeeCount: "250+", // Replace with actual count
        location: "Bangladesh",
        category: "Manufacturing",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-plast-fiber",
        slug: "paragon-plast-fiber",
        name: "Paragon Plast Fiber Ltd.",
        shortName: "Paragon Plast Fiber",
        description: "Paragon Plast Fiber Limited is a leading manufacturer of high-quality plastic products that cater to various industries. Our advanced technology and state-of-the-art machinery allow us to produce a wide range of plastic products including woven sacks, leno bags, jumbo bags, and more. Our team of experienced professionals is committed to providing top-notch services that meet the needs of our clients. We prioritize quality control and use only the best raw materials to ensure the durability and strength of our products. Our production processes are environmentally friendly and adhere to industry standards. At Paragon Plast Fiber Limited, we strive to exceed our client's expectations and deliver products that are reliable, efficient, and cost-effective.",
        logo: "/images/companies/paragon-plast-fiber/logo.png",
        heroImage: "/images/companies/paragon-plast-fiber/hero.jpg",
        yearFounded: 2007, // Replace with actual year
        employeeCount: "500+", // Replace with actual count
        location: "Bangladesh",
        category: "Manufacturing",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-poultry",
        slug: "paragon-poultry",
        name: "Paragon Poultry Ltd.",
        shortName: "Paragon Poultry",
        description: "Paragon Poultry Limited is a leading provider of high-quality poultry products in Bangladesh. We are committed to ensuring the health and wellbeing of our birds, and we use the latest technology and best practices to ensure their comfort and safety. Our state-of-the-art facilities and experienced staff enable us to produce and deliver fresh, delicious, and healthy chicken meat to our customers across the country. We are also dedicated to sustainable and ethical poultry farming practices, minimizing our environmental impact and promoting animal welfare. With our commitment to quality and customer satisfaction, we are proud to be one of the top poultry companies in Bangladesh.",
        logo: "/images/companies/paragon-poultry/logo.png",
        heroImage: "/images/companies/paragon-poultry/hero.jpg",
        yearFounded: 1993, // Replace with actual year
        employeeCount: "500+", // Replace with actual count
        location: "Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
     },
     {
        id: "paragon-press",
        slug: "paragon-press",
        name: "Paragon Press Ltd.",
        shortName: "Paragon Press",
        description: "Paragon Press Limited is a leading printing and packaging company that specializes in producing high-quality paper products for various industries. With over three decades of experience, our skilled team of professionals delivers exceptional services that meet the needs of our clients. Our advanced technology and modern infrastructure enable us to handle large-scale production with precision and efficiency. We offer a wide range of services including printing, binding, lamination, UV coating, and more. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses of all sizes. At Paragon Press Limited, we strive to exceed our client's expectations and deliver top-notch products that meet industry standards.",
        logo: "/images/companies/paragon-press/logo.png",
        heroImage: "/images/companies/paragon-press/hero.jpg",
        yearFounded: 1990, // Replace with actual year
        employeeCount: "150+", // Replace with actual count
        location: "Bangladesh",
        category: "Printing & Packaging",
        parentCompany: "Paragon Group"
     },
     {
        id: "parasole-footwear",
        slug: "parasole-footwear",
        name: "ParaSole Footwear Ltd.",
        shortName: "ParaSole Footwear",
        description: "ParaSole Footwear Limited is a subsidiary of Paragon Group, specializing in the production of high-quality footwear. With a commitment to innovation and sustainable production, ParaSole Footwear Limited has become a leading supplier of footwear in Bangladesh and beyond. Our team of experienced designers and skilled artisans work tirelessly to create comfortable, durable, and fashionable shoes for men, women, and children. We use only the finest materials to ensure our products meet the highest standards. Our mission is to provide our customers with exceptional footwear that meets their unique needs and exceeds their expectations. Join us in walking towards a better future with ParaSole Footwear Limited.",
        logo: "/images/companies/parasole-footwear/logo.png",
        heroImage: "/images/companies/parasole-footwear/hero.jpg",
        yearFounded: 2018, // Replace with actual year
        employeeCount: "1300+", // Replace with actual count
        location: "Bangladesh",
        category: "Footwear Manufacturing",
        parentCompany: "Paragon Group"
     },
     {
        id: "rangpur-poultry",
        slug: "rangpur-poultry",
        name: "Rangpur Poultry Ltd.",
        shortName: "Rangpur Poultry",
        description: "Rangpur Poultry Limited is a leading poultry company under the Paragon Group, committed to providing high-quality and nutritious poultry products to its customers. With advanced production facilities and state-of-the-art technology, Rangpur Poultry Limited ensures the highest standard of animal welfare and food safety. The company is dedicated to serving the needs of its customers while maintaining sustainable and eco-friendly practices. Rangpur Poultry Limited is driven by its core values of integrity, innovation, and excellence, and its team of experienced professionals is committed to delivering the best possible products and services. The company's focus on continuous improvement and customer satisfaction has made it a trusted name in the poultry industry both domestically and globally.",
        logo: "/images/companies/rangpur-poultry/logo.png",
        heroImage: "/images/companies/rangpur-poultry/hero.jpg",
        yearFounded: 2015, // Replace with actual year
        employeeCount: "300+", // Replace with actual count
        location: "Rangpur, Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
     },
     {
        id: "shalbahan-farms",
        slug: "shalbahan-farms",
        name: "Shalbahan Farms Ltd.",
        shortName: "Shalbahan Farms",
        description: "Shalbahan Farms Limited is a subsidiary of the Paragon Group, committed to providing high-quality and sustainable food products. We take pride in our state-of-the-art farming practices and the quality of our products. Our focus is on producing safe and healthy food through innovative and environmentally friendly methods. We employ a team of skilled professionals and use modern technology to ensure that our products meet the highest standards of quality. At Shalbahan Farms, we believe in responsible and ethical farming practices, which are reflected in our product offerings. Our products include eggs, broiler chickens, and other poultry products that are both healthy and delicious. We are committed to providing our customers with the best products possible and promoting sustainable agriculture for a healthier world.",
        logo: "/images/companies/shalbahan-farms/logo.png",
        heroImage: "/images/companies/shalbahan-farms/hero.jpg",
        yearFounded: 2014, // Replace with actual year
        employeeCount: "250+", // Replace with actual count
        location: "Bangladesh",
        category: "Agriculture",
        parentCompany: "Paragon Group"
     },
     {
        id: "sympa-solar",
        slug: "sympa-solar",
        name: "Sympa Solar Power Ltd.",
        shortName: "Sympa Solar",
        description: "Sympa Solar Power Limited is a renewable energy company committed to providing clean and sustainable energy solutions. Our focus is on harnessing the power of the sun to create cost-effective and eco-friendly energy options for our customers. We specialize in designing, building, and operating solar power plants across the country. Our team of experts works closely with clients to provide customized solutions that meet their energy needs while reducing their carbon footprint. We are dedicated to creating a greener tomorrow by promoting the use of renewable energy sources. At Sympa Solar Power Limited, we believe in creating a brighter future for all.",
        logo: "/images/companies/sympa-solar/logo.png",
        heroImage: "/images/companies/sympa-solar/hero.jpg",
        yearFounded: 2019, // Replace with actual year
        employeeCount: "100+", // Replace with actual count
        location: "Bangladesh",
        category: "Renewable Energy",
        parentCompany: "Paragon Group"
     },
     {
        id: "usha-poultry",
        slug: "usha-poultry",
        name: "Usha Poultry Ltd.",
        shortName: "Usha Poultry",
        description: "Usha Poultry Ltd. is a company under the Paragon Group that specializes in producing and supplying high-quality poultry products. With a commitment to excellence and sustainability, we have established ourselves as a leading player in the poultry industry. Our state-of-the-art facilities, cutting-edge technology, and highly skilled team enable us to deliver products of exceptional quality, taste, and nutritional value. We are dedicated to upholding the highest standards of animal welfare, hygiene, and food safety throughout our operations. Our products include a wide range of fresh and frozen chicken, eggs, and other poultry items, catering to both domestic and international markets. At Usha Poultry, we are passionate about providing healthy and delicious food options that meet the evolving needs and preferences of consumers worldwide.",
        logo: "/images/companies/usha-poultry/logo.png",
        heroImage: "/images/companies/usha-poultry/hero.jpg",
        yearFounded: 2016, // Replace with actual year
        employeeCount: "200+", // Replace with actual count
        location: "Bangladesh",
        category: "Poultry",
        parentCompany: "Paragon Group"
     },
     {
        id: "fatehbagh-tea",
        slug: "fatehbagh-tea",
        name: "Fatehbagh Tea Company Ltd.",
        shortName: "Fatehbagh Tea",
        description: "Fatehbagh Tea Company Limited is a subsidiary of the Paragon Group, and one of the leading tea producers in Bangladesh. Our tea gardens are located in the scenic hills of Srimangal, where the climate and soil are ideal for growing high-quality tea leaves. We take great care in every step of the tea production process, from planting and nurturing the tea bushes to carefully selecting and processing the leaves. Our commitment to quality has earned us a reputation for producing some of the finest teas in the region. We offer a wide range of teas, including black, green, and white teas, as well as flavored and specialty teas. Our products are sold in both domestic and international markets, and are enjoyed by tea lovers around the world. We take pride in our tea, and we are dedicated to bringing the best of Bangladesh to the world through our products.",
        logo: "/images/companies/fatehbagh-tea/logo.png",
        heroImage: "/images/companies/fatehbagh-tea/hero.jpg",
        yearFounded: 2001, // Replace with actual year
        employeeCount: "300+", // Replace with actual count
        location: "Srimangal, Bangladesh",
        category: "Tea Production",
        parentCompany: "Paragon Group"
     }
  ];
  
  export const getCompanyBySlug = (slug: string) => {
    return companies.find((company) => company.slug === slug);
  };
  
  export const getAllCompanies = () => {
    return companies;
  };