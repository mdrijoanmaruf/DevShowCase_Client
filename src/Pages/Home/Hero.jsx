import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaRocket, FaCode, FaUsers, FaPlay, FaPause } from 'react-icons/fa'

const slides = [
	{
		id: 1,
		title: 'Showcase Your',
		highlight: 'Amazing Projects',
		subtitle: 'Build an impressive portfolio that stands out from the crowd',
		description:
			'Transform your coding journey into a visual masterpiece. Display your projects with style and get noticed by top employers and collaborators.',
		image:
			'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80',
		gradient: 'from-blue-600 via-purple-600 to-cyan-500',
		icon: <FaRocket className="text-2xl sm:text-3xl lg:text-4xl" />,
		stats: { number: '10K+', label: 'Projects Showcased' },
	},
	{
		id: 2,
		title: 'Connect With',
		highlight: 'Fellow Developers',
		subtitle: 'Join a thriving community of passionate developers',
		description:
			'Network with like-minded developers, share knowledge, collaborate on exciting projects, and grow together in the ever-evolving tech landscape.',
		image:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80',
		gradient: 'from-emerald-500 via-teal-600 to-blue-600',
		icon: <FaUsers className="text-2xl sm:text-3xl lg:text-4xl" />,
		stats: { number: '5K+', label: 'Active Developers' },
	},
	{
		id: 3,
		title: 'Master Your',
		highlight: 'Coding Skills',
		subtitle: 'Level up with cutting-edge technologies and frameworks',
		description:
			'Stay ahead of the curve with the latest technologies. Learn, practice, and master new skills through hands-on projects and community challenges.',
		image:
			'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80',
		gradient: 'from-orange-500 via-red-500 to-pink-600',
		icon: <FaCode className="text-2xl sm:text-3xl lg:text-4xl" />,
		stats: { number: '100+', label: 'Learning Resources' },
	},
]

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	// Auto-play functionality
	useEffect(() => {
		if (isAutoPlaying) {
			const interval = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % slides.length)
			}, 5000)
			return () => clearInterval(interval)
		}
	}, [isAutoPlaying])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	const goToSlide = (index) => {
		setCurrentSlide(index)
	}

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
			{/* Animated Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10 animate-pulse"></div>
				<div 
					className="absolute inset-0 opacity-40"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
					}}
				></div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 min-h-screen flex items-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
					<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-screen py-8 sm:py-12 lg:py-16">
						
						{/* Left Content */}
						<motion.div
							className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<AnimatePresence mode="wait">
								<motion.div
									key={currentSlide}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -30 }}
									transition={{ duration: 0.6 }}
									className="space-y-4 sm:space-y-6"
								>
									{/* Icon */}
									<div className="flex justify-center lg:justify-start">
										<motion.div
											className={`p-3 sm:p-4 lg:p-5 rounded-2xl bg-gradient-to-r ${slides[currentSlide].gradient} text-white shadow-lg`}
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											{slides[currentSlide].icon}
										</motion.div>
									</div>

									{/* Title */}
									<div className="space-y-2 sm:space-y-3">
										<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
											{slides[currentSlide].title}
											<span
												className={`block bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
											>
												{slides[currentSlide].highlight}
											</span>
										</h1>
										<p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
											{slides[currentSlide].subtitle}
										</p>
									</div>

									{/* Description */}
									<p className="text-base sm:text-lg text-gray-400 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
										{slides[currentSlide].description}
									</p>

									{/* Stats */}
									<div className="flex items-center justify-center lg:justify-start space-x-3">
										<motion.div
											className={`px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} text-white font-bold text-lg sm:text-xl`}
											whileHover={{ scale: 1.05 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											{slides[currentSlide].stats.number}
										</motion.div>
										<span className="text-gray-300 font-medium text-sm sm:text-base">
											{slides[currentSlide].stats.label}
										</span>
									</div>

									{/* CTA Buttons */}
									<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
										<motion.button 
											className={`px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${slides[currentSlide].gradient} text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base`}
											whileHover={{ scale: 1.05, y: -2 }}
											whileTap={{ scale: 0.95 }}
										>
											<span>Get Started</span>
											<FaRocket className="text-xs sm:text-sm" />
										</motion.button>
										<motion.button 
											className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
											whileHover={{ scale: 1.05, y: -2 }}
											whileTap={{ scale: 0.95 }}
										>
											<FaPlay className="text-xs sm:text-sm" />
											<span>Watch Demo</span>
										</motion.button>
									</div>
								</motion.div>
							</AnimatePresence>
						</motion.div>

						{/* Right Content - Image */}
						<motion.div
							className="relative order-1 lg:order-2"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="relative">
								<AnimatePresence mode="wait">
									<motion.div
										key={currentSlide}
										initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
										animate={{ opacity: 1, scale: 1, rotateY: 0 }}
										exit={{ opacity: 0, scale: 0.8, rotateY: -20 }}
										transition={{ duration: 0.8 }}
										className="relative"
									>
										{/* Main Image */}
										<div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
											<img
												src={slides[currentSlide].image}
												alt={slides[currentSlide].title}
												className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover"
												loading="lazy"
											/>
											{/* Overlay */}
											<div
												className={`absolute inset-0 bg-gradient-to-tr ${slides[currentSlide].gradient} opacity-20`}
											></div>
										</div>

										{/* Floating Elements */}
										<motion.div 
											className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center"
											whileHover={{ scale: 1.1, rotate: 10 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div
												className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white`}
											>
												<div className="text-lg sm:text-xl">
													{React.cloneElement(slides[currentSlide].icon, {
														className: "text-lg sm:text-xl"
													})}
												</div>
											</div>
										</motion.div>

										<motion.div 
											className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center"
											whileHover={{ scale: 1.1, rotate: -10 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className="text-center">
												<div
													className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
												>
													{slides[currentSlide].stats.number}
												</div>
												<div className="text-xs text-gray-300">
													{slides[currentSlide].stats.label.split(' ')[0]}
												</div>
											</div>
										</motion.div>
									</motion.div>
								</AnimatePresence>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Navigation Controls */}
			<div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 bg-black/20 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3">
					{/* Previous Button */}
					<motion.button
						onClick={prevSlide}
						className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label="Previous slide"
					>
						<FaArrowLeft className="text-sm sm:text-base" />
					</motion.button>

					{/* Slide Indicators */}
					<div className="flex space-x-1 sm:space-x-2">
						{slides.map((_, index) => (
							<motion.button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
									index === currentSlide
										? `bg-gradient-to-r ${slides[currentSlide].gradient}`
										: 'bg-white/30 hover:bg-white/50'
								}`}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					{/* Next Button */}
					<motion.button
						onClick={nextSlide}
						className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label="Next slide"
					>
						<FaArrowRight className="text-sm sm:text-base" />
					</motion.button>

					{/* Auto-play Toggle */}
					<motion.button
						onClick={() => setIsAutoPlaying(!isAutoPlaying)}
						className={`p-2 sm:p-3 backdrop-blur-sm rounded-full transition-all duration-300 ${
							isAutoPlaying
								? 'bg-green-500/20 text-green-400'
								: 'bg-red-500/20 text-red-400'
						}`}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label="Toggle auto-play"
					>
						{isAutoPlaying ? (
							<FaPause className="text-sm sm:text-base" />
						) : (
							<FaPlay className="text-sm sm:text-base" />
						)}
					</motion.button>
				</div>
			</div>

			{/* Progress Bar */}
			<div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 z-20">
				<motion.div
					className={`h-full bg-gradient-to-r ${slides[currentSlide].gradient}`}
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					transition={{ duration: 5, ease: 'linear' }}
					key={currentSlide}
				/>
			</div>
		</div>
	)
}

export default Hero