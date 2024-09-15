interface ImageFieldProps {
  id: string;
}

export const ImageField = ({ id }: ImageFieldProps) => {
  return (
    <div className="h-[14.125rem] w-[21rem] rounded-md bg-gray-900">
      <img></img>
    </div>
  );
};
