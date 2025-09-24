import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const FormPage = () => {
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

      {/* Header with Logo */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate('/contact')}
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
              DEMANDE DE RÉSERVATION
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/90">
              Évènements Privés
            </h2>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 tracking-tight">
                ENVOYEZ-NOUS VOTRE DEMANDE
              </h3>
              <p className="text-gray-700 text-lg font-medium">
                Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
              </p>
            </div>

            <form action="https://formsubmit.co/hattash.khodabakhsh@aircanada.ca" method="POST" className="space-y-6">
              {/* FormSubmit config fields */}
              <input type="hidden" name="_subject" value="Nouvelle réservation - L'Avenue Laval" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} />
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Nom complet
                </label>
                <input 
                  type="text" 
                  id="nom"
                  name="nom" 
                  placeholder="Votre nom" 
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-lg font-medium"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Adresse e-mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Votre e-mail" 
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-lg font-medium"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Votre message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Décrivez votre événement (nombre d'invités, date souhaitée, type d'événement, préférences de menu, etc.)" 
                  rows={6}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-lg font-medium resize-vertical"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl px-12 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-500 flex items-center mx-auto"
                >
                  <Send className="w-6 h-6 mr-3" />
                  ENVOYER LA DEMANDE
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                <h4 className="font-black text-xl text-gray-800 mb-4 tracking-tight">Informations importantes</h4>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Notre équipe vous contactera dans les plus brefs délais pour discuter des détails 
                  de votre événement et vous proposer des options personnalisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormPage;
