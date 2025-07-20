import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Smartphone } from 'lucide-react';

const ContactPage = () => {
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
              className="text-white font-semibold hover:text-white/80 transition-colors px-4 py-2 rounded-lg hover:bg-white/10 bg-white/20"
            >
              Réservation
            </button>
          </div>
        </div>
      </nav>

      {/* Header with Logo */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-white/80 mb-6 transition-colors font-semibold"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Retour
          </button>
          <div className="text-center">
            <img 
              src="/Logo L'avenue.png" 
              alt="L'Avenue Laval Logo" 
             className="mx-auto h-48 md:h-56 lg:h-64 xl:h-72 w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              RÉSERVATION
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/90">
              Évènements Privés
            </h2>
          </div>

          {/* Contact Information */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 tracking-tight">
                POUR RÉSERVER, CONTACTEZ-NOUS AU:
              </h3>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-center bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/form')}>
                <Mail className="w-10 h-10 text-red-600 mr-6 flex-shrink-0" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Formulaire en ligne</p>
                  <button className="text-xl md:text-2xl font-bold text-red-700 hover:text-red-800 transition-colors">
                    ENVOYER UNE DEMANDE
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <Phone className="w-10 h-10 text-red-600 mr-6 flex-shrink-0" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Téléphone</p>
                  <a 
                    href="tel:5796406060"
                    className="text-xl md:text-2xl font-bold text-red-700 hover:text-red-800 transition-colors"
                  >
                    579 640 6060
                  </a>
                </div>
              </div>

              {/* Cell */}
              <div className="flex items-center justify-center bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <Smartphone className="w-10 h-10 text-red-600 mr-6 flex-shrink-0" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Cellulaire</p>
                  <a 
                    href="tel:5146517151"
                    className="text-xl md:text-2xl font-bold text-red-700 hover:text-red-800 transition-colors"
                  >
                    514 651 7151
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                <h4 className="font-black text-xl text-gray-800 mb-4 tracking-tight">Informations sur votre événement</h4>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Lors de votre appel, n'hésitez pas à mentionner le nombre d'invités, 
                  la date souhaitée et vos préférences de menu. Notre équipe se fera un plaisir 
                  de vous accompagner dans l'organisation de votre événement privé.
                </p>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-10">
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl px-12 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-500"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;