
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
