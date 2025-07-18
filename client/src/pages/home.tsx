import { motion } from "framer-motion";
import { MeshBackground } from "@/components/ui/mesh-background";
import { MagicalButton } from "@/components/ui/magical-button";
import { SectionCard } from "@/components/ui/section-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useMagicDust } from "@/hooks/use-magic-dust";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { 
  Gem, 
  Coins, 
  Megaphone, 
  MapPin, 
  Users, 
  Globe, 
  Hash, 
  Palette, 
  Code,
  Check,
  WandSparkles,
  NotebookPen,
  Quote,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { toast } = useToast();
  useMagicDust();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Your message has been sent to the mystical realm. We will respond soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black-medium/90 backdrop-blur-sm border-b border-emerald-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Clover Logo" className="h-14 w-14 mr-2 rounded-full" />
              <span className="font-cinzel text-2xl font-bold text-gold-soft">CLOVER</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('hero')} className="nav-link font-cinzel text-gray-300 px-3 py-2 text-base font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link font-cinzel text-gray-300 px-3 py-2 text-base font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="nav-link font-cinzel text-gray-300 px-3 py-2 text-base font-medium">Services</button>
                <button onClick={() => scrollToSection('pricing')} className="nav-link font-cinzel text-gray-300 px-3 py-2 text-base font-medium">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link font-cinzel text-gray-300 px-3 py-2 text-base font-medium">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <MeshBackground className="min-h-screen" variant="light">
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-rich/50 to-black-rich"></div>
          <motion.div 
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="font-cinzel text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="text-gold-soft drop-shadow-lg">
                CLOVER
              </span>
            </motion.h1>
            <motion.p 
              className="font-cinzel text-xl md:text-2xl lg:text-3xl mb-8 text-gold-soft/90"
              variants={fadeInUp}
            >
              Unleash the magic of marketing
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button 
                className="btn-magical-transparent font-cinzel font-semibold px-8 py-4 text-lg rounded-lg"
                onClick={() => scrollToSection('services')}
              >
                Explore our magic
              </button>
            </motion.div>
          </motion.div>
        </section>
      </MeshBackground>

      {/* About Section */}
      <MeshBackground className="py-20" variant="dark">
        <section id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-gold-soft">
                The Five Enchanted Leaves
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each leaf of our mystical clover represents a fundamental pillar of marketing magic
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full bg-black-override">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-medium to-emerald-dark rounded-full flex items-center justify-center">
                      <Gem className="text-gold-soft text-lg" />
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold mb-3 text-gold-soft">Product</h3>
                    <p className="text-gray-300 text-sm">The essence of your offering, crafted with precision and imbued with value.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full bg-black-override">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-medium to-emerald-dark rounded-full flex items-center justify-center">
                      <Coins className="text-gold-soft text-lg" />
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold mb-3 text-gold-soft">Price</h3>
                    <p className="text-gray-300 text-sm">The alchemical balance between value and cost, transmuting worth into exchange.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full bg-black-override">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-medium to-emerald-dark rounded-full flex items-center justify-center">
                      <Megaphone className="text-gold-soft text-lg" />
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold mb-3 text-gold-soft">Promotion</h3>
                    <p className="text-gray-300 text-sm">The art of enchantment through storytelling, weaving compelling narratives.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full bg-black-override">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-medium to-emerald-dark rounded-full flex items-center justify-center">
                      <MapPin className="text-gold-soft text-lg" />
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold mb-3 text-gold-soft">Place</h3>
                    <p className="text-gray-300 text-sm">Strategic positioning across realms, ensuring your presence manifests solutions.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full bg-black-override">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-medium to-emerald-dark rounded-full flex items-center justify-center">
                      <Users className="text-gold-soft text-lg" />
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold mb-3 text-gold-soft">People</h3>
                    <p className="text-gray-300 text-sm">The human connection that breathes life into every interaction and loyalty.</p>
                  </div>
                </SectionCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </MeshBackground>

      {/* Services Section */}
      <MeshBackground className="py-20" variant="light">
        <section id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-gold-soft">
                Our Spellbook
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ancient wisdom meets modern magic in our comprehensive marketing services
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full">
                  <div className="text-center">
                    <Globe className="text-4xl text-emerald-medium mb-4 mx-auto" />
                    <h3 className="font-cinzel text-xl font-semibold mb-3 text-gold-soft">Digital Presence</h3>
                    <p className="text-gray-300 text-sm">Cultivate a strong online presence and engage with your audience across all major social platforms.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full">
                  <div className="text-center">
                    <Hash className="text-4xl text-emerald-medium mb-4 mx-auto" />
                    <h3 className="font-cinzel text-xl font-semibold mb-3 text-gold-soft">User Acquisition</h3>
                    <p className="text-gray-300 text-sm">Attract new customers and expand your reach through targeted campaigns and strategic outreach.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full">
                  <div className="text-center">
                    <Palette className="text-4xl text-emerald-medium mb-4 mx-auto" />
                    <h3 className="font-cinzel text-xl font-semibold mb-3 text-gold-soft">Design Enchantment</h3>
                    <p className="text-gray-300 text-sm">Build captivating and high-performing websites designed to convert visitors into loyal customers.</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="mystical" className="h-full">
                  <div className="text-center">
                    <Code className="text-4xl text-emerald-medium mb-4 mx-auto" />
                    <h3 className="font-cinzel text-xl font-semibold mb-3 text-gold-soft">Brand Strategy & Design</h3>
                    <p className="text-gray-300 text-sm">Forge a unique brand identity that resonates with your target market and sets you apart from the competition.</p>
                  </div>
                </SectionCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </MeshBackground>

      {/* Pricing Section */}
      <MeshBackground className="py-20" variant="dark">
        <section id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-gold-soft">
                Grimoires of Power
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your path to marketing mastery with our enchanted service packages
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <SectionCard variant="grimoire" className="h-full bg-black-override">
                  <div className="text-center h-full flex flex-col">
                    <h3 className="font-cinzel text-2xl font-bold mb-2 text-gold-soft">Spark</h3>
                    <p className="text-gray-400 mb-6">Perfect for emerging ventures</p>
                    <div className="text-4xl font-bold mb-6 text-emerald-medium">₹999<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Reels, Posts, Stories (any 2 platforms)</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Carousel design</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Custom Campaigns</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Social Media Creation</li>
                    </ul>
                    <MagicalButton variant="gold" className="w-full mt-auto"
                      onClick={() => window.open('https://forms.gle/PExZuWjHidxUcRrh8', '_blank')}>
                      Express Interest
                    </MagicalButton>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="grimoire" className="h-full border-gold-soft/50 relative bg-black-override">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-soft text-black-rich px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                  <div className="text-center h-full flex flex-col">
                    <h3 className="font-cinzel text-2xl font-bold mb-2 text-gold-soft">Mystic</h3>
                    <p className="text-gray-400 mb-6">For growing businesses</p>
                    <div className="text-4xl font-bold mb-6 text-emerald-medium">₹2499<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Everything in Spark</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Business card/Flyer designs</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Social media management</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Content Calendar</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Mini Social Media Audit (report only)</li>
                    </ul>
                    <MagicalButton variant="gold" className="w-full mt-auto"
                      onClick={() => window.open('https://forms.gle/PExZuWjHidxUcRrh8', '_blank')}>
                      Express Interest
                    </MagicalButton>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="grimoire" className="h-full bg-black-override">
                  <div className="text-center h-full flex flex-col">
                    <h3 className="font-cinzel text-2xl font-bold mb-2 text-gold-soft">Master</h3>
                    <p className="text-gray-400 mb-6">Complete marketing mastery</p>
                    <div className="text-4xl font-bold mb-6 text-emerald-medium">₹3499<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Everything in Mystic</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Brand Makeover</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Advanced automation</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Event Support</li>
                      <li className="flex items-center"><Check className="text-emerald-medium mr-3 h-4 w-4" />Basic Website Development</li>
                    </ul>
                    <MagicalButton variant="gold" className="w-full mt-auto"
                      onClick={() => window.open('https://forms.gle/PExZuWjHidxUcRrh8', '_blank')}>
                      Express Interest
                    </MagicalButton>
                  </div>
                </SectionCard>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionCard variant="grimoire" className="max-w-2xl mx-auto">
                <div className="text-center">
                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold-soft">Custom Enchantment</h3>
                  <p className="text-gray-300 mb-6">Need something beyond our standard grimoires? Let us craft a bespoke magical solution tailored to your unique vision. (We Provide User Aquisition and Website Development Services)</p>
                  <MagicalButton>
                    <WandSparkles className="mr-2 h-4 w-4" />
                    Commission Custom WandSparkles
                  </MagicalButton>
                </div>
              </SectionCard>
            </motion.div>
          </div>
        </section>
      </MeshBackground>

      {/* Testimonials Section */}
      {/* <MeshBackground className="py-20" variant="light">
        <section id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-gold-soft">
                Whispers from Our Spellbound Clients
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear the tales of transformation from those who have experienced our marketing magic
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <SectionCard variant="scroll" className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-medium to-emerald-dark flex items-center justify-center">
                      <Quote className="text-gold-soft text-xl" />
                    </div>
                    <p className="text-gray-300 mb-6 italic">"Clover transformed our humble bakery into a magical destination. Our online presence now radiates the warmth and wonder that our pastries have always possessed."</p>
                    <h4 className="font-cinzel text-lg font-semibold text-gold-soft">Elena Moonwhisper</h4>
                    <p className="text-sm text-gray-400">Enchanted Delights Bakery</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="scroll" className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-medium to-emerald-dark flex items-center justify-center">
                      <Quote className="text-gold-soft text-xl" />
                    </div>
                    <p className="text-gray-300 mb-6 italic">"The mystical approach to our tech startup's branding was exactly what we needed. Clover helped us stand out in a crowded market with their unique magical touch."</p>
                    <h4 className="font-cinzel text-lg font-semibold text-gold-soft">Marcus Stormwind</h4>
                    <p className="text-sm text-gray-400">Nexus Innovations</p>
                  </div>
                </SectionCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionCard variant="scroll" className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-medium to-emerald-dark flex items-center justify-center">
                      <Quote className="text-gold-soft text-xl" />
                    </div>
                    <p className="text-gray-300 mb-6 italic">"Our wellness center's rebrand exceeded every expectation. The team at Clover understood our vision and manifested it into reality with their marketing sorcery."</p>
                    <h4 className="font-cinzel text-lg font-semibold text-gold-soft">Aria Brightleaf</h4>
                    <p className="text-sm text-gray-400">Serenity Wellness Center</p>
                  </div>
                </SectionCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </MeshBackground> */}

      {/* Contact Section */}
      <MeshBackground className="py-20">
        <section id="contact">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-gold-soft">
                Cast a Message
              </h2>
              <p className="text-xl text-gray-300">
                Send your intentions across the mystical realm and let us weave magic together
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionCard variant="scroll" className="contact-form-with-owl">
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(async (data) => {
        try {
          const response = await fetch("https://script.google.com/macros/s/AKfycbxbAcRkmw7HNz7Mp5KthZCfb2k-8FfHd6bJTZn0I7tjADvukQc1TZPwaMBQp9bokIVYwQ/exec", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              message: data.message,
            }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          // Optionally show success toast or reset form
          alert("Your magical message has been sent to the guild!");
          form.reset();
        } catch (error) {
          console.error("Error sending message to Google Sheets:", error);
          alert("Oops! The owls couldn't deliver your message. Try again later.");
        }
      })}
      className="space-y-6"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold-soft font-cinzel text-lg">Your Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your mystical name"
                className="bg-black-rich/70 border-emerald-dark/50 text-black placeholder-gray-400 focus:border-gold-soft"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold-soft font-cinzel text-lg">Your Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="your.email@realm.com"
                className="bg-black-rich/70 border-emerald-dark/50 text-black placeholder-gray-400 focus:border-gold-soft"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold-soft font-cinzel text-lg">Your Message</FormLabel>
            <FormControl>
              <Textarea
                rows={6}
                placeholder="Share your vision and let the magic begin..."
                className="bg-black-rich/70 border-emerald-dark/50 text-black placeholder-gray-400 focus:border-gold-soft resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="text-center">
        <button
          type="submit"
          className="btn-magical-transparent font-cinzel font-semibold px-8 py-4 text-lg rounded-lg"
        >
          <NotebookPen className="mr-2 h-4 w-4 inline" />
          Send Message
        </button>
      </div>
    </form>
  </Form>
