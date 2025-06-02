import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const ActionButtons = () => {
  const navigate = useNavigate();

  const handleWishlist = () => {
    console.log('Added to wishlist - dummy function');
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="outline"
        size="lg"
        onClick={handleWishlist}
        className="flex items-center gap-2 px-8 py-3 text-lg font-bold border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <Heart className="w-5 h-5" />
        Add to Wishlist
      </Button>
      
      <Button
        size="lg"
        onClick={handleBuyNow}
        className="flex items-center gap-2 px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        <ShoppingCart className="w-5 h-5" />
        Buy Now
      </Button>
    </div>
  );
};

export default ActionButtons;
