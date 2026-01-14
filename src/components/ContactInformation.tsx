import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const ContactInformation = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "PHONE",
      items: [
        { text: "8105483072", href: "tel:8105483072" },
        { text: "9632123705", href: "tel:9632123705" },
       
      ]
    },
    {
      icon: Mail,
      label: "EMAIL", 
      items: [
        { text: "info@arhamdesignstudio.in", href: "info@arhamdesignstudio.in" }
      ]
    },
    {
      icon: MapPin,
      label: "LOCATION",
      items: [
        { text: "View on Google Maps", href: "https://maps.app.goo.gl/EX9h3j8M1Kax35LS8" }
      ]
    }
  ];

  return (
    <section className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-7xl font-light text-stone-100 mb-12 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Information
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-200/20 to-amber-400/20 rounded-2xl flex items-center justify-center group-hover:from-amber-200/30 group-hover:to-amber-400/30 transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-amber-200" />
                </div>
              </div>
              
              <h3 
                className="text-sm font-medium text-amber-200 mb-6 tracking-wider"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </h3>
              
              <div className="space-y-3">
                {item.items.map((contactItem, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={contactItem.href}
                    className="block text-stone-300 hover:text-stone-100 transition-colors duration-300 text-lg"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {contactItem.text}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-3xl font-light text-stone-100 mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Follow Our Work
          </h3>
          
          <a
            href="https://www.instagram.com/arham.design.studio_?igsh=MThzemVpbDRocGNqZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-stone-300 hover:text-amber-200 transition-colors duration-300 group"
          >
            <Instagram className="w-6 h-6" />
            <span 
              className="text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              @arham.design.studio_
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center pt-16 border-t border-white/10"
        >
          <p 
            className="text-stone-400 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2025 Arham Design Studio. All rights reserved.
          </p>
          
      
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInformation;