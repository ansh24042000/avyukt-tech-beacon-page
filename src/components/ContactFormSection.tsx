
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const options = [
  "ERP Software",
  "Restaurant Management System",
  "School & Education Software",
  "Retail & Billing",
  "E-commerce Integration",
  "Inventory & HRM",
  "Other",
];

const ContactFormSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon to arrange your free consultation.",
      });
    }, 1200);
  }

  return (
    <section id="contact" className="bg-white py-14 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto bg-white/90 shadow-form rounded-2xl p-7 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Let’s Build Your Perfect Software
          </h2>
          <div className="mb-6 text-gray-500 text-center">
            Get expert guidance, a free demo and tailored advice.
          </div>
          <form onSubmit={handleSubmit} className="grid gap-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border-gray-300 px-4 py-2 bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={submitting || submitted}
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border-gray-300 px-4 py-2 bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={submitting || submitted}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-gray-700 mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  pattern="^[0-9+ ]{7,18}$"
                  minLength={7}
                  maxLength={18}
                  autoComplete="tel"
                  className="w-full rounded-lg border-gray-300 px-4 py-2 bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={submitting || submitted}
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1" htmlFor="service">
                  Service Interested In
                </label>
                <select
                  id="service"
                  required
                  className="w-full rounded-lg border-gray-300 px-4 py-2 bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={submitting || submitted}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {options.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                required
                className="w-full rounded-lg border-gray-300 px-4 py-2 bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={submitting || submitted}
              />
            </div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center px-8 py-3 rounded-lg font-bold bg-primary text-white shadow-lg hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                submitting || submitted ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={submitting || submitted}
            >
              {submitting ? "Submitting..." : submitted ? "Request Submitted" : "Request a Free Consultation"}
            </button>
            {submitted && (
              <div className="text-green-600 text-center font-medium mt-2 animate-fade-in">
                We'll reach out soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
