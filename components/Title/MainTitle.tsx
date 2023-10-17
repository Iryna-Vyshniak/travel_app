type Props = {
  text: string;
};

const MainTitle = ({ text }: Props) => {
  return (
    <h1 className='text-[46px] md:text-[92px] text-white font-black text-center drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
      {text}
    </h1>
  );
};

export default MainTitle;
