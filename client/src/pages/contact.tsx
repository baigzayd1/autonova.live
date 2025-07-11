import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await contactMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  const interestOptions = [
    { value: "custom-automation", label: "Custom AI Automations" },
    { value: "multi-app-integration", label: "Multi-App Integration" },
    { value: "email-automation", label: "Email Management & Outreach" },
    { value: "sales-automation", label: "Sales & Cold Outreach" },
    { value: "lead-generation", label: "Lead Generation" },
    { value: "content-automation", label: "Content & Script Automation" },
    { value: "industry-solution", label: "Industry-Specific Solution" },
    { value: "general-inquiry", label: "General Inquiry" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="py-20 bg-black dark:bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">
                Ready to Transform Your Business?
              </h1>
              <p className="text-xl text-gray-300 dark:text-gray-300">
                Let's discuss how AI automation can revolutionize your operations
              </p>
            </div>

            <Card className="bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300 dark:text-gray-300">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your full name"
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
                            <FormLabel className="text-gray-300 dark:text-gray-300">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your email address"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 dark:text-gray-300">
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter your company name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 dark:text-gray-300">
                            Area of Interest
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-white dark:text-white focus:ring-blue-500 focus:border-transparent">
                                <SelectValue placeholder="Select your primary interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700">
                              {interestOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 dark:text-gray-300">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Tell us about your automation needs and current challenges..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg px-8 py-4 text-lg font-semibold"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
