import PhoneInput from './PhoneInput';

const Form = () => {
  return (
    <form className="flex flex-col xl:max-w-[850px]">
      <div className="flex md:gap-[30px] sm:gap-[13px] w-full">
        <div className="flex w-full flex-col">
          <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold">First Name</label>
          <input
            className="w-[100%] xl:h-[53px] h-[40px] border border-[#00000033] rounded-[8px] px-[27px] py-[5px] mt-[12px] sm:text-[14px]"
            placeholder="Lawand"
            type="text"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold">Last Name</label>
          <input
            className="w-full xl:h-[53px] h-[40px] border border-[#00000033] rounded-[8px] px-[27px] py-[5px] mt-[12px] sm:text-[14px]"
            placeholder="Lawand"
            type="text"
          />
        </div>
      </div>
      <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold md:mt-[30px] sm:mt-[19px]">
        Company Name
      </label>
      <input
        className="w-full xl:h-[53px] h-[40px] border border-[#00000033] rounded-[8px] px-[27px] py-[5px] mt-[12px] sm:text-[14px]"
        placeholder="Lawand"
        type="text"
      />
      <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold md:mt-[30px] sm:mt-[19px]">
        Email
      </label>
      <input
        className="w-full xl:h-[53px] h-[40px] border border-[#00000033] rounded-[8px] px-[27px] py-[5px] mt-[12px] sm:text-[14px]"
        placeholder="Lawand@dohrni.com"
        type="text"
      />
      <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold md:mt-[30px] sm:mt-[19px]">Email</label>
      <PhoneInput />
      <label className="xl:text-[21px] sm:text-[14px] text-[#2b3c40] font-bold md:mt-[30px] sm:mt-[19px]">
        Message
      </label>
      <textarea
        className="w-full h-[127px] resize-none border border-[#00000033] rounded-[8px] px-[27px] xl:py-[15px] py-[5px] mt-[12px] sm:text-[14px]"
        placeholder="Tell us what we can help you with"
        type="text"
      />
      <div className="flex items-start gap-[6px] md:mt-[30px] sm:mt-[23px] xl:w-[85%] md:w-[80%]">
        <div className="md:w-[40px] sm:w-[21px] xl:w-[30px] xl:h-[21px] md:h-[18px] sm:h-[13px] rounded-[8px] border-[1px] border-[#00000033] mt-[2px]" />
        <p className="xl:text-[18px] sm:text-[12px] text-[#2b3c40] font-[600]">
          I’d like to receive more information about the company, i understand and agree to the{' '}
          <span className="xl:text-[18px] md:text-[14px] sm:text-[12px] text-[#1588ff] font-[600]">Privacy Policy</span>
        </p>
      </div>
      <button
        type="button"
        className="w-full xl:h-[53px] h-[41px] bg-[#1588ff] xl:text-[21px] sm:text-[14px] text-white rounded-[8px] font-[600] mt-[35px]"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
