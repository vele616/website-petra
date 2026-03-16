import { useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type CustomCheckboxProps = {
  agreed: boolean;
  id: string;
  setAgreed: (value: boolean) => void;
  label: string;
};

export function CustomCheckbox({
  agreed,
  id,
  setAgreed,
  label,
}: CustomCheckboxProps) {
  const handleChange = useCallback(
    (checked: boolean | "indeterminate") => {
      setAgreed(checked === true);
    },
    [setAgreed],
  );

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-xs text-muted-foreground"
      >
        <Checkbox
          id={id}
          checked={agreed}
          onCheckedChange={handleChange}
          className="h-4 w-4 rounded border-border/70 data-[state=checked]:bg-foreground data-[state=checked]:text-background"
        />
        <span className="font-normal leading-relaxed">
          {label}
        </span>
      </label>
    </div>
  );
}
