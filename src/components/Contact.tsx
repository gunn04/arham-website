import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-[#0B0B0B] py-32 overflow-hidden">
      {/* Sage ambient glow */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#A6A998]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#A6A998]/25 blur-3xl rounded-full" />

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-full h-px bg-gradient-to-r from-transparent via-[#A6A998]/60 to-transparent mb-24"
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2
            className="text-4xl md:text-6xl font-light text-[#F5F5F2] tracking-widest mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get In Touch
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-[#A6A998]/60 mx-auto mb-8"
          />

          <p className="text-lg text-[#A6A998] font-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Let’s collaborate and create
            something timeless together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div>
              <h3
                className="text-3xl font-light text-[#F5F5F2] mb-12"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Contact Information
              </h3>

              <div className="space-y-10">
                {/* Phone */}
                <InfoItem icon={Phone} label="Phone">
                  9632123705 <br /> 8105483072
                </InfoItem>

                {/* Email */}
                <InfoItem icon={Mail} label="Email">
                  info@arhamdesignstudio.in
                </InfoItem>

                {/* Location */}
                <InfoItem icon={MapPin} label="Location">
                  <a
                    href="https://maps.app.goo.gl/EX9h3j8M1Kax35LS8"
                    target="_blank"
                    className="hover:text-[#A6A998] transition"
                  >
                    View on Google Maps
                  </a>
                </InfoItem>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4
                className="text-2xl font-light text-[#F5F5F2] mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Follow Our Work
              </h4>

              <div className="flex gap-4">
                <SocialButton
                  href="https://www.instagram.com/arham.design.studio_?igsh=MThzemVpbDRocGNqZg=="
                  icon={Instagram}
                  label="Instagram"
                />

                <SocialButton
                  href="#"
                  icon={ExternalLink}
                  label="Behance"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>

              <Input type="email" placeholder="Email Address" />
              <Input type="tel" placeholder="Phone Number" />

              <select className="input">
                <option className="bg-black">Project Type</option>
                <option className="bg-black">Residential</option>
                <option className="bg-black">Commercial</option>
                <option className="bg-black">Hospitality</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="input resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#A6A998] text-black py-4 rounded-xl tracking-widest font-light hover:bg-[#b4b8a4] transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center mt-24 pt-12 border-t border-white/10 text-[#A6A998] text-sm tracking-widest">
          © {new Date().getFullYear()} Arham Design Studio
        </div>
      </div>
    </section>
  );
};

/* -------- Components -------- */

const InfoItem = ({ icon: Icon, label, children }: any) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex gap-8 items-start"
  >
    <div className="w-14 h-14 rounded-xl bg-[#A6A998]/20 flex items-center justify-center">
      <Icon className="text-[#A6A998]" />
    </div>
    <div>
      <p className="text-sm tracking-widest text-[#A6A998]/60 mb-2">
        {label}
      </p>
      <p className="text-[#F5F5F2] font-light text-lg">{children}</p>
    </div>
  </motion.div>
);

const SocialButton = ({ href, icon: Icon, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -4 }}
    className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-[#F5F5F2] hover:border-[#A6A998]/40 transition"
  >
    <Icon className="text-[#A6A998]" />
    {label}
  </motion.a>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="input"
  />
);

export default Contact;
