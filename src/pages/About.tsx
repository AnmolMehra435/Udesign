
import Navigation from '@/components/Navigation';
import { Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            About uDesign Dress Creator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that every woman deserves to wear a dress that makes her feel confident, 
            beautiful, and uniquely herself.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              Founded in 2024, uDesign Dress Creator was born from a simple observation: 
              fashion should be personal, accessible, and fun. We noticed that many women 
              struggled to find dresses that perfectly matched their vision, style, and body type.
            </p>
            <p className="mb-6">
              Our innovative online platform democratizes fashion design, giving everyone 
              the tools to create custom dresses without needing years of training or expensive software. 
              Whether you're designing for a special occasion or just want to explore your creativity, 
              we're here to make it happen.
            </p>
            <p>
              Today, thousands of users worldwide have created stunning, personalized dresses 
              using our intuitive design tools. We're proud to be part of their fashion journey 
              and can't wait to see what you'll create.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Passion for Fashion</h3>
            <p className="text-gray-600">
              We're driven by a love for beautiful design and the joy of self-expression through fashion.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Community First</h3>
            <p className="text-gray-600">
              Our platform is built around our amazing community of designers, dreamers, and fashion enthusiasts.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly evolve our tools and features to stay at the forefront of digital fashion design.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-rose-100 mb-6 max-w-2xl mx-auto">
            Help us make custom fashion accessible to everyone. Start designing today and 
            become part of a community that celebrates creativity and individual style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
