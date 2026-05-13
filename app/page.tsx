'use client';

import { motion, Variants } from 'motion/react';
import { ShoppingBag, Truck, MapPin, Phone, CheckCircle, ArrowRight, Star, Facebook, Instagram, MessageCircle } from 'lucide-react';
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
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: 'প্রিমিয়াম কোয়ালিটি',
      color: 'bg-green-500',
      description: 'প্রিমিয়াম কোয়ালিটির সফট কটন ফেব্রিক যা পরতে আরামদায়ক।'
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: 'হোম ডেলিভারি',
      color: 'bg-blue-500',
      description: 'সারা বাংলাদেশে হোম ডেলিভারি সুবিধা প্রদান করি।'
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: 'সীমিত স্টক',
      color: 'bg-orange-500',
      description: 'সীমিত স্টক! আকর্ষণীয় এই গেঞ্জি আজই অর্ডার করুন।'
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
    <main className="min-h-screen bg-orange-50 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-red-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
               <ShoppingBag className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">
              AL ASHRAFF SHOP
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-red-700 px-4 py-2 rounded-full border border-red-400">
            <span className="text-sm font-medium">📍 {shopInfo.location}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            
            <motion.div variants={itemVariants}>
              <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest">
                Eid-Ul-Adha Special
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 tracking-tighter">
              কুরবানী স্পেশাল <br />
              <span className="text-red-600">স্টাইলিশ গেঞ্জি</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-700 font-medium max-w-lg leading-relaxed">
              প্রিমিয়াম কোয়ালিটির সফট কটন ফেব্রিক, যা পরতে আরামদায়ক এবং দেখতে অনেক স্টাইলিশ। এই ঈদে নিজের লুককে করুন আরো আকর্ষণীয়।
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="bg-slate-900 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="text-center sm:text-left">
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">অর্ডারের জন্য কল করুন</p>
                  <p className="text-3xl md:text-4xl font-mono font-bold text-yellow-400">{shopInfo.phone}</p>
                </div>
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                >
                  অর্ডার করুন
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8 items-center pt-2">
               <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-xs tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  High Quality
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-xs tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Fast Delivery
               </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 border-[12px] border-orange-100 flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src="https://picsum.photos/seed/fashion-vibrant/800/1000"
                  alt="Stylish T-shirt"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              <div className="mt-8 -mb-16 relative z-10 bg-yellow-400 px-10 py-5 rounded-full shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform cursor-default">
                <span className="text-black font-black text-4xl block leading-none">মাত্র ৳{shopInfo.price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
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
      <footer className="bg-slate-100 py-12 px-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-black text-slate-900 uppercase">✨ {shopInfo.name}</p>
              <p className="text-sm font-medium">আপনার বিশ্বস্ত ফ্যাশন কালেকশন</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${shopInfo.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-bold text-sm uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              High Quality
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              Fast Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              Best Price
            </span>
          </div>
          <div className="text-sm font-bold">
            © {new Date().getFullYear()} সকল স্বত্ব সংরক্ষিত।
          </div>
        </div>
      </footer>

      {/* Floating Mobile Sticky button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a
          href={`tel:${shopInfo.phone}`}
          className="flex items-center justify-center gap-3 bg-red-600 text-white w-full py-5 rounded-3xl font-black text-xl shadow-2xl shadow-red-600/40 active:scale-95 transition-transform border-4 border-white"
        >
          অর্ডার করুন
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}
