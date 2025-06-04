import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, Star } from 'lucide-react';

interface FeedbackForm {
  rating: number;
  comments: string;
}

const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex items-center justify-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          className="focus:outline-none"
        >
          <Star
            className={`w-8 h-8 transition-colors ${
              star <= (hoveredRating || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FeedbackForm>({
    rating: 0,
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({
        title: "Please select a rating",
        description: "You must select a star rating before submitting.",
        variant: "destructive"
      });
      return;
    }
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', formData);
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We appreciate your input!",
    });
    setFormData({
      rating: 0,
      comments: ''
    });
  };

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
              {/* Star Rating */}
              <div className="space-y-4">
                <Label className="block text-center text-lg font-semibold">
                  How would you rate your experience?
                </Label>
                <StarRating 
                  rating={formData.rating} 
                  onRatingChange={(rating) => setFormData({ ...formData, rating })} 
                />
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 