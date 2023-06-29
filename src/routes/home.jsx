import Chicago from '../components/chicago';
import HeadingSection from '../components/heading-section';
import Specials from '../components/specials';
import Testimonials from '../components/testimonials';

export default function Home() {
  return (
    <>
      <HeadingSection />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}
