
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Logo from '../components/Logo';
import FloorPlan from '../components/FloorPlan';
import NavigationDots from '../components/NavigationDots';
import InvestmentTable from '../components/InvestmentTable';
import ProjectionChart from '../components/ProjectionChart';
import CampusMap from '../components/CampusMap';
import TeamMember from '../components/TeamMember';
import ContactInfo from '../components/ContactInfo';

const Index = () => {
  const teamMembers = [
    {
      image: "/lovable-uploads/1ea1031e-d351-4f43-8f67-5d4d44804a85.png",
      name: "Oloyede Goodness .O.",
      title: "Chief Executive Officer"
    },
    {
      image: "/lovable-uploads/31afe300-a5a4-4eb9-b8e6-5bf5691e6974.png",
      name: "Olivier Magdalene .G.",
      title: "Chief Financial Officer Head of Growth"
    },
    {
      image: "/lovable-uploads/b52b7b5d-56d6-4e9b-9fc8-ae7fe9b152be.png",
      name: "Odunwa Kome .A.",
      title: "Chief Design and Construction Engineer"
    },
    {
      image: "/lovable-uploads/b742f4e6-4d38-4876-b1c7-2f7dcb0e6049.png",
      name: "Paulo Ribeiro",
      title: "Bus. Partner | U-World Pt | Jorge Properties"
    },
    {
      image: "/lovable-uploads/0b10af07-be1a-43c0-82da-478f376df305.png",
      name: "Olusola Osinoiki",
      title: "Investor Partner, Advisory, Growth"
    }
  ];

  // Full section fade-in animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  // Element animation variants
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-background relative overflow-hidden">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#overview" className="text-white hover:text-accent transition-colors">Overview</a>
            <a href="#investment" className="text-white hover:text-accent transition-colors">Investment</a>
            <a href="#goals" className="text-white hover:text-accent transition-colors">Goals</a>
            <a href="#solutions" className="text-white hover:text-accent transition-colors">Solutions</a>
            <a href="#projections" className="text-white hover:text-accent transition-colors">Projections</a>
            <a href="#team" className="text-white hover:text-accent transition-colors">Team</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="min-h-screen pt-28 pb-16 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center relative"
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={elementVariants} className="space-y-4 order-2 md:order-1">
              <FloorPlan className="w-full max-w-md mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-start">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-10 w-32 bg-accent rounded-full flex items-center px-4"
                >
                  <div className="w-6 h-6 rounded-full bg-background"></div>
                </motion.div>
              </div>
              <NavigationDots />
            </motion.div>

            <motion.div variants={elementVariants} className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/e2bc51f7-cef3-4b65-b1e0-db59974145d6.png" 
                alt="Modern building" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div 
            variants={elementVariants}
            className="mt-20 mb-12"
          >
            <h1 className="title-text text-center">STUDENT ACCOMMODATION</h1>
            <p className="text-accent text-center text-3xl md:text-5xl font-light mt-4">
              Real Estate Business
            </p>
            <div className="flex justify-center mt-4">
              <NavigationDots />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <Section id="overview" title="OVERVIEW">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card/50 p-6 md:p-8 rounded-lg border border-accent/20 relative"
            >
              <p className="text-lg leading-relaxed">
                PropOut Limited specializes in the development, management, and investment of purpose-built student accommodation. By leveraging AI-driven technology, we offer efficient, secure, and scalable housing solutions tailored to meet the needs of students. Our platform enables fractional ownership and seamless property management, making student housing investments more accessible and profitable for a diverse range of investors.
              </p>
              <div className="absolute bottom-2 right-2">
                <NavigationDots />
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="/lovable-uploads/c523a0ca-f3fc-444b-9acf-bbf28ca11322.png" 
                  alt="Modern architecture" 
                  className="w-full rounded-lg"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <FloorPlan className="w-40 h-32 ml-auto" />
                <div className="text-right">
                  <p className="font-medium">Modern Real Estate Solutions</p>
                  <p className="text-sm text-gray-300">Built for Gen-z's and The Fresh New Generations to Come...</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-end"
              >
                <NavigationDots />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment Analysis/Structure Section */}
      <Section id="investment" title="INVESTMENT ANALYSIS/STRUCTURE">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-accent/10 px-6 py-4 rounded-lg inline-block">
                <h3 className="text-4xl md:text-6xl font-heading tracking-wider text-accent">[3:4:5]</h3>
                <p className="mt-2 text-sm md:text-base">
                  U-World | Corporate IC | Instituitions | 
                  <br />Fractional Ownerships | Private Investors
                </p>
              </div>
              
              <InvestmentTable />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <FloorPlan className="w-full max-w-xs ml-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Goals Section */}
      <Section id="goals" title="GOALS">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <FloorPlan className="w-40 h-32 mb-6" />
              <div className="rotate-180 transform origin-center ml-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading leading-none">GOALS</h1>
              </div>
            </div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-heading mb-4">SDGs 4 and 11</h3>
                <ul className="space-y-6">
                  <li>
                    <div className="flex gap-3">
                      <span className="text-lg font-bold">•</span>
                      <div>
                        <span className="font-medium">SDG 4 – Quality Education:</span> We contribute by developing purpose-built student accommodations that create safe, affordable, and enabling environments for learning. Our housing solutions are designed to support academic success and well-being, particularly for underserved and growing university communities.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <span className="text-lg font-bold">•</span>
                      <div>
                        <span className="font-medium">SDG 11 – Sustainable Cities and Communities:</span> Through innovative property design, efficient urban development, and responsible asset management, we help build inclusive, resilient, and sustainable living spaces. Our use of AI ensures smarter planning, reduced waste, and optimized property use—contributing to better cities for all.
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="mt-6">
                  By integrating technology, affordability, and smart design, PropOut is committed to making education more accessible and urban living more sustainable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-6"
              >
                <div>
                  <img 
                    src="/lovable-uploads/a91b8ef3-2bc0-40ca-b16f-082cc186fcf2.png" 
                    alt="Modern glass building" 
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-heading mb-2">We are a forward-thinking real estate company!</h3>
                  <p className="text-sm">
                    While we leverage cutting-edge AI technology to revolutionize property accessibility, investment, and ownership process, PropOut's digital platform enables investors to access a global database of real estate asset opportunities, facilitating fractional ownership and seamless asset transfers effectively. This innovative approach democratizes real estate investment, making it accessible and efficient for a diverse range of investors.
                  </p>
                </div>
              </motion.div>

              <div className="flex justify-end">
                <NavigationDots />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problems Section */}
      <Section id="problems" title="PROBLEMS">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <FloorPlan className="max-w-md w-full" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xl leading-relaxed">
                  Nigeria's student housing landscape is overwhelmed and underdeveloped. Over 2 million students in tertiary institutions are forced to live in overcrowded, poorly managed, and often unsafe accommodations—if they find any at all.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p className="font-medium">Lack of Purpose-Built Facilities:</p>
                      <p>Most hostels are not designed with the modern academic lifestyle in mind, lacking basic educational infrastructure and personal space.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p className="font-medium">Subpar Living Conditions:</p>
                      <p>Students face frequent water shortages, poor sanitation, and insecurity, making it harder to focus on academic success.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p className="font-medium">Unaffordable Pricing:</p>
                      <p>Quality housing is often priced out of reach, and cheaper alternatives sacrifice safety, comfort, and reliability.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p className="font-medium">Distance & Insecurity:</p>
                      <p>Many are forced to live far from campus, facing daily commuting risks, time loss, and exposure to unsafe environments.</p>
                    </div>
                  </div>
                </li>
              </ul>
              
              <div className="flex justify-start">
                <NavigationDots />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solutions" title="SOLUTION">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rotate-270 hidden md:block">
              <h1 className="text-9xl font-heading leading-none tracking-widest">SOLUTION</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:col-span-2 lg:col-span-1"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <NavigationDots />
                  <div>
                    <p className="text-xl leading-relaxed mb-6">
                      Strategically located properties designed specifically for students accomodation and academic wellbeing.
                    </p>
                    <ol className="space-y-4 list-decimal pl-6">
                      <li className="text-lg">
                        Modern amenities and services tailored to student needs with an edu-socio infrastructure.
                      </li>
                      <li className="text-lg">
                        Affordable pricing without compromising on quality services, per use charge.
                      </li>
                      <li className="text-lg">
                        Enhanced security and safety measures/Close proximity to school
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="relative">
                <CampusMap />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="SERVICES">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-heading">Purpose-Built Student Accommodation (PBSA)</h3>
              <p className="text-base">
                Purpose-Built Student Accommodation
                With over 2 million Nigerian students underserved by formal housing, PropOut is unlocking a high-demand market through scalable, secure, and income-generating student accommodation. We develop and manage properties in proximity to top universities, ensuring fast uptake and consistent returns.
              </p>
              <p className="text-base flex items-center gap-2">
                <span className="text-blue-400">🚀</span>
                Investors gain access to a proven rent flow model and long-term real estate appreciation—plus social impact aligned with SDG 4 & 11.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-heading">Property Management Services</h3>
              <p className="text-base">
                Our AI engine matches property demand to listings with speed, accuracy, and reduced operational friction. From tenant acquisition to smart maintenance reminders, our system eliminates bottlenecks in traditional real estate operations.
              </p>
              <p className="text-base flex items-center gap-2">
                <span className="text-yellow-400">⚡</span>
                This is where real estate meets automation—invest in the technology that cuts cost, increases speed, and multiplies returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-heading">Real Estate Design, Development, and Maintenance</h3>
              <p className="text-base">
                From blueprint to finish, we offer full-cycle real estate services—design, construction, and lifecycle maintenance—ensuring every development is efficient, cost-optimized, and tenant-ready.
              </p>
              <p className="text-base flex items-center gap-2">
                <span className="text-red-400">🏗️</span>
                We build with intention: sustainable structures, maximized space use, and ongoing asset value.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-end mt-10">
            <FloorPlan className="w-64 h-48" />
          </div>
        </div>
      </Section>

      {/* Feasibility Section */}
      <Section id="feasibility" title="FEASIBILITY">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading">HIGH DEMAND FOR MODERN AND LUXURY HOSTELS</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p>
                        Nigeria has over 2 million tertiary students with limited purpose-built accommodation. Most students rely on informal or substandard housing options.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p>
                        Urbanization & Education Expansion: Rapid growth in student populations across cities like Lagos, Abuja, Ibadan, Enugu, and Port Harcourt means increased demand for safe, affordable, and well-managed housing.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">•</span>
                    <div>
                      <p>
                        Rent Growth: Average student rent in high-demand areas ranges from ₦150,000 to ₦400,000 per semester, depending on the location and facility quality— indicating a viable revenue stream.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex">
                <NavigationDots />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <img 
                  src="/lovable-uploads/3235eed3-af5d-4b7c-81db-9e1840e49c4e.png" 
                  alt="Modern building architecture" 
                  className="w-full rounded-lg" 
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-heading mb-4 text-center">GROWING INVESTMENT AND BUSINESS DEMANDS IN STUDENT REGION</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex gap-3">
                      <span className="text-lg font-bold">•</span>
                      <div>
                        <p>
                          ROI Potential: With proper location and infrastructure, PropOut's model could generate 10–20% ROI annually, especially through fractional investment offerings.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <span className="text-lg font-bold">•</span>
                      <div>
                        <p>
                          Fractional Ownership: Reduces capital barriers, allowing more people to invest in student housing, thereby increasing liquidity and investment inflow.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3">
                      <span className="text-lg font-bold">•</span>
                      <div>
                        <p>
                          Government & Private Sector Interest: Real estate and education are priority areas for PPPs (Public-Private Partnerships) and grants.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-center mt-4">
                  <NavigationDots />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projections Section */}
      <Section id="projections" title="PROJECTIONS">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-20 -top-10">
                <FloorPlan className="w-32 h-24 opacity-40" />
              </div>
              <ProjectionChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/80 p-6 rounded-lg border border-accent/20"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-heading">NIGERIA REAL ESTATE MARKET</h3>
                <p className="text-lg">INSIGHTS AND OPPORTUNITIES</p>
              </div>
              
              <div className="mt-8 space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-6xl font-heading">$</div>
                  <div>
                    <div className="text-3xl font-bold">$17.37 Billion</div>
                    <div className="text-sm text-blue-300">+13.63% CAGR (2024-2029)</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-heading text-lg mb-2">Housing Deficit</h4>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h5 className="text-xl font-bold">28</h5>
                        <p className="text-sm">Million Units</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-heading text-lg mb-2">Urban Population Growth</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-end gap-1 h-12">
                        <div className="w-4 bg-blue-300 h-6 rounded-t"></div>
                        <div className="w-4 bg-blue-400 h-8 rounded-t"></div>
                        <div className="w-4 bg-blue-600 h-10 rounded-t"></div>
                        <div className="w-4 bg-blue-800 h-12 rounded-t"></div>
                      </div>
                      <div className="text-xs space-y-1">
                        <div>2010 2015 2020 2025</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-heading text-lg mb-2">Key Investment Sectors</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Residential</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Commercial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Industrial</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-heading text-lg mb-2">Investment Opportunities</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Infrastructure Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Affordable Housing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <NavigationDots />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" title="THE TEAM">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                title={member.title}
                index={index}
              />
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <NavigationDots />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="GET IN TOUCH">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl">Invest in Impact, Sustainability, and Growth. SDGs 4 & 11</p>
              
              <ContactInfo />
              
              <div className="flex justify-center md:justify-start py-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-accent animate-bounce">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-heading mb-6">Thank You!</h2>
              <img 
                src="/lovable-uploads/5c5a9d42-6f49-4c6c-87ef-cd54e00c373d.png" 
                alt="Modern building interior" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-accent/10 py-4 border-t border-accent/20">
        <div className="container mx-auto max-w-7xl text-center">
          <Logo />
        </div>
      </footer>
    </div>
  );
};

export default Index;
