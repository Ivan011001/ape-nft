import Section from "./ui/section";
import Title from "./ui/title";

import ContactDescription from "./contact/contact-description";
import ContactForm from "./contact/contact-form";

const Contact = () => {
  return (
    <Section>
      <Title className="mb-6 md:mb-10 lg:mb-20">Are you in?</Title>

      <div className="flex flex-col items-center gap-y-4 md:gap-y-6 lg:gap-y-10">
        <ContactDescription />
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
