import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: "Shahrak-e Gharb, Tehran, Iran",
  },
  {
    icon: FaPhoneAlt,
    label: "+98 901 133 1951",
  },
  {
    icon: FaEnvelope,
    label: "info@yourstudio.com",
  },
];
// Constants for accessibility and content
export const CONTACT_ARIA_LABELS = {
  section: "Contact form and information",
  form: "Contact us form",
  name: "Your name",
  email: "Your email address",
  message: "Your message",
  submit: "Submit contact form",
  success: "Form submission success message",
};

export const CONTACT_FORM_CONTENT = {
  defaultTitle: "Get In Touch",
  defaultId: "contact",
  successMessage: "✅ Your message was sent successfully!",
};
