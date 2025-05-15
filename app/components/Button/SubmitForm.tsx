import SVGSpinner from "@/app/assets/SVG/SVGSpinner";

export const SubmitForm = ({
  text,
  isLoading,
  className
}: {
  text: string;
  isLoading?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={`button-form ${isLoading && "bg-my-grey-light"} ${className}`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <SVGSpinner className="size-9 text-primary" /> : text}
    </button>
  );
};
