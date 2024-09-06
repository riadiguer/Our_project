'use client';

import { useState } from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-4 min-h-screen ">
 
        
        {/* Contact Information */}
        <div className="space-y-10 mt-4" >
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-600">
              Contactez-nous
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-4">Informations de contact</h3>
            <p className="text-center text-gray-600 mb-6">
              Vous pouvez également nous joindre à:
            </p>
            <ul className="space-y-4">
              <li className="text-center">
                <h4 className="text-xl font-semibold text-gray-800">Téléphone:</h4>
                <p className="text-gray-700">0559-84-07-33</p>
                <p className="text-gray-700">0559-86-51-11</p>
              </li>
              <li className="text-center">
                <h4 className="text-xl font-semibold text-gray-800">Email:</h4>
                <p className="text-gray-700">info@autoschool.com</p>
              </li>
              <li className="text-center">
                <h4 className="text-xl font-semibold text-gray-800">Localisation:</h4>
                <p className="text-gray-700">07 rue Hameg Idir Cinq Maisons Mohamadia - Alger</p>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Retrouvez-nous sur la carte:</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.839077411985!2d3.147320774891535!3d36.726425871856314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e526f048b780d%3A0xafa229b1d3fe3354!2sauto%20ecole%20Lounis!5e0!3m2!1sfr!2sdz!4v1724235554048!5m2!1sfr!2sdz"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              />
            </div>
          </div>
        </div>
    </div>
  );
}
