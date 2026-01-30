import { useParams } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { PRODUCTS } from "../dummydata/dummydata";

interface Props {
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

export const ProductLandingPage: React.FC<Props> = ({
  onAddToCart,
  onToggleWishlist,
  wishlist,
}) => {
  const { id } = useParams();

  // ✅ Directly find from dummy data
  const product = PRODUCTS.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <p className="text-center mt-20 text-red-500">
        Product not found
      </p>
    );
  }

  const isWishlisted = wishlist.includes(String(product.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="rounded-2xl overflow-hidden border">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-emerald-600 uppercase mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-gray-900 mb-6">
            ₹{product.price.toFixed(2)}
          </p>

          <div className="flex gap-4">
            <Button
              variant="primary"
              onClick={() => onAddToCart(String(product.id))}
            >
              <Icon name="ShoppingCart" />
              Add to Cart
            </Button>

            <Button
              variant={isWishlisted ? "danger" : "secondary"}
              onClick={() => onToggleWishlist(String(product.id))}
            >
              <Icon name="Heart" />
              {isWishlisted ? "Liked" : "Like"}
            </Button>
          </div>
        </div>
      </div>

      {/* FULL WIDTH DESCRIPTION */}
      <div className="border-t pt-12">
        <h2 className="text-2xl font-bold mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          {product.longDescription}
        </p>
      </div>
    </div>
  );
};
