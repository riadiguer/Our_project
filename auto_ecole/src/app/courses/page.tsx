'use client';

import Image from 'next/image';

export default function Courses() {
  const courseCategories = [
    {
      id: 'A1',
      title: 'Catégorie A1',
      description: 'Motos de catégorie A, tricycles et quadricycles.'
    },
    {
      id: 'A2',
      title: 'Catégorie A2',
      description: 'Motos des catégories B et C.'
    },
    {
      id: 'B',
      title: 'Catégorie B',
      description: 'Véhicules et automobiles d\'un poids total autorisé ne dépassant pas 3500 kg. Convient pour le transport de personnes et de marchandises.'
    },
    {
      id: 'C',
      title: 'Catégorie C',
      description: 'Véhicules destinés au transport de marchandises ou de matériaux d\'un poids total autorisé supérieur à 3500 kg mais ne dépassant pas 19000 kg.'
    },
    {
      id: 'E',
      title: 'Catégorie E',
      description: 'Véhicules destinés au transport de marchandises ou de matériaux d\'un poids total autorisé supérieur à 19000 kg.'
    },
    {
      id: 'D',
      title: 'Catégorie D',
      description: 'Véhicules conçus pour transporter plus de 8 personnes, sans compter le conducteur, ou d\'un poids total autorisé supérieur à 3500 kg.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Nos Cours de Conduite</h1>
        <p className="text-lg text-gray-600 mb-6">Choisissez la catégorie adaptée à vos besoins de conduite. Nos cours offrent une formation complète pour diverses catégories de véhicules.</p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`/images/${course.id}.png`} // Assurez-vous que les images sont correctement nommées et situées
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
