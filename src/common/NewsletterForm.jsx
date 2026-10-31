import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Designed for dark backgrounds (ink or oxblood).
const NewsletterForm = ({ id, labels, className = "" }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter service here.
    console.log("Newsletter email:", email);
    setEmail("");
    setSubscribed(true);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor={id} className="sr-only">
        {labels.placeholder}
      </label>

      <div className="flex items-end gap-4 border-b border-ivory/60 pb-3 transition-colors duration-300 focus-within:border-ivory">
        <input
          id={id}
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSubscribed(false);
          }}
          placeholder={labels.placeholder}
          className="min-w-0 flex-1 bg-transparent font-sans text-base text-ivory outline-none placeholder:text-ivory/55 sm:text-sm"
        />

        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-medium tracking-[0.22em] text-ivory uppercase transition-opacity duration-300 hover:opacity-70"
        >
          {labels.subscribe}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-4 min-h-4 font-sans text-xs leading-5 text-ivory/70"
      >
        {subscribed ? labels.success : labels.privacy}
      </p>
    </form>
  );
};

export default NewsletterForm;
