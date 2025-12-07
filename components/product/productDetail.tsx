"use client";
import { ImageGallery } from "@/components/product/ImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { VariantSelector } from "@/components/product/VariantSelector";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/providers/CartContext";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductDetail(data: { id: string }) {
  const product = getProductById(data.id || "");
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedLength, setSelectedLength] = useState("");
  const [selectedCapSize, setSelectedCapSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {}, [product]);
  if (product) {
    setSelectedColor(product.variants[0]?.color || "");
    setSelectedLength(product.lengths[0] || "");
    setSelectedCapSize(product.capSizes[0] || "");
  }

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">
          Product Not Found
        </h1>
        <p className="font-body text-muted-foreground mb-6">
          {"The product you're looking for doesn't exist."}
        </p>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const selectedVariant = product.variants.find(
    (v) => v.color === selectedColor
  );
  const images = selectedVariant?.images || product.variants[0]?.images || [];

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: images[0],
      color: selectedColor,
      length: selectedLength,
      capSize: selectedCapSize,
      quantity,
    });
    toast.success(`${product.name} added to cart!`, {
      description: `${selectedColor} • ${selectedLength} • ${selectedCapSize}`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto py-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container mx-auto pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <ImageGallery images={images} productName={product.name} />

          {/* Product Details */}
          <div className="space-y-8">
            <ProductInfo
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              description={product.description}
              careInstructions={product.careInstructions}
              badge={product.badge}
            />

            {/* Variant Selector */}
            <VariantSelector
              colors={product.variants.map((v) => ({
                color: v.color,
                colorCode: v.colorCode,
              }))}
              lengths={product.lengths}
              capSizes={product.capSizes}
              selectedColor={selectedColor}
              selectedLength={selectedLength}
              selectedCapSize={selectedCapSize}
              onColorChange={setSelectedColor}
              onLengthChange={setSelectedLength}
              onCapSizeChange={setSelectedCapSize}
            />

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-body text-sm font-medium">Quantity</span>
                <div className="flex items-center gap-2 rounded-lg border border-border">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-body font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 font-body"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart — ${product.price * quantity}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-3">
                  <img
                    src={relatedProduct.variants[0]?.images[0]}
                    alt={relatedProduct.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  ${relatedProduct.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
