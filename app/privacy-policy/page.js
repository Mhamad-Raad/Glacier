import Content from '@/Components/privacy/Content';

const page = () => {
  return (
    <section className="md:pt-[125px] mb-0 md:pr-[60px] relative overflow-hidden sm:pt-[150px] sm:px-[24px] sm:mb-[100px] md:mb-0">
      <Content />
      <div className="absolute md:right-[-250px] md:top-[100px] sm:right-[-75px] sm:top-[185px]">
        <div className="rounded-full md:w-[424px] md:h-[424px] sm:w-[188px] sm:h-[188px] border-2 border-[#42a9e433] flex justify-center items-center">
          <div className="rounded-full md:w-[353px] md:h-[353px] sm:w-[156px] sm:h-[156px] border-2 border-[#42a9e433] flex justify-center items-center">
            <div className="rounded-full md:w-[290px] md:h-[290px] sm:w-[128px] sm:h-[128px] border-2 border-[#42a9e433]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page