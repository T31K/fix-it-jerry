import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMapPin,
  IconBrandTiktok,
  IconExternalLink
} from "@tabler/icons-react";

export const metadata = {
  title: "Fix It Jerry | Links",
  description: "Connect with Fix It Jerry through our social media and contact channels.",
};

function LinksPage() {
  const links = [
    {
      title: "Book a Repair",
      url: "/book-a-repair",
      icon: <IconExternalLink size={24} />,
      color: "bg-green-600",
      important: true,
      isExternal: false
    },
    {
      title: "WhatsApp Us",
      url: "https://wa.me/60183646909",
      icon: <IconBrandWhatsapp size={24} />,
      color: "bg-green-600",
      important: true,
      isExternal: true
    },
    {
      title: "Call Us",
      url: "tel:+60183646909",
      icon: <IconPhone size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Facebook",
      url: "https://facebook.com/fixitjerry",
      icon: <IconBrandFacebook size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Instagram",
      url: "https://instagram.com/fixitjerry",
      icon: <IconBrandInstagram size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Visit Our Store (Bukit Jalil)",
      url: "https://maps.google.com/maps?q=1-10,+Jalan+Bukit+Jalil+indah+4B,+Bukit+Jalil,+Taman+Ltat,+57000+Kuala+Lumpur",
      icon: <IconMapPin size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Visit Our Store (Puchong)",
      url: "https://maps.google.com/maps?q=23A,+Jalan+Sri+Manja+10,+Taman+Sri+Manja,+46000+Petaling+Jaya,+Selangor",
      icon: <IconMapPin size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Visit Our Store (Desa Parkcity)",
      url: "https://maps.google.com/maps?q=7,+Jalan+Residen+Utama,+Desa+Parkcity,+52200+Wilayah+Persekutuan,+Kuala+Lumpur",
      icon: <IconMapPin size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    },
    {
      title: "Visit Our Store (Subang Jaya)",
      url: "https://maps.google.com/maps?q=22-1,+Jalan+SS+15/8,+SS+15,+47500+Subang+Jaya,+Selangor",
      icon: <IconMapPin size={24} />,
      color: "bg-gray-600",
      important: false,
      isExternal: true
    }
  ];

  return (
    <div id="wrapper">
      <div className="scrollbar-v show-on-scroll"></div>
      <Navbar />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section className="relative bg-gray-100 min-h-screen py-10 md:py-36">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10 col-12">
                <div className="text-center mb-2 md:mb-5">

                  <h1 className="mb-0 md:mb-2">Fix It Jerry</h1>
                  <p className="mb-0 text-gray-600">
                    #1 Phone Repair in Kuala Lumpur
                  </p>
                </div>

                <div className="links-container">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target={link.isExternal ? "_blank" : "_self"}
                      rel={link.isExternal ? "noopener noreferrer" : ""}
                      className={`d-block text-white ${link.important ? 'bg-green-600' : 'bg-gray-600'} rounded-1 p-3 mb-3 text-center transition-all hover-scale-1-02 shadow-sm`}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="me-2">{link.icon}</span>
                        <span className="fw-bold">{link.title}</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center mt-5">
                  <p className="text-gray-500 mb-0 small">
                    &copy; {new Date().getFullYear()} Fix It Jerry. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default LinksPage;
