// Contact.tsx: Renders a contact form with validation and contact information
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CONTACT_ARIA_LABELS,
  CONTACT_FORM_CONTENT,
  contactInfo,
} from "../../../data/sections/contactInfo";
import { ContactProps } from "../../../types";

// Schema validation for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

// Infer form data type from schema
type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact component that renders a form and contact details
 * @param {ContactProps} props - Component props
 * @param {string} [props.title="Get In Touch"] - Section title
 * @param {string} [props.id="contact"] - Section ID
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {JSX.Element} The rendered contact section
 */
const Contact: React.FC<ContactProps> = ({
  title = CONTACT_FORM_CONTENT.defaultTitle,
  id = CONTACT_FORM_CONTENT.defaultId,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  /**
   * Handles form submission with simulated server delay
   * @param {ContactFormData} data - Form data
   */
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setLoading(true);
    setSuccess(false);

    try {
      // Simulate server submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className={`px-5 md:px-20 ${className}`}
      role="region"
      aria-label={CONTACT_ARIA_LABELS.section}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12 text-center"
          id="contact-title"
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
            aria-label={CONTACT_ARIA_LABELS.form}
          >
            <div>
              <label htmlFor="name" className="sr-only">
                {CONTACT_ARIA_LABELS.name}
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold w-full"
                aria-label={CONTACT_ARIA_LABELS.name}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                {CONTACT_ARIA_LABELS.email}
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold w-full"
                aria-label={CONTACT_ARIA_LABELS.email}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                {CONTACT_ARIA_LABELS.message}
              </label>
              <textarea
                {...register("message")}
                id="message"
                placeholder="Your Message"
                rows={6}
                className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none w-full"
                aria-label={CONTACT_ARIA_LABELS.message}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                aria-label={CONTACT_ARIA_LABELS.submit}
                aria-disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Success message */}
            {success && (
              <p
                className="text-green-400 text-sm mt-2 text-center"
                role="alert"
                aria-label={CONTACT_ARIA_LABELS.success}
              >
                {CONTACT_FORM_CONTENT.successMessage}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <address
            className="p-8 md:p-10 flex flex-col justify-center gap-6 text-gray-300 not-italic"
            aria-label="Contact information"
          >
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            {contactInfo.length > 0 ? (
              contactInfo.map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Icon
                    className="text-primary-gold text-xl mt-1"
                    aria-hidden="true"
                  />
                  <p>{label}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No contact information available</p>
            )}
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contact;
