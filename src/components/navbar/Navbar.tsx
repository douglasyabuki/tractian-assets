import { Icons } from "@/icons/Icons";
import { Company } from "@/services/company";

interface NavbarProps {
  companies: Company[];
  selectedCompany: Company | null;
  onCompanySelect: (company: Company) => void;
}
export const Navbar = ({
  companies,
  // selectedCompany,
  onCompanySelect,
}: NavbarProps) => {
  return (
    <div className="box-border flex h-14 w-screen items-center justify-between bg-slate-800 px-4 py-3 text-sm sm:px-6 md:px-8">
      <Icons.LOGO />
      <div className="flex w-fit justify-end gap-4">
        {companies?.length > 0 &&
          companies
            .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
            .map((company) => (
              <button
                id={company.id}
                className="flex items-center justify-center gap-2 bg-slate-900 px-4 py-2"
                onClick={() => onCompanySelect(company)}
              >
                <Icons.UNIT />
                {company.name}
              </button>
            ))}
      </div>
    </div>
  );
};
