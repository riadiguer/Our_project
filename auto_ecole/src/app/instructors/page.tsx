import Image from 'next/image';

const instructors = [
  { name: 'LOUNIS Izem Aghiles', bio: '20 ans d’expérience dans l’enseignement de la conduite, avec un accent sur la sécurité et le développement des compétences.', photo: '/images/john.jpg' },
  { name: 'LOUNIS Izem Mohamed', bio: 'Spécialisé dans les techniques de conduite défensive et les compétences de conduite avancées.', photo: '/images/jane.jpg' },
];

export default function Instructors() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Rencontrez Nos Instructeurs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  src={instructor.photo}
                  alt={instructor.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-xl font-semibold text-white">{instructor.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
