import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  brand_name: z.string().trim().max(150).optional(),
  communication_style: z.enum(["Live calls", "Async-first"]),
  overwhelm_point: z.string().trim().max(1000).optional(),
  main_goal: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    brand_name: "",
    communication_style: "Live calls",
    overwhelm_point: "",
    main_goal: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      brand_name: result.data.brand_name || null,
      communication_style: result.data.communication_style,
      overwhelm_point: result.data.overwhelm_point || null,
      main_goal: result.data.main_goal || null,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-background" aria-labelledby="contact-heading">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-12"
          >
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Your inquiry is in.
            </h2>
            <p className="text-muted-foreground">I'll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
        >
          Request Your Strategy Call
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="mt-1.5 min-h-[48px]"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="mt-1.5 min-h-[48px]"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="brand_name">Brand / Creator Name</Label>
            <Input
              id="brand_name"
              value={form.brand_name}
              onChange={(e) => updateField("brand_name", e.target.value)}
              className="mt-1.5 min-h-[48px]"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-foreground mb-3">
              Preferred communication style *
            </legend>
            <RadioGroup
              value={form.communication_style}
              onValueChange={(v) => updateField("communication_style", v)}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Live calls" id="comm-live" className="min-w-[20px] min-h-[20px]" />
                <Label htmlFor="comm-live" className="cursor-pointer">Live calls</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Async-first" id="comm-async" className="min-w-[20px] min-h-[20px]" />
                <Label htmlFor="comm-async" className="cursor-pointer">Async-first</Label>
              </div>
            </RadioGroup>
          </fieldset>

          <div>
            <Label htmlFor="overwhelm_point">Biggest current overwhelm point</Label>
            <Textarea
              id="overwhelm_point"
              value={form.overwhelm_point}
              onChange={(e) => updateField("overwhelm_point", e.target.value)}
              className="mt-1.5 min-h-[100px]"
              maxLength={1000}
            />
          </div>

          <div>
            <Label htmlFor="main_goal">Main goal for next 90 days</Label>
            <Textarea
              id="main_goal"
              value={form.main_goal}
              onChange={(e) => updateField("main_goal", e.target.value)}
              className="mt-1.5 min-h-[100px]"
              maxLength={1000}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full min-h-[52px] text-base gradient-iridescent text-primary-foreground border-0 hover:opacity-90 transition-opacity"
          >
            {loading ? "Submitting…" : "Request My Strategy Call"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
