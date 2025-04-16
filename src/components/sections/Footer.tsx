export default function Footer() {
  return (
    <footer className="bg-black relative text-gray-400 pt-16 px-6 md:px-20 border-t border-white/10">
      {/* بخش اصلی فوتر */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* برند */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            ARCHI STUDIO
          </h3>
          <p className="mt-2 text-sm">Timeless Architecture & Design</p>
        </div>

        {/* منو */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#home"
            className="hover:text-primary-gold transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="hover:text-primary-gold transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-primary-gold transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* اطلاعات تماس */}
        <div className="flex flex-col items-center text-sm gap-2">
          <p className="text-white font-medium">Contact</p>
          <p>info@yourstudio.com</p>
          <p>+98 901 133 1951</p>
          <p>Shahrak-e Gharb, Tehran, Iran</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-160 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none z-10" />

      {/* خط جدا کننده */}
      <div className="border-t border-white/10 my-8" />

      {/* کپی‌رایت */}
      <div className="text-center text-xs text-gray-500 pb-6">
        <p>© {new Date().getFullYear()} Archi Studio. All rights reserved.</p>
        <a href="https://varmanli.ir" className="mt-1">
          Designed & Developed by
          <span className="text-white font-medium"> Amirhosein Varmanli</span>
        </a>
      </div>
    </footer>
  );
}
