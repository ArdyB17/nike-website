const Subscribe = () => {
  return (
    <section
      className="max-container flex items-center justify-between max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h2 className="font-palanquin text-4xl capitalize font-bold text-center">
        Subscribe to our Newsletter
      </h2>
      <p className="mt-4 text-center info-text max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, doloremque, quod quia, ratione quae quas impedit quibusdam
        laborum tempora.
      </p>

      <form className="flex flex-col gap-5 mt-8 max-w-lg">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-3 border border-gray-300 rounded-lg"
        />
        <button className="bg-coral-red text-white py-3 rounded-lg">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
