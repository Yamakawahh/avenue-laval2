import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Utensils } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-green-400">
      {/* Navigation Banner */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-white font-semibold hover:text-white/80 transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Accueil
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-white font-semibold hover:text-white/80 transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Réservation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          {/* Logo */}
          <img 
            src="/Logo L'avenue.png" 
            alt="L'Avenue Laval Logo" 
            className="mx-auto h-48 md:h-56 lg:h-64 xl:h-72 w-auto drop-shadow-2xl mb-0"
          />
          {/* Text and Button */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-8 text-center">
              Organisez votre soirée privée ou d'entreprise chez L'Avenue Laval!
            </h1>
            <div>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl px-12 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-500"
              >
                RÉSERVER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        {/* Offer Details */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 max-w-5xl mx-auto border border-white/20">
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              Réservez l'ensemble de notre établissement pour des groupes de 
              <span className="text-red-600"> 20 à 104 personnes</span>.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-3">Capacité Flexible</h4>
              <p className="text-gray-600 text-lg">De 20 à 104 invités</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-3">Menus Flexibles</h4>
              <p className="text-gray-600 text-lg">Options personnalisées</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-3">Établissement Privé</h4>
              <p className="text-gray-600 text-lg">Exclusivité totale</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mb-10">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Choisissez parmi nos options flexibles de menus pour créer l'événement parfait 
              pour votre soirée privée ou d'entreprise.
            </p>
          </div>

          {/* Reservation Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl px-16 py-5 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-red-500"
            >
              RÉSERVER
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;