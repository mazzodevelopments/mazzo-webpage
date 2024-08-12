'use client';
import { useState } from 'react';
import { Button, Spinner, useDisclosure } from '@nextui-org/react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { FaCheckCircle } from 'react-icons/fa';

import Input from '@/components/Input';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setLoading(true);
      emailjs
        .send(serviceID, templateID, formData, publicKey)
        .then((response) => {
          console.log('Email sent successfully:', response);
          setLoading(false);
          onOpen();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setLoading(false);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full mx-auto"
    >
      <Input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <Input
        name="message"
        isTextArea
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <Button
        type="submit"
        size="lg"
        className="bg-emerald-700 text-emerald-100 border border-emerald-500 relative"
        disabled={loading}
      >
        {loading ? <Spinner size="sm" color="default" /> : 'Submit'}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-slate-950 border border-gray-800"
      >
        <ModalContent className="py-9">
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col items-center justify-center text-center">
                <FaCheckCircle className="text-green-500 text-8xl mb-4" />
                <h3 className="font-semibold text-sm text-gray-100">
                  Message sent successfully!
                </h3>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
