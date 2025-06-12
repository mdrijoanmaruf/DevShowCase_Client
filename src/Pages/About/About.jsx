import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaUsers, 
  FaCode, 
  FaLightbulb, 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaAward,
  FaGlobe,
  FaHandshake
} from 'react-icons/fa'

const About = () => {
  const stats = [
    { number: '10K+', label: 'Active Developers', icon: <FaUsers /> },
    { number: '25K+', label: 'Projects Showcased', icon: <FaCode /> },
    { number: '150+', label: 'Countries Reached', icon: <FaGlobe /> },
    { number: '5M+', label: 'Lines of Code', icon: <FaRocket /> }
  ]

  const features = [
    {
      icon: <FaRocket />,
      title: 'Launch Your Career',
      description: 'Showcase your projects to potential employers and clients with our professional portfolio builder.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FaUsers />,
      title: 'Build Community',
      description: 'Connect with fellow developers, share knowledge, and collaborate on exciting projects.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <FaLightbulb />,
      title: 'Learn & Grow',
      description: 'Access tutorials, resources, and mentorship to continuously improve your skills.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <FaHandshake />,
      title: 'Find Opportunities',
      description: 'Discover job opportunities, freelance projects, and collaboration possibilities.',
      gradient: 'from-pink-500 to-red-600'
    }
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face',
      bio: 'Tech lead specializing in cloud architecture and developer experience optimization.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Community builder passionate about connecting developers and fostering collaboration.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DevShowCase</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering developers worldwide to showcase their talent, connect with peers, and build the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Join Our Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4">
                  <div className="text-2xl text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We believe every developer has a unique story to tell and amazing projects to showcase. DevShowCase was born from the vision to create a platform where developers can not only display their work but also connect, collaborate, and grow together.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is to democratize access to opportunities in tech by providing tools that help developers present their skills professionally and connect with the right people at the right time.
              </p>
              <div className="flex items-center space-x-4">
                <FaAward className="text-2xl text-cyan-400" />
                <span className="text-gray-300">Winner of TechCrunch Disrupt 2023</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to showcase your skills, connect with peers, and advance your career in tech.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4`}>
                  <div className="text-2xl text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate developers and entrepreneurs committed to building the future of developer collaboration.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-cyan-400"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already showcasing their work and building meaningful connections on DevShowCase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Create Your Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Explore Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About