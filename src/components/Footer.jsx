import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row items-center w-full justify-between p-4 lg:p-6 bg-secondary-card text-primary-main">
            <div className="lg:mr-10 mb-4 lg:mb-0">
                <p className="text-base lg:text-lg flex items-center">
                    <FaMapMarkerAlt size={16} className="mr-2" />
                    Valle dorado, valle de los sirios,<br className="lg:hidden" /> Ensenada, Baja California
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="lg:mr-6 mb-4 lg:mb-0">
                    <p className="text-base lg:text-lg flex items-center text-white">
                        <FaPhoneAlt size={16} className="mr-2" /> +52 646 256 3625
                    </p>
                </div>
                <div className="mb-4 lg:mb-0">
                    <p className="text-base lg:text-lg flex items-center text-white">
                        <FaRegEnvelope size={16} className="mr-2" /> doctor@consultoriomx.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
