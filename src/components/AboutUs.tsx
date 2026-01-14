import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-black py-28">
      

        {/* SAME HEADING AS WHAT WE DO */}
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
            style={{ fontFamily: 'Playfair Display, serif' }}>
            About Us
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mb-16" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl text-white/75 leading-relaxed"
        >
          <p>
            At Arham Design Studio, we believe that exceptional design transcends
            mere aesthetics. We create spaces that tell stories, evoke emotions,
            and elevate the human experience. With years of expertise in
            residential and commercial design, our team blends innovation with
            timeless principles to craft spaces that are both functional and
            breathtakingly beautiful.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
