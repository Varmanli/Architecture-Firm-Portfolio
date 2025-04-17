export default function Aboute() {
  return (
    <section
      id="about-us"
      className="bg-hero-dark py-20 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src="./images/image4.webp"
            alt="Architecture Studio"
            className="rounded-lg object-cover w-full h-auto shadow-lg hover:scale-smooth"
          />
        </div>

        {/* Right Side - Text Content */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
            Who we are
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-primary-gold font-serif">
            About Our Studio
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            At Archi Studio, we believe in timeless design rooted in modern
            functionality. Our team combines creativity with precision to create
            architectural experiences that inspire and endure.
          </p>
        </div>
      </div>
    </section>
  );
}
