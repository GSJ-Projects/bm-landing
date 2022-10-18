/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: "What's the catch?",
    title: "What's the catch?",
    text:
      "Well, you've gotta be fast. Our method takes advantage of live spreads and a principle known as 'reversion to the mean'. In other words, when we say it's time to bet. It's time to bet."
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Be the envy of your friends',
    title: 'Be the envy of your friends',
    text:
      'Your friends will wonder what\'s going on when you start abusing your favorite sportsbooks bank acount.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Cloud',
    title: 'Fast and Secure',
    text:
      'We utlize the latest technology to get the action to you fast and securely-so you can focus on winning',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Customize your experience',
    text:
      'Filter by weeks, teams, and conferences to bet on your favorite games.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Killer win rate',
    title: 'Winning Strategy',
    text:
      'We focus on doing one thing well. We won\'t confuse you with fancy strategies and tricks, just a simple winning strategy.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      'Questions? We got answers. We\'re here to help you out when you need it.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="LFG"
          title="BetGenie delivers Live Action Fun"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
