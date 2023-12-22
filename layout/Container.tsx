type Props = {
  variant?: string;
  children: React.ReactNode;
};

const Container = ({ variant, children }: Props) => {
  return (
    <div
      className={
        !variant
          ? 'relative max-container padding-container flex flex-col items-center justify-center gap-4 py-5'
          : `${variant}`
      }
    >
      {children}
    </div>
  );
};

export default Container;
