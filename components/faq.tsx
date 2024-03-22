import Section from "./ui/section";
import Title from "./ui/title";

import FAQList from "./faq/faq-list";

import { FAQ_ITEMS } from "@/constants";

const FAQ = () => {
  return (
    <Section id="faq">
      <Title className="mb-6 md:mb-12 lg:mb-20">FAQ</Title>

      <FAQList items={FAQ_ITEMS} />
    </Section>
  );
};

export default FAQ;
