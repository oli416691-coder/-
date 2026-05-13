'use client';

import { motion, Variants } from 'motion/react';
import { ShoppingBag, Truck, MapPin, Phone, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const shopInfo = {
    name: 'আল আশরাফ শপ',
    location: 'শায়েস্তাগঞ্জ, হবিগঞ্জ',
    phone: '01627073642',
    price: '২০০',
  };

  const features = [
    {
      icon: <Star className="w-6 h-6 text-emerald-600" />,
      title: 'প্রিমিয়াম কোয়ালিটি',
      description: 'সফট কটন ফেব্রিক যা পরতে আরামদায়ক এবং দীর্ঘস্থায়ী।'
    },
    {
      icon: <Truck className="w-6 h-6 text-emerald-600" />,
      title: 'সারা দেশে ডেলিভারি',
      description: 'আমরা সারা বাংলাদেশে হোম ডেলিভারি সুবিধা প্রদান করি।'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      title: 'স্টাইলিশ লুক',
      description: 'এই ঈদে নিজের লুককে করুন আরো আকর্ষণীয় ও স্টাইলিশ।'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-emerald-800" />
            <span className="text-xl font-serif font-bold tracking-tight text-emerald-900">
              AL ASHRAFF
            </span>
          </div>
          <a
            href={`tel:${shopInfo.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-medium bg-emerald-900 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            কল করুন
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              কুরবানী স্পেশাল কালেকশন
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-zinc-900">
              {shopInfo.name} <br />
              <span className="text-emerald-800 italic">স্টাইলিশ গেঞ্জি</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              প্রিমিয়াম কোয়ালিটির সফট কটন ফেব্রিক, যা পরতে আরামদায়ক এবং দেখতে অনেক স্টাইলিশ। এই ঈদে আপনার বিশ্বস্ত ফ্যাশন পার্টনার।
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${shopInfo.phone}`}
                id="cta-hero-order"
                className="flex items-center justify-center gap-3 bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/20"
              >
                এখনই অর্ডার করুন
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <span className="text-zinc-400 font-medium">মূল্য:</span>
                <span className="text-2xl font-bold text-zinc-900">৳{shopInfo.price}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6 grayscale opacity-60">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">লোকেশন</span>
                <span className="text-sm font-medium text-zinc-900">{shopInfo.location}</span>
              </div>
              <div className="w-px h-8 bg-zinc-200" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">স্টক</span>
                <span className="text-sm font-medium text-zinc-900">সীমিত স্টক</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/fashion-tshirt/800/1000"
              alt="Stylish T-shirt"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
              <p className="text-sm font-medium opacity-80 italic">&quot;প্রিমিয়াম সফট কটন ফেব্রিক&quot;</p>
              <p className="text-xl font-bold mt-1 tracking-tight">EID COLLECTION 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              কেন আল আশরাফ শপ থেকে কিনবেন?
            </h2>
            <p className="text-zinc-600">আমাদের প্রতিটি গেঞ্জি তৈরি করা হয় অত্যন্ত যত্নের সাথে, যাতে আপনি পান সেরা অভিজ্ঞতা।</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Gallery (Simple) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mb-4">গ্যালারি</h2>
            <p className="text-zinc-600">আমাদের কুরবানী স্পেশাল কালেকশনের কিছু ঝলক। প্রতিটি পিস আপনার লুককে করবে আরো স্মার্ট।</p>
          </div>
          <button className="flex items-center gap-2 font-bold text-emerald-900 hover:gap-4 transition-all">
            সবগুলো দেখুন <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 relative">
            <Image src="https://picsum.photos/seed/t1/600/800" alt="T-shirt 1" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 relative md:mt-12">
            <Image src="https://picsum.photos/seed/t2/600/800" alt="T-shirt 2" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 relative">
            <Image src="https://picsum.photos/seed/t3/600/800" alt="T-shirt 3" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 relative md:mt-12">
            <Image src="https://picsum.photos/seed/t4/600/800" alt="T-shirt 4" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-emerald-950 text-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-serif font-bold tracking-tight">AL ASHRAFF</span>
            </div>
            <p className="text-emerald-300 max-w-xs leading-relaxed">
              আপনার বিশ্বস্ত ফ্যাশন কালেকশন। আমরা চেষ্টা করি সেরা মানের পণ্য সাশ্রয়ী মূল্যে আপনার কাছে পৌঁছে দিতে।
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold">যোগাযোগের ঠিকানা</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-emerald-200">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>{shopInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-200">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href={`tel:${shopInfo.phone}`} className="hover:text-white transition-colors">
                  {shopInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold">অর্ডার করুন</h4>
            <p className="text-emerald-200">সরাসরি কল করে অথবা হোয়াটসঅ্যাপে মেসেজ দিয়ে অর্ডার কনফার্ম করুন।</p>
            <div className="flex gap-4">
               <a 
                 href={`tel:${shopInfo.phone}`}
                 className="flex-1 bg-white text-emerald-900 h-12 rounded-xl flex items-center justify-center font-bold hover:bg-emerald-50 transition-colors"
               >
                 কল করুন
               </a>
               <a 
                 href={`https://wa.me/${shopInfo.phone.replace(/[^0-9]/g, '')}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 border border-emerald-400 text-emerald-400 h-12 rounded-xl flex items-center justify-center font-bold hover:bg-emerald-400/10 transition-colors"
               >
                 হোয়াটসঅ্যাপ
               </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-emerald-900/50 text-center text-sm text-emerald-500 font-medium">
          © {new Date().getFullYear()} আল আশরাফ শপ। সকল স্বত্ব সংরক্ষিত।
        </div>
      </footer>

      {/* Floating Mobile Sticky button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a
          href={`tel:${shopInfo.phone}`}
          className="flex items-center justify-center gap-3 bg-emerald-900 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-950/40 active:scale-95 transition-transform"
        >
          অর্ডার করতে কল করুন
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}
