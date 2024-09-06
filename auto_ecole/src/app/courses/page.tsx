'use client';

import Image from 'next/image';

export default function Courses() {
  const courseCategories = [
    {
      id: 'A1',
      title: 'Category A1',
      description: 'Motorcycles of Category A, tricycles, and quadricycles.'
    },
    {
      id: 'A2',
      title: 'Category A2',
      description: 'Motorcycles of Categories B and C.'
    },
    {
      id: 'B',
      title: 'Category B',
      description: 'Vehicles and automobiles with a total authorized weight not exceeding 3500 kg. Suitable for transporting people and goods.'
    },
    {
      id: 'C',
      title: 'Category C',
      description: 'Vehicles for transporting goods or materials with a total authorized weight exceeding 3500 kg but not exceeding 19000 kg.'
    },
    {
      id: 'E',
      title: 'Category E',
      description: 'Vehicles for transporting goods or materials with a total authorized weight exceeding 19000 kg.'
    },
    {
      id: 'D',
      title: 'Category D',
      description: 'Vehicles designed for transporting more than 8 people, excluding the driver, or with a total authorized weight exceeding 3500 kg.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Driving Courses</h1>
        <p className="text-lg text-gray-600 mb-6">Choose the right category for your driving needs. Our courses offer comprehensive training for various vehicle categories.</p>
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
                  src={`/images/${course.id}.png`} // Ensure images are correctly named and located
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
