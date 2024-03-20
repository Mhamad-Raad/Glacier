import Details from '@/Components/contact/Details';
import Form from '@/Components/contact/Form';

const page = () => {
  return (
    <section className="flex md:flex-row sm:flex-col justify-between sm:gap-[75px] md:gap-[114px] sm:px-[24px] md:px-[60px] md:my-[160px] sm:mt-[160px] sm:mb-[100px]">
      <Details />
      <Form />
    </section>
  );
}

export default page;