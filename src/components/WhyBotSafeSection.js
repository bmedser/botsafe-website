import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const WhyChooseBotSafe = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto text-center"
            >
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Why Choose <span className="text-indigo-600">BotSafe</span>?
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Experience the next level of gaming automation with BotSafe
                </p>
            </motion.div>
            <div className="mt-20 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white shadow-lg">
                                <feature.icon className="h-8 w-8" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.name}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 flex justify-center"
            >
                <a
                    href="#"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                >
                    Get Started with BotSafe
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16 max-w-3xl mx-auto"
            >
                <Alert className="bg-indigo-100 border-indigo-300">
                    <AlertCircle className="h-5 w-5 text-indigo-600" />
                    <AlertTitle className="text-indigo-800 font-semibold">Coming Soon: intelliChat</AlertTitle>
                    <AlertDescription className="text-indigo-700">
                        Your bot will soon be able to engage in natural conversations, customized to your preferences. Stay tuned for this exciting feature!
                    </AlertDescription>
                </Alert>
            </motion.div>
        </div>
    );
};

const features = [
    {
        name: 'Modern AI-Powered Software',
        description: 'BotSafe uses cutting-edge AI to recreate your gaming interactions.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        name: 'External Operation',
        description: 'BotSafe operates externally, providing a seamless and secure gaming experience.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
    {
        name: 'Realistic Input Simulation',
        description: 'Experience human-like inputs that are virtually indistinguishable from real player actions.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        ),
    },
    {
        name: 'Customizable Interactions',
        description: 'Tailor your bot\'s behavior to match your play style.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
    },
    {
        name: 'Enhanced Safety',
        description: 'BotSafe prioritizes your account security, minimizing the risk of detection and bans.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        name: 'Continuous Innovation',
        description: 'With upcoming features like intelliChat, BotSafe is constantly evolving to meet your needs.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

export default WhyChooseBotSafe;