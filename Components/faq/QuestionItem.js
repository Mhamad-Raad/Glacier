const QuestionItem = ({item}) => {
  return (
    <div className="flex flex-col px-[33px] pt-[23px] pb-[37px] bg-[#1588ff33] rounded-[15px]">
      <div className="flex justify-center items-center w-[64px] h-[64px] bg-white rounded-full">
        {item.icon}
      </div>
      <h3 className="xl:text-[24px] font-bold mt-[20px] md:text-[18px] sm:text-[14px]">{item.title}</h3>
      <p className="xl:text-[19px] md:text-[14px] sm:text-[12px] text-[#000000bf] md:mt-[16px] sm:mt-[12px] md:w-full sm:w-[90%]">
        {item.description}
      </p>
    </div>
  );
}

export default QuestionItem