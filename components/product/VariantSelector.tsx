import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VariantSelectorProps {
  colors: { color: string; colorCode: string }[];
  lengths: string[];
  capSizes: string[];
  selectedColor: string;
  selectedLength: string;
  selectedCapSize: string;
  onColorChange: (color: string) => void;
  onLengthChange: (length: string) => void;
  onCapSizeChange: (capSize: string) => void;
}

export const VariantSelector = ({
  colors,
  lengths,
  capSizes,
  selectedColor,
  selectedLength,
  selectedCapSize,
  onColorChange,
  onLengthChange,
  onCapSizeChange,
}: VariantSelectorProps) => {
  return (
    <div className="space-y-6">
      {/* Color Selector */}
      <div className="space-y-3">
        <Label className="font-body text-sm font-medium">
          Color: <span className="text-muted-foreground">{selectedColor}</span>
        </Label>
        <div className="flex flex-wrap gap-3">
          {colors.map((variant) => (
            <button
              key={variant.color}
              onClick={() => onColorChange(variant.color)}
              className={cn(
                "h-10 w-10 rounded-full border-2 transition-all",
                selectedColor === variant.color
                  ? "border-primary ring-2 ring-primary/30 ring-offset-2"
                  : "border-border hover:border-primary/50"
              )}
              style={{ backgroundColor: variant.colorCode }}
              title={variant.color}
            />
          ))}
        </div>
      </div>

      {/* Length Selector */}
      <div className="space-y-3">
        <Label className="font-body text-sm font-medium">Length</Label>
        <div className="flex flex-wrap gap-2">
          {lengths.map((length) => (
            <button
              key={length}
              onClick={() => onLengthChange(length)}
              className={cn(
                "rounded-lg border px-4 py-2 font-body text-sm transition-all",
                selectedLength === length
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary hover:bg-primary/5"
              )}
            >
              {length}
            </button>
          ))}
        </div>
      </div>

      {/* Cap Size Selector */}
      <div className="space-y-3">
        <Label className="font-body text-sm font-medium">Cap Size</Label>
        <Select value={selectedCapSize} onValueChange={onCapSizeChange}>
          <SelectTrigger className="w-full font-body">
            <SelectValue placeholder="Select cap size" />
          </SelectTrigger>
          <SelectContent>
            {capSizes.map((size) => (
              <SelectItem key={size} value={size} className="font-body">
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground font-body">
          Not sure about your cap size?{" "}
          <button className="text-primary hover:underline">
            View size guide
          </button>
        </p>
      </div>
    </div>
  );
};
