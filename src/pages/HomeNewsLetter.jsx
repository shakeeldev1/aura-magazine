import NewsletterForm from "../common/NewsletterForm";

const HomeNewsLetter = () => {
  return (
    <section id="subscribe" className="bg-oxblood py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="eyebrow text-ivory/70">The Magazine Edit</p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          A Little More Style in Your Inbox
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-8 text-ivory/75">
          Get the latest fashion stories, beauty inspiration and culture
          updates delivered straight to your inbox.
        </p>

        <NewsletterForm
          id="newsletter-email"
          className="mx-auto mt-12 max-w-xl text-left"
          labels={{
            placeholder: "Enter your email address",
            subscribe: "Subscribe",
            privacy: "By subscribing, you agree to receive magazine updates by email.",
            success: "Thank you. You are now on the list.",
          }}
        />
      </div>
    </section>
  );
};

export default HomeNewsLetter;
