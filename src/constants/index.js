import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

import works1 from "../assets/works1.png";
import works2 from "../assets/works2.png";
import works3 from "../assets/works3.png";

export const navlinks = [
  { id: "home", title: "Home" },
  { id: "about-us", title: "About Us" },
  { id: "services", title: "Services" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact-us", title: "Contact Us" },
];

export const servicesData = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    content:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: services1,
  },
  {
    id: "teeth-checkup",
    title: "Teeth Chechup",
    content:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: services2,
  },
  {
    id: "teeth-implants",
    title: "Teeth Implants",
    content:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: services3,
  },
];

export const doctorsData = [
  { name: "Dr. Carolyn", title: "Dental Specialist", img: doctor1 },
  { name: "Dr. Culpepper", title: "Dental Specialist", img: doctor2 },
  { name: "Dr. Alanna", title: "Dental Specialist", img: doctor3 },
];

export const howItWorksData = [
  { title: "Make Appointment", icon: works1 },
  { title: "Expert Dental Care", icon: works2 },
  { title: "Radiate Confidence", icon: works3 },
];

export const footerLinks = [
  {
    id: "nav",
    title: "Navigation",
    links: [
      { id: "home", title: "Home" },
      { id: "about-us", title: "About Us" },
      { id: "services", title: "Services" },

      { id: "contact-us", title: "Contact Us" },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      { id: "teeth-whitening", title: "Teeth Whitening" },
      { id: "dental-filling", title: "Dental Filling" },
      { id: "teeth-checkup", title: "Teeth Checkup" },
      { id: "teeth-implants", title: "Teeth Implants" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { id: "customer-stories", title: "Customer Stories" },
      { id: "help", title: "Help Center" },
      { id: "documentaion", title: "Documentaion" },
      { id: "blog", title: "Blog & Guide" },
    ],
  },
];
