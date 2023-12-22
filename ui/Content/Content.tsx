interface Props {
  variant?: string;
  children: React.ReactNode;
}

const Content = ({ variant, children }: Props) => {
  return <p className={`text-base md:text-lg text-gray-60 ${variant}`}>{children}</p>;
};

export default Content;
