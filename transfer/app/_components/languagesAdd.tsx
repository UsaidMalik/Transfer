"use client";

import React from "react";
import languages from "../_lib/language_paths";
import { useFormState } from "react-dom";
import { addLanguage } from "../_lib/actions";

export default function AllLanguages() {
    const [state, formAction] = useFormState<any, FormData>(addLanguage, undefined);

    return (
        <div className="flex flex-start justify-start py-2 m-2 space-x-4">
            {Object.entries(languages).map(([origin, destination], index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-200 rounded shadow-lg">
                    <p className="text-lg font-semibold text-gray-800">{origin}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-800">{destination}</p>
                    <form action={formAction} className="ml-2">
                    <input
                    type='text'
                    name='origin'
                    value={origin} 
                    readOnly 
                    hidden={true}
                    />
                    <input
                    type='text'
                    name='destination'
                    value={destination} 
                    readOnly 
                    hidden={true}
                    />
                    <input 
                    type="submit" 
                    value={`+`} 
                    className="px-4 py-2 bg-black text-white rounded shadow cursor-pointer transform hover:-translate-y-1 transition-all duration-200 ease-in-out"/>
                    {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
                </form>
                </div>
            ))}
        </div>
    );
}
