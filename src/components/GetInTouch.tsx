import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative bg-black py-20">
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-20"
      />

      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white font-light tracking-wide mb-16 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Contact Information
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-2xl mx-auto"
        >
          {/* Phone */}
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase mb-2">Phone</p>
              <a href="tel:9632123705" className="block text-white text-lg">
                9632123705
              </a>
              <a href="tel:8105483072" className="block text-white text-lg">
                8105483072
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase mb-2">Email</p>
              <a
                href="mailto:info@arhamdesignstudio.in"
                className="text-white text-lg"
              >
                info@arhamdesignstudio.in
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase mb-2">Location</p>
              <a
                href="https://maps.app.goo.gl/EX9h3j8M1Kax35LS8"
                target="_blank"
                className="text-white text-lg"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Instagram */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-white mb-6">Follow Our Work</h3>
          <a
            href="https://www.instagram.com/arham.design.studio_"
            target="_blank"
            className="inline-flex items-center space-x-3 text-white"
          >
            <Instagram />
            <span>@arham.design.studio_</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Arham Design Studio
          </p>
        </div>
      </div>
    </section>
  );
}
