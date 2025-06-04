import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Heart, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-6">
              Design Your
              <span className="text-gray-700 dark:text-gray-300 block">Dream Dress</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
              Unleash your creativity with our intuitive dress design tool. Mix and match styles, 
              colors, and patterns to create the perfect dress that's uniquely yours.
            </p>
            <Link to="/designer">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Designing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-8">
              Why Choose Looma?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-semibold">
              Our platform combines ease of use with powerful customization options
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 p-8 text-center">
              <div className="bg-gray-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-black mb-4 text-gray-900 dark:text-gray-100">Endless Customization</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Choose from dozens of bodice styles, skirt types, sleeve options, colors, and patterns to create your perfect dress.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 p-8 text-center">
              <div className="bg-gray-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-black mb-4 text-gray-900 dark:text-gray-100">Real-Time Preview</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                See your design come to life instantly with our interactive preview. No waiting, no guessing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 p-8 text-center">
              <div className="bg-gray-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-black mb-4 text-gray-900 dark:text-gray-100">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Our intuitive interface makes fashion design accessible to everyone, from beginners to professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-semibold">
            Join thousands of fashion enthusiasts who are already designing their dream dresses.
          </p>
          <Link to="/designer">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="h-6 w-6 text-gray-400" />
            <span className="font-black text-xl">Looma</span>
          </div>
          <p className="text-gray-400 font-medium">
            © 2024 Looma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
