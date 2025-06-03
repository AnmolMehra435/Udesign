import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { ShoppingBag, MapPin, Phone, User, Mail, Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

// Types
interface FormData {
  name: string;
  contact: string;
  altContact: string;
  email: string;
  street: string;
  area: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
}

interface DeliveryStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onNext: () => void;
}

interface OrderSummaryStepProps {
  formData: FormData;
  onBack: () => void;
  onNext: () => void;
}

interface PaymentStepProps {
  formData: FormData;
  onBack: () => void;
  onSubmit: () => void;
  isLoading: boolean;
}

// Step components
const DeliveryStep = ({ formData, setFormData, onNext }: DeliveryStepProps) => {
  return (
    <div className="space-y-6">
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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
            value={formData.altContact}
            onChange={(e) => setFormData({ ...formData, altContact: e.target.value })}
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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
          />
        </div>
      </div>

      {/* Area & Landmark */}
      <div className="space-y-2">
        <Label htmlFor="area">Area & Landmark</Label>
        <Input
          id="area"
          placeholder="Enter area and nearby landmark"
          value={formData.area}
          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
        />
      </div>

      {/* Post Code */}
      <div className="space-y-2">
        <Label htmlFor="postcode">Post Code *</Label>
        <Input
          id="postcode"
          placeholder="Enter post code"
          required
          value={formData.postcode}
          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
        />
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label htmlFor="city">City *</Label>
        <Input
          id="city"
          placeholder="Enter city"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>

      {/* State */}
      <div className="space-y-2">
        <Label htmlFor="state">State *</Label>
        <Input
          id="state"
          placeholder="Enter state"
          required
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
      </div>

      {/* Country */}
      <div className="space-y-2">
        <Label htmlFor="country">Country *</Label>
        <Input
          id="country"
          placeholder="Enter country"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
      </div>

      <Button 
        onClick={onNext}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white"
      >
        Continue to Order Summary
      </Button>
    </div>
  );
};

const OrderSummaryStep = ({ formData, onBack, onNext }: OrderSummaryStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Delivery Address</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <p className="font-medium">{formData.name}</p>
            <p>{formData.street}</p>
            <p>{formData.area}</p>
            <p>{`${formData.city}, ${formData.state} ${formData.postcode}`}</p>
            <p>{formData.country}</p>
            <p>Phone: {formData.contact}</p>
            {formData.altContact && <p>Alt. Phone: {formData.altContact}</p>}
            {formData.email && <p>Email: {formData.email}</p>}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Order Details</h3>
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
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline"
          onClick={onBack}
          className="w-full"
        >
          Back to Delivery
        </Button>
        <Button 
          onClick={onNext}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white"
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

const PaymentStep = ({ formData, onBack, onSubmit, isLoading }: PaymentStepProps) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value);
    setShowCardDetails(value === 'card');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
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

        {/* Card Details */}
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
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline"
          onClick={onBack}
          className="w-full"
        >
          Back to Order Summary
        </Button>
        <Button 
          onClick={onSubmit}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          disabled={isLoading || !selectedPaymentMethod}
        >
          {isLoading ? "Processing..." : "Place Order"}
        </Button>
      </div>
    </div>
  );
};

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, title: 'Delivery' },
    { number: 2, title: 'Order Summary' },
    { number: 3, title: 'Payment' }
  ];

  return (
    <div className="w-full py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-5 w-full h-0.5 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full bg-gray-900 dark:bg-gray-100 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    step.number === currentStep
                      ? 'border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                      : step.number < currentStep
                      ? 'border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.number < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <span 
                  className={`mt-2 text-sm font-medium ${
                    step.number === currentStep
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    altContact: '',
    email: '',
    street: '',
    area: '',
    postcode: '',
    city: '',
    state: '',
    country: ''
  });

  const handleSubmit = () => {
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DeliveryStep 
            formData={formData}
            setFormData={setFormData}
            onNext={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <OrderSummaryStep 
            formData={formData}
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        );
      case 3:
        return (
          <PaymentStep 
            formData={formData}
            onBack={() => setCurrentStep(2)}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <StepIndicator currentStep={currentStep} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            {renderStep()}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 