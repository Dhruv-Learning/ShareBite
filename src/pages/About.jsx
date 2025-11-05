import React from "react";
import { Heart, Users, Globe2, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const About = () => {
  const data=[
    {
      name:"Dhruv Sharma",
      role:"Developer",
      img:"https://randomuser.me/api/portraits/men/1.jpg",
      github:'https://github.com/Dhruv-Learning'
    },
    {
      name:"Hareram",
      role:"Project Manager",
      img:"://randomusehttpsr.me/api/portraits/women/2.jpg",
      github:'https://github.com/Hareram-codes'    
    },
    {
      name:"Mohit Rai",
      role:"Designer",
      img:"https://randomuser.me/api/portraits/men/3.jpg",
      github:'https://github.com/Dhruv-Learning' 
    }
  ]
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* HERO */}
      <motion.section
        className="relative bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center text-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center py-28 px-6">
          <h1 className="text-5xl font-bold mb-4">About FoodShare</h1>
          <p className="text-lg text-gray-200">
            A community where kindness meets a plate. Together, we’re reducing food
            waste and spreading love — one meal at a time.
          </p>
        </div>
      </motion.section>

      {/* STORY */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Our Story
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
        >
          FoodShare started with a simple question —{" "}
          <strong>“Why waste good food when someone else needs it?”</strong> What began
          as a small neighborhood initiative is now a growing movement connecting home
          chefs, food lovers, and change-makers who believe in sharing over wasting.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-12">
          {[
            {
              icon: <Heart className="w-10 h-10 text-yellow-500 mx-auto mb-4" />,
              title: "Love in Every Bite",
              desc: "Every meal shared carries a story, care, and warmth of home.",
              bg: "bg-yellow-50",
            },
            {
              icon: <Leaf className="w-10 h-10 text-green-500 mx-auto mb-4" />,
              title: "Zero Waste Vision",
              desc: "We believe a sustainable world begins with mindful sharing.",
              bg: "bg-green-50",
            },
            {
              icon: <Globe2 className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
              title: "Global Community",
              desc: "From one kitchen to another, our impact spreads worldwide.",
              bg: "bg-blue-50",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${item.bg}`}
              variants={fadeUp}
              custom={i * 0.2}
              initial="hidden"
              whileInView="visible"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-yellow-50 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          The Community Behind FoodShare
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
        >
          From students to families to food enthusiasts — we are united by compassion and
          creativity.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-10">
          {data.map((item, i) => (
            <motion.div
              key={item.name}
              className="w-52 h-60 bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-center items-center"
              whileHover={{ scale: 1.05 }}
              variants={fadeUp}
              custom={i * 0.2}
              initial="hidden"
              whileInView="visible"
            >
              
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <button className="px-3 py-1 bg-yellow-500 rounded-full hover:bg-yellow-400 transition mb-2">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline mb-2">GitHub</a>
              </button>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
