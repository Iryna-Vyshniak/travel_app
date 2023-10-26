interface Props {
  id?: string;
  variant?: string;
  children: React.ReactNode;
}

const Section = ({ id, variant, children }: Props) => {
  return (
    <section
      id={id}
      className={
        !variant ? 'relative flexCenter flex-col' : `${variant} relative flexCenter flex-col`
      }
    >
      {children}
    </section>
  );
};

export default Section;
