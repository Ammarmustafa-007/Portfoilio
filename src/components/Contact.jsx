import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "buddyammar123@gmail.com",
    href: "mailto:buddyammar123@gmail.com",
    color: "#8b5cf6",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+92 330 638 1984",
    href: "tel:+923306381984",
    color: "#22c55e",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Wapda Town, Lahore, Pakistan",
    href: null,
    color: "#f472b6",
  },
];

const socials = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ammar-mustafa55", color: "#0077b5", label: "LinkedIn" },
  { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/923306381984", color: "#25d366", label: "WhatsApp" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/buddyammar55/", color: "#e4405f", label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/ammar.mustafa.5473/", color: "#1877f2", label: "Facebook" },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm("service_ishvhrb", "template_03v3702", form.current, {
        publicKey: "seKajyVXhJ220ZDvF",
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log("Failed:", error.text);
          setIsSubmitting(false);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-28 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card p-5 flex items-center gap-5 group"
              >
                <div
                  className="p-3 rounded-xl transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${info.color}15`,
                    color: info.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${info.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1 group/link"
                    >
                      {info.value}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">Connect With Me</p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl glass-card transition-all duration-500 group"
                    style={{ color: social.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 8px 30px ${social.color}30`;
                      e.currentTarget.style.borderColor = `${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-bold mb-8 gradient-text-static">Send a Message</h3>

              <form ref={form} className="space-y-5" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="glass-input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-muted-foreground">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="glass-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="glass-input resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-button w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium"
                  >
                    ❌ Something went wrong. Please try again or reach out directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
