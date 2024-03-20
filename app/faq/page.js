import Hero from '@/Components/faq/Hero';
import QuestionList from '@/Components/faq/QuestionList';

const Page = () => {
  return (
    <section className="mt-[160px] md:mb-[140px] sm:mb-[80px]">
      <Hero />
      <QuestionList />
    </section>
  );
};

export default Page;
