import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  careInstructions: string[];
  badge?: "New" | "Bestseller" | "Sale";
}

export const ProductInfo = ({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  description,
  careInstructions,
  badge,
}: ProductInfoProps) => {
  return (
    <div className="space-y-4">
      {/* Badge */}
      {badge && (
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium font-body ${
            badge === "Sale"
              ? "bg-destructive/10 text-destructive"
              : badge === "New"
              ? "bg-primary/10 text-primary"
              : "bg-gold/10 text-gold"
          }`}
        >
          {badge}
        </span>
      )}

      {/* Name */}
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
        {name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-gold text-gold"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
        <span className="font-body text-sm text-muted-foreground">
          {rating} ({reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold text-foreground">
          ${price}
        </span>
        {originalPrice && (
          <span className="font-body text-lg text-muted-foreground line-through">
            ${originalPrice}
          </span>
        )}
        {originalPrice && (
          <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-sm font-medium text-destructive font-body">
            Save ${originalPrice - price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="font-body text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="care">
          <AccordionTrigger className="font-body font-medium">
            Care Instructions
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {careInstructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {instruction}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger className="font-body font-medium">
            Shipping & Returns
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Free Shipping:</strong> On all orders over $150
              </p>
              <p>
                <strong className="text-foreground">Processing:</strong> Orders ship within 1-2 business days
              </p>
              <p>
                <strong className="text-foreground">Returns:</strong> 30-day return policy for unworn items
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="details">
          <AccordionTrigger className="font-body font-medium">
            Product Details
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>• 100% Virgin Human Hair</p>
              <p>• HD Lace / Swiss Lace Options</p>
              <p>• Pre-plucked Hairline with Baby Hairs</p>
              <p>• Bleached Knots</p>
              <p>• 150% - 180% Density</p>
              <p>• Can be Dyed, Bleached & Heat Styled</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
