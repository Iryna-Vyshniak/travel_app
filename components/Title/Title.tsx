type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <h2 className='text-[20px] md:text-[32px] font-black bg-clip-text text-transparent bg-gradient-to-r from-green-60 via-green-80 to-green-70 drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
      {text}
    </h2>
  );
};

export default Title;
