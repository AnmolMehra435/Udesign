import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import { ShoppingBag, MapPin, Phone, User, Mail } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value);
    setShowCardDetails(value === 'card');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Dummy order placement - would connect to backend in real implementation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. We'll be in touch soon.",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <ShoppingBag className="h-8 w-8 text-gray-900 dark:text-gray-100" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100">
            Complete Your Order
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-semibold">
            Please fill in your details to place the order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Enter your contact number"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              {/* Alternate Contact */}
              <div className="space-y-2">
                <Label htmlFor="altContact">Alternate Contact (Optional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="altContact"
                    type="tel"
                    placeholder="Enter alternate contact number"
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div className="space-y-2">
                <Label htmlFor="street">Street Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="street"
                    placeholder="Enter your street address"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              {/* Area & Landmark */}
              <div className="space-y-2">
                <Label htmlFor="area">Area & Landmark</Label>
                <Input
                  id="area"
                  placeholder="Enter area and nearby landmark"
                />
              </div>

              {/* Post Code */}
              <div className="space-y-2">
                <Label htmlFor="postcode">Post Code *</Label>
                <Input
                  id="postcode"
                  placeholder="Enter post code"
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Enter city"
                  required
                />
              </div>

              {/* State */}
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  placeholder="Enter state"
                  required
                />
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  placeholder="Enter country"
                  required
                />
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <Select onValueChange={handlePaymentMethodChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="netbanking">Net Banking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Card Details (shown only when card payment is selected) */}
              {showCardDetails && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="Enter card number"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        type="password"
                        maxLength={3}
                        placeholder="***"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </Card>

          {/* Order Summary */}
          <Card className="p-6">
            <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Custom Design</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">$99.99</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">$9.99</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Total</span>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">$109.98</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 