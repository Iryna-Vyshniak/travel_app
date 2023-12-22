type Props = {
  text: string;
  variant?: string;
};

const Title = ({ variant, text }: Props) => {
  return <h2 className={`mb-6 text-[24px] md:text-[42px] font-black ${variant}`}>{text}</h2>;
};

export default Title;
