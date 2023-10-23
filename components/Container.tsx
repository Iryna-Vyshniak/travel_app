type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className='max-container padding-container flex flex-col gap-20 mt-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      {children}
    </div>
  );
};

export default Container;
