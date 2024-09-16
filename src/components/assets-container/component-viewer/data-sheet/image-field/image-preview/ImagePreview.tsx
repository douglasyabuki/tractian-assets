import { IconButton } from "@/components/ui/buttons/icon-button/IconButton";
import { Icons } from "@/icons/Icons";

interface ImagePreviewProps {
  src: string;
  alt: string;
  onRemove: () => void;
}

export const ImagePreview = ({ src, alt, onRemove }: ImagePreviewProps) => {
  return (
    <>
      <img
        className="h-[14.125rem] w-[21rem] object-fill"
        alt={alt}
        src={src}
      />
      <span className="absolute bottom-0 left-0 right-0 flex h-full translate-y-full flex-col items-center justify-center gap-4 bg-slate-800/75 backdrop-blur-sm transition-transform duration-150 group-hover:translate-y-0">
        <p>Remove image?</p>
        <IconButton Icon={<Icons.TRASH_BEAM />} onClick={onRemove} />
      </span>
    </>
  );
};
