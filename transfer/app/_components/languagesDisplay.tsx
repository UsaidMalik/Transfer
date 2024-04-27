import Link from "next/link";
import React from "react";

interface LanguagesProps {
    languages: {[key: string]: string};   
}

export default function LanguagesDisplay({languages}: LanguagesProps) {
    return (
        <div className="flex flex-start justify-start py-2 m-2 space-x-4">
            {Object.entries(languages).map(([origin, destination], index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-200 rounded shadow-lg hover:bg-gray-300 hover:shadow-xl transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                    <Link href={`learn/${destination.toLowerCase()}?origin=${origin.toLowerCase()}`}>
                    <p className="text-lg font-semibold text-gray-800">{origin}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-800">{destination}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
