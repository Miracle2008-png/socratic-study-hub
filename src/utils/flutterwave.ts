export interface FlutterwavePaymentOptions {
  email: string;
  name: string;
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
}

// Ensure TypeScript knows about the global FlutterwaveCheckout function
declare global {
  interface Window {
    FlutterwaveCheckout: (options: any) => void;
  }
}

export const initializeFlutterwavePayment = ({
  email,
  name,
  amount,
  onSuccess,
  onClose
}: FlutterwavePaymentOptions) => {
  if (typeof window.FlutterwaveCheckout !== 'function') {
    console.error("Flutterwave SDK not loaded");
    alert("Payment gateway is temporarily unavailable. Please try again later.");
    return;
  }

  window.FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X", // Placeholder Test Key
    tx_ref: `tx_ref_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
    amount: amount,
    currency: "USD",
    payment_options: "card, mobilemoneyghana, ussd",
    customer: {
      email: email,
      name: name,
    },
    customizations: {
      title: "Lumen Pro Access",
      description: "Upgrade to Premium AI Features",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg", // Placeholder logo
    },
    callback: function (data: any) {
      console.log("Flutterwave payment callback data:", data);
      if (data.status === "successful") {
        onSuccess();
      }
    },
    onclose: function () {
      onClose();
    }
  });
};
