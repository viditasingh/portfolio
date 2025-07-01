import TitleHeader from "../components/TitleHeader";

const About = () => {
    return (
        <section id="about-me" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Meet the Developer" sub="About Me" />

                <div className="py-8">
                    <div className="text-center mb-12">
                        <p className=" text-lg">
                            The creative mind behind this platform
                        </p>
                    </div>

                    <div className="">
                        <div
                            className="card"
                        >
                            {/* Profile Card */}
                            <div className=" space-y-8 card card-border rounded-xl p-10 mb-5 break-inside-avoid-column">
                                <div className="text-center mb-8">
                                    {/* Profile Image with Polygon Shape */}
                                    <div className="relative w-40 h-40 mx-auto mb-6 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 transform rotate-6 group-hover:rotate-12 transition-transform duration-500 ease-out"
                                            style={{
                                                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                            }}>
                                        </div>
                                        <div className="absolute inset-2 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out delay-75"
                                            style={{
                                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                                            }}>
                                        </div>
                                        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-out"
                                            style={{
                                                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                                            }}>
                                            <img
                                                src="/images/profile.png"
                                                alt="Vidita Singh"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text mb-2">
                                        Vidita Singh
                                    </h2>
                                    <p className="text-white-600 font-medium mb-4">
                                        Full Stack Developer & Computer Science Student
                                    </p>
                                    <div className="flex items-center justify-center text-gray-600 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>India</span>
                                    </div>
                                </div>

                                {/* Bio Section */}
                                <div className="">
                                    <h3 className="text-lg font-semibold mb-4">About Me</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        Hello! I'm Vidita, a passionate B.Tech Computer Science Engineering student graduating in 2026.
                                        I'm deeply fascinated by the world of full-stack development and love creating digital solutions
                                        that make a difference.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        My journey in tech began with curiosity and has evolved into a passion for building
                                        user-centric applications. I specialize in the MERN stack and enjoy exploring new
                                        technologies that push the boundaries of what's possible on the web.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        When I'm not coding, you can find me exploring new technologies, working on my DSA skills,
                                        or being emersed in competitive programming. I'm always excited to connect with
                                        fellow developers and learn from the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Quick Info */}
                    <div
                        className="card space-y-8 card-border mb-5 break-inside-avoid-column card cardborder rounded-xl p-8">
                        <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Response Time</span>
                                <span className="text-sm font-medium text-green-400 px-2 py-1 rounded-full " >Usually within 24 hours</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Open for</span>
                                <span className="text-sm font-medium text-blue-400 px-2 py-1 rounded-full">Collaborations & Opportunities</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Time Zone</span>
                                <span className="text-sm font-medium text-gray-400 px-2 py-1 rounded-full">IST (UTC+5:30)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
