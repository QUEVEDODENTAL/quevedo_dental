import React from 'react';
import { MapPin, Phone, Mail } from 'react-feather';

const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row items-center w-full justify-between lg:justify-center p-4 lg:p-6 bg-secondary-card text-primary-main">
            <div className="lg:mr-10 mb-4">
                <p className="text-base lg:text-lg flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Valle dorado, valle de los sirios,<br className="lg:hidden" /> Ensenada, Baja California
                </p>
            </div>
            <div className="flex">
                <div className="lg:mr-6 mb-4 lg:mb-0 lg:mb-0">
                    <p className="text-base lg:text-lg flex items-center text-white">
                        <Phone size={16} className="mr-2" /> +52 646 256 3625
                    </p>
                </div>
                <div className="lg:mr-6 mb-4 lg:mb-0 lg:mb-0">|</div>
                <div className="mb-4 lg:mb-0 lg:mb-0">
                    <p className="text-base lg:text-lg flex items-center text-white">
                        <Mail size={16} className="mr-2" /> doctor@consultoriomx.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
