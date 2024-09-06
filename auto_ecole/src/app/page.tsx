import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/Faq'; 
// Adjust the path as needed

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Apprenez &agrave; conduire avec confiance
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Rejoignez nos cours de conduite complets et devenez un conducteur s&ucirc;r et comp&eacute;tent.
          </p>
          <Link href="/courses" className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition duration-300">
            Voir les cours
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
              <Image src="/images/car.png" alt="Conduite Sécurisée" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Techniques de Conduite S&eacute;curis&eacute;e</h3>
              <p>Nos cours se concentrent sur la s&eacute;curit&eacute; et la pr&eacute;vention des accidents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
              <Image src="/images/instructor.png" alt="Instructeurs Experts" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instructeurs Experts</h3>
              <p>Apprenez des meilleurs avec nos instructeurs exp&eacute;riment&eacute;s.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
              <Image src="/images/inst.png" alt="Horaires Flexibles" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horaires Flexibles</h3>
              <p>Nous offrons des horaires de cours flexibles pour s&apos;adapter &agrave; votre emploi du temps charg&eacute;.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Documents Requis</h2>
          <p className="text-center mb-8">Pour vous inscrire, veuillez fournir les documents suivants :</p>
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside space-y-4">
              <li><span className="font-semibold">Extrait de naissance</span></li>
              <li><span className="font-semibold">R&eacute;sidence</span></li>
              <li><span className="font-semibold">Certificat m&eacute;dical</span></li>
              <li><span className="font-semibold">7 photos</span></li>
              <li><span className="font-semibold">Carte de groupage</span></li>
              <li><span className="font-semibold">Photocopie du permis de conduire pour les cat&eacute;gories (A - A1 - C - C1 - D - E)</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Votre Parcours d&apos;Apprentissage</h2>
          <div className="relative">
            <div className="absolute inset-0 border-l-2 border-gray-300"></div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">&Eacute;tape 1: Inscription</h3>
                <p>Compl&eacute;tez le formulaire d&apos;inscription et fournissez les documents requis.</p>
              </div>
              <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">&Eacute;tape 2: Formation</h3>
                <p>Assistez aux cours de conduite avec nos instructeurs exp&eacute;riment&eacute;s.</p>
              </div>
              <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">&Eacute;tape 3: Examen</h3>
                <p>Passez votre examen de conduite avec confiance.</p>
              </div>
              <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">&Eacute;tape 4: Obtention du Permis</h3>
                <p>Recevez votre permis de conduire et commencez &agrave; conduire!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <FAQSection />

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Pr&ecirc;t &agrave; commencer ?</h2>
          <p className="text-lg mb-8">Inscrivez-vous d&egrave;s aujourd&apos;hui et commencez votre parcours pour devenir un conducteur confiant.</p>
          <Link href="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
