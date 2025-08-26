import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Star,
  Users,
  Shield,
  Truck,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { UserNav } from "@/components/user-nav";
import Image from "next/image";

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality sound with noise cancellation",
      price: 299.99,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your health and fitness goals",
      price: 199.99,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Eco-Friendly Water Bottle",
      description: "Sustainable and stylish hydration",
      price: 29.99,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image: "https://i.ibb.co.com/CgPW7mn/download-3.jpg",
      href: "/products/electronics",
    },
    {
      name: "Fashion",
      image: "/placeholder.svg?height=100&width=100",
      href: "/products/fashion",
    },
    {
      name: "Home & Living",
      image: "/placeholder.svg?height=100&width=100",
      href: "/products/home",
    },
    {
      name: "Eco-Friendly",
      image: "/placeholder.svg?height=100&width=100",
      href: "/products/eco",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      quote:
        "EcoShop's products are top-notch! The quality and sustainability focus make every purchase worthwhile.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Loyal Customer",
      quote:
        "Fast shipping and excellent customer service. I love the eco-friendly packaging!",
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Top Bar */}
      <div className="bg-gradient-to-r from-[#262626] to-[#262626] text-white py-4 text-center text-sm font-medium shadow-md">
        <p>
          🚚 Free Shipping on Orders Over{" "}
          <span className="font-semibold">$50</span> | 💳 30-Day Money-Back
          Guarantee
        </p>
      </div>

      {/* 2. Navigation */}
      <nav className="border-b w-11/12 mx-auto px-2  sm:px-4 lg:px-6 border-border  backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className=" ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <span className="font-serif font-bold text-2xl text-foreground">
                  EcoShop
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/products"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <UserNav />
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 to-background py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Discover Premium Sustainable Products
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Shop our curated collection of eco-friendly, high-quality products
              designed for style and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of product categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                    <div>
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={120}
                        height={120}
                        className="mx-auto mb-4 w-24 h-24 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                      />

                      <h3 className="font-serif font-semibold text-lg">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Features Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Fast & Free Shipping
              </h3>
              <p className="text-muted-foreground">
                Free delivery on orders over $50
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Secure Payments
              </h3>
              <p className="text-muted-foreground">Shop with confidence</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                24/7 Support
              </h3>
              <p className="text-muted-foreground">
                We're here to help anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-shadow duration-300 bg-card border-border"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground"
                    >
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-2xl text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Promotions Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Exclusive Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take advantage of our limited-time promotions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6 flex items-center">
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    Summer Sale
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Up to 30% off on select electronics
                  </p>
                  <Link href="/products/sale">
                    <Button variant="outline">Shop Sale</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardContent className="p-6 flex items-center">
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    Eco Bundle
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Save 20% when you buy eco-friendly bundles
                  </p>
                  <Link href="/products/bundles">
                    <Button variant="outline">Explore Bundles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(testimonial.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, product updates,
              and eco-friendly tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-64"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="h-8 w-8 text-accent" />
                <span className="font-serif font-bold text-xl">EcoShop</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Your trusted partner for premium, sustainable products. We're
                committed to quality and exceptional customer service.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com"
                  className="text-background/80 hover:text-accent"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-background/80 hover:text-accent"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="text-background/80 hover:text-accent"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2025 EcoShop. All rights reserved. Built with Next.js and v0.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