</SectionCard>

            </motion.div>
          </div>
        </section>
      </MeshBackground>

      {/* Footer */}
      <MeshBackground className="border-t border-emerald-dark/20 py-12" variant="light">
        <footer>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center md:text-left" variants={fadeInUp}>
                <img src="/logo.png" alt="Clover Logo" className="h-12 w-12 mr-2" />
                <h3 className="font-cinzel text-2xl font-bold text-gold-soft mb-4">CLOVER</h3>
                <p className="text-gray-400 mb-4">Unleashing the magic of marketing for visionary brands across all realms.</p>
                <p className="text-sm text-gray-500">© 2025 Clover Marketing Agency. All magical rights reserved.</p>
              </motion.div>
              
              <motion.div className="text-center" variants={fadeInUp}>
                <h4 className="font-cinzel text-lg font-semibold text-gold-soft mb-4">Quick Portals</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gold-soft">About</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gold-soft">Services</button></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-gold-soft">Pricing</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-gold-soft">Contact</button></li>
                </ul>
              </motion.div>
              
              <motion.div className="text-center md:text-right" variants={fadeInUp}>
                <h4 className="font-cinzel text-lg font-semibold text-gold-soft mb-4">Follow Our WandSparkles</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  <a  href="https://www.linkedin.com/company/growwithcloveragency" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-10 h-10 btn-magical-transparent hover:bg-emerald-medium rounded-full flex items-center justify-center transition-colors group">
                    <Linkedin className="text-gold-soft text-sm w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a  href="https://x.com/GrowWithClover_" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-10 h-10 btn-magical-transparent hover:bg-emerald-medium rounded-full flex items-center justify-center transition-colors group">
                    <Twitter className="text-gold-soft text-sm w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a  href="https://www.instagram.com/growwithclover_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 btn-magical-transparent hover:bg-emerald-medium rounded-full flex items-center justify-center transition-colors group">
                    <Instagram className="text-gold-soft text-sm w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a  href="mailto:growwithcloveragency@gmail.com"
                      className="w-10 h-10 btn-magical-transparent hover:bg-emerald-medium rounded-full flex items-center justify-center transition-colors group">
                    <Mail className="text-gold-soft text-sm w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </MeshBackground>
    </div>
  );
}
