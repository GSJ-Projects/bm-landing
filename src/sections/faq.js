/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How do I know Betting Magic Works?',
    contents: (
      <div>
        Well, give it a try. Betting Magic is a betting platform that takes advantage of live odds and a special algorithm we use to increase
        your chances of winning.
      </div>
    ),
  },
  {
    title: "What's your refund policy?",
    contents: (
      <div>
        If you are ever dissatisfied with the experience of Betting Magic, we'll refund your money. 
        However, due to the nature of the product, if you aren't satisified with your wins, we cannot refund
        due to that. 
      </div>
    ),
  },
  {
    title: `How do I contact you?`,
    contents: (
      <div>
        Simple. Email us at <a href="mailto:support@bettingmagic.com">support@bettingmagic.com</a>
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
