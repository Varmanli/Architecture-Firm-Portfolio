import ButtonLink from "../components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <h1 className="text-6xl font-bold text-primary-gold font-serif">404</h1>
        <p className="text-xl text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <ButtonLink href="/" label="← Back to Home" />
      </div>
    </section>
  );
}
