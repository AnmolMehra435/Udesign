import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, User, Phone, Mail } from 'lucide-react';

interface FeedbackForm {
  name: string;
  phone: string;
  email: string;
  foundUs: string;
  comments: string;
}

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FeedbackForm>({
    name: '',
    phone: '',
    email: '',
    foundUs: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', formData);
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We appreciate your input!",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      foundUs: '',
      comments: ''
    });
  };

  const foundUsOptions = [
    "Search Engine",
    "Social Media",
    "Friend/Family",
    "Advertisement",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <MessageSquare className="h-8 w-8 text-gray-900 dark:text-gray-100" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100">
            Share Your Feedback
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-semibold">
            We value your opinion and would love to hear from you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="pl-9"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-9"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-9"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* How did you find us */}
              <div className="space-y-2">
                <Label htmlFor="foundUs">How did you find us?</Label>
                <Select 
                  value={formData.foundUs}
                  onValueChange={(value) => setFormData({ ...formData, foundUs: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select how you found us" />
                  </SelectTrigger>
                  <SelectContent>
                    {foundUsOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  placeholder="Share your thoughts with us..."
                  className="min-h-[120px]"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                Submit Feedback
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Have a specific query? {' '}
                <Link 
                  to="/contact" 
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Contact us directly
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 