'use client';
import { useState, useRef } from 'react';
import { Button, Spinner, useDisclosure } from '@nextui-org/react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import Input from '@/components/Input';

export default function ContactForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const formElements = form.current?.elements as any;

    if (!formElements['name'].value) newErrors.name = 'Name is required';
    if (!formElements['email'].value) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formElements['email'].value)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formElements['phone'].value)
      newErrors.phone = 'Phone number is required';
    if (!formElements['message'].value)
      newErrors.message = 'Message is required';

    return newErrors;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setLoading(true);

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      emailjs
        .sendForm(serviceID, templateID, form.current!, {
          publicKey: publicKey
        })
        .then(() => {
          setModalContent(
            <>
              <FaCheckCircle className="text-emerald-500 text-8xl mb-4 rounded-full" />
              <h3 className="text-sm text-gray-100">
                Message sent successfully!
              </h3>
            </>
          );
          setLoading(false);
          onOpen();
        })
        .catch((error) => {
          console.log('EmailJS Error:', error);
          setModalContent(
            <>
              <FaTimesCircle className="text-red-500 text-8xl mb-4 rounded-full" />
              <h3 className="text-sm text-gray-100">
                Failed to send the message. Please try again later.
              </h3>
            </>
          );
          setLoading(false);
          onOpen();
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-full mx-auto"
    >
      <Input name="name" placeholder="Name" error={errors.name} />
      <Input name="email" placeholder="Email" error={errors.email} />
      <Input name="phone" placeholder="Phone" error={errors.phone} />
      <Input
        name="message"
        isTextArea
        placeholder="Message"
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
        onClose={onClose}
        placement="center"
        backdrop="blur"
        className="bg-slate-950 border border-gray-800 m-4"
      >
        <ModalContent className="py-9">
          <ModalBody className="flex flex-col items-center justify-center text-center">
            {modalContent}
          </ModalBody>
        </ModalContent>
      </Modal>
    </form>
  );
}
