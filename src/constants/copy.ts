import sennderLogo from "@/../public/sennder-logo.svg";
import atlasLogo from "@/../public/atlas-logo.svg";
import uc3mLogo from "@/../public/uc3m-logo.png";
import fraguaProject from "@/../public/fragua-project.svg";
import userManagementProject from "@/../public/user-management-project.svg";

const experienceOptions = [
  {
    id: "sennder-experience",
    name: "Senior Software Engineer at Sennder",
    date: "Jul 2022 - Dec 2024",
    description: `At Sennder, I built a public user service that managed over 80,000 users using REST APIs, Kafka, databases, and queues. Furthermore, I developed micro-frontends that handled thousands of daily visits and improved CI/CD pipelines for AWS deployments with Terraform, cutting deployment time by 20%. I led more than 60 technical interviews for roles in frontend, backend, and system design.`,
    alt: "Sennder logo",
    src: sennderLogo,
    url: "https://www.sennder.com/en",
  },
  {
    id: "atlas-experience",
    name: "Software Engineer at Atlas Real Estate Analytics",
    date: "Jan 2020 - Jul 2022",
    description: `At Atlas, I launched a real estate SaaS for the Spanish market, which secured over 400 B2B clients in its first year. I designed data collection and processing pipelines with advanced visualizations for millions of data points. I also managed the automatic deployment, testing, and monitoring of the system, achieving 99.999% uptime.`,
    alt: "Atlas Real Estate Analytics logo",
    src: atlasLogo,
    url: "https://atlas-reanalytics.com/fragua/en/home/",
  },
  {
    id: "uc3m-experience",
    name: "Data Analytics and Database Management Intern at UC3M University",
    date: "Jan 2018 - Dec 2019",
    description: `At UC3M, I managed databases and automated the creation of over 20 reports using Python. Furthermore, I extracted hundreds of metrics and measurements to support decision making and monitoring.`,
    alt: "UC3M University logo",
    src: uc3mLogo,
    url: "https://www.uc3m.es/Home",
  },
];

const myProjectsOptions = [
  {
    id: "fragua-project",
    index: 0,
    title: "Fragua - Real Estate Market Analytics",
    description: `Fragua provided advanced real estate analytics designed to enhance
            decision-making with beautiful and insightful data visualizations.
            The platform leveraged machine learning models to interpret data and
            uncover trends, all within a straightforward user experience that
            made complex insights accessible.`,
    src: fraguaProject,
    alt: "House in a hand",
    aria: "Minimalist picture of a house in a hand",
  },
  {
    id: "user-management-project",
    index: 1,
    title: "User Management Service",
    description: `The carrier user service was designed to manage thousands of
            transactions, seamlessly integrating with the company's
            event-driven architecture to communicate with other microservices.
            It handled user authorization and personal data, ensuring secure and
            efficient operations across the platform.`,
    src: userManagementProject,
    alt: "Servers connected by lines in a network",
    aria: "Servers connected by lines in a network",
  },
];

export { experienceOptions, myProjectsOptions };
