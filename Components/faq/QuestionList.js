import QuestionItem from './QuestionItem';

import QuestionsData from '@/data/faq/questionsData';

const QuestionList = () => {
  return (
    <section className='grid lg:grid-cols-3 xl:mt-[49px] mt-[26px] xl:px-[111px] md:px-[60px] sm:px-[24px] xl:gap-[26px] gap-[20px] md:grid-cols-2'>
      {
        QuestionsData.map((item, index) => {
          return (
            <QuestionItem key={index} item={item} />
          )
        })
      }
    </section>
  );
};

export default QuestionList;
