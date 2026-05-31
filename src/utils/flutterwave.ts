export interface FlutterwavePaymentOptions {
  email: string;
  name: string;
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
}

declare global {
  interface Window {
    FlutterwaveCheckout: (options: any) => void;
  }
}

// ── Retrieve public key from env or localStorage ──────────────────────────────
const getPublicKey = (): string => {
  // In production, set VITE_FLUTTERWAVE_PUBLIC_KEY in your .env file
  const envKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;
  if (envKey && envKey !== 'undefined') return envKey;

  // Fallback: allow override via localStorage for dev/testing
  const localKey = localStorage.getItem('lumen_flutterwave_key');
  if (localKey) return localKey;

  // Last resort sandbox key (shows payment UI but won't charge real money)
  return 'FLWPUBK_TEST-SANDBOXDEMOKEY-X';
};

export const initializeFlutterwavePayment = ({
  email,
  name,
  amount,
  onSuccess,
  onClose
}: FlutterwavePaymentOptions) => {
  if (typeof window.FlutterwaveCheckout !== 'function') {
    // SDK not loaded — try injecting it dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.onload = () => {
      // Retry after SDK loads
      initializeFlutterwavePayment({ email, name, amount, onSuccess, onClose });
    };
    script.onerror = () => {
      alert('Payment gateway failed to load. Check your internet connection and try again.');
    };
    document.head.appendChild(script);
    return;
  }

  const publicKey = getPublicKey();

  window.FlutterwaveCheckout({
    public_key: publicKey,
    tx_ref: `lumen_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
    amount: amount,
    currency: 'USD',
    payment_options: 'card, mobilemoneyghana, ussd',
    customer: {
      email: email,
      name: name,
    },
    customizations: {
      title: 'Lumen Pro Access',
      description: 'Upgrade to unlock unlimited Premium AI Features',
      logo: 'https://em-content.zobj.net/source/apple/354/brain_1f9e0.png',
    },
    callback: function (data: any) {
      if (data.status === 'successful' || data.status === 'completed') {
        onSuccess();
      }
    },
    onclose: function () {
      onClose();
    }
  });
};
