import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full ${variant} ${full && 'w-full'}`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={16} height={16} loading='lazy' />}
      <label className='text-base whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  );
};

export default Button;
