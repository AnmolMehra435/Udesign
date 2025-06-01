
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Heart, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
              Design Your
              <span className="text-rose-500 block">Dream Dress</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unleash your creativity with our intuitive dress design tool. Mix and match styles, 
              colors, and patterns to create the perfect dress that's uniquely yours.
            </p>
            <Link to="/designer">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Designing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose uDesign?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines ease of use with powerful customization options
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="design-card p-8 text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Endless Customization</h3>
              <p className="text-gray-600">
                Choose from dozens of bodice styles, skirt types, sleeve options, colors, and patterns to create your perfect dress.
              </p>
            </div>
            
            <div className="design-card p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Real-Time Preview</h3>
              <p className="text-gray-600">
                See your design come to life instantly with our interactive preview. No waiting, no guessing.
              </p>
            </div>
            
            <div className="design-card p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Easy to Use</h3>
              <p className="text-gray-600">
                Our intuitive interface makes fashion design accessible to everyone, from beginners to professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Join thousands of fashion enthusiasts who are already designing their dream dresses.
          </p>
          <Link to="/designer">
            <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="h-6 w-6 text-rose-400" />
            <span className="font-serif text-xl font-semibold">uDesign Dress Creator</span>
          </div>
          <p className="text-gray-400">
            © 2024 uDesign Dress Creator Online. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
