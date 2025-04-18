import { contactInfo } from "../../../data/contactInfo";
import { ContactProps } from "../../../types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact({
  title = "Get In Touch",
  id = "contact",
  className = "",
}: ContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSuccess(false);

    // شبیه‌سازی ارسال به سرور
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    setLoading(false);
    setSuccess(true);
    reset();
  };

  return (
    <section id={id} className={`px-5 md:px-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12 text-center"
          data-aos="fade-up"
        >
          {title}
        </h2>

        {/* Contact card */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-white/10"
            noValidate
          >
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold w-full"
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold w-full"
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows={6}
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none w-full"
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* دکمه ارسال */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* پیام موفقیت */}
            {success && (
              <p className="text-green-400 text-sm mt-2 text-center">
                ✅ Your message was sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            {contactInfo.map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex items-start gap-4">
                <Icon className="text-primary-gold text-xl mt-1" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
