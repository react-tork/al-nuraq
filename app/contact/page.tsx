import PageBanner from "@/components/common/PageBanner";
import ContactIcons from "@/components/contact/ContactIcons";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />
      <ContactIcons />
      <ContactForm />
      <ContactMap />
    </main>
  );
}