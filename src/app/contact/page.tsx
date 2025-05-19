import ContactForm from "./components/ContactForm";
import { HeaderStyle } from "../components/HeaderStyle";

export default function ContactPage() {
  return (
    <section className="dark:text-zinc-200">
      <HeaderStyle title="Formulario de Contacto" />
      <div className="p-6">
        <ContactForm />
      </div>
    </section>
  );
}
