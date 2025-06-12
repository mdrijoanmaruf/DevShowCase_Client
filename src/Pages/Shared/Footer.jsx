import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/md.rijoanmaruf',
      icon: FaFacebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rijoanmaruf',
      icon: FaInstagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mdrijoanmaruf',
      icon: FaGithub,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdrijoanmaruf/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mdrijoanmaruf/',
      icon: SiLeetcode,
      color: 'hover:text-yellow-500'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/rijianmaruf',
      icon: FaTwitter,
      color: 'hover:text-blue-300'
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h2 className="text-2xl font-bold">
                Dev<span className="text-cyan-400">ShowCase</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Showcasing innovative development projects and technical expertise. 
              Building modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Connect With Me</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-600 hover:scale-110 hover:shadow-lg group`}
                    title={social.name}
                  >
                    <IconComponent className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Follow me on social media for updates and tech insights!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevShowCase. All rights reserved.
            </p>
            <div className="text-sm">
              <span className="text-gray-400">Developed by </span>
              <span className="text-cyan-400 font-semibold"><a 
                href="https://rijoan.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
              >
                Md Rijoan Maruf
              </a></span>
              
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      </div>
    </footer>
  )
}

export default Footer