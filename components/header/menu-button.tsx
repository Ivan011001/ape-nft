import { cn } from "@/lib/utils";

interface IMenuButtonProps {
  label: string;
  isModal?: boolean;
}

const MenuButton = ({ label, isModal }: IMenuButtonProps) => {
  return (
    <div
      className={cn(
        "h-12 w-12 lg:h-20 lg:w-20 bg-neutral-900 bg-opacity-10 rounded-lg lg:rounded-[12px] backdrop-blur-md flex justify-center items-center text-neutral-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline hover:text-white transition-all duration-300",
        isModal && "bg-white text-white hover:text-rose-500 "
      )}
    >
      {label}
    </div>
  );
};

export default MenuButton;
