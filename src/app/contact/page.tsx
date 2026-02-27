"use client";

import { CustomCheckbox } from "@/components/CustomCheckbox";
import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SubmitEvent, useCallback, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e: SubmitEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      message: String(formData.get("message")),
    };
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.status !== 200) {
        const data = await res.json();
        throw new Error(JSON.stringify(data.message));
      }
      toast.success("Success!", {
        description: "Your request was sent successfully.",
      });
      form.reset();
      setAgreed(false);
    } catch (error) {
      console.error("ERROR", error);
      toast.error("An error occurred.", {
        description:
          "There was an error submitting Your form, please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-10 lg:py-12">
      <Header />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-2 lg:items-start">
          <div className="grid-cols-1 col-start-1">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
              Get in touch
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-[1.12] tracking-[0.01em] text-ink-900 md:text-4xl">
              Let&apos;s work together
            </h2>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="col-start-2 rounded-2xl border border-brand-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <InputField
                    id={"name"}
                    isRequired={true}
                    label={"Full name"}
                    name={"name"}
                    placeholder={"Your full name"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <InputField
                    id={"email"}
                    isRequired={true}
                    label={"Email"}
                    name={"email"}
                    placeholder={"your@email.com"}
                    type={"email"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <InputField
                    id={"message"}
                    isRequired={true}
                    isTextArea={true}
                    label={"Brief description"}
                    name={"message"}
                    placeholder={"You'r breef description..."}
                  />
                </div>

                <CustomCheckbox
                  setAgreed={setAgreed}
                  agreed={agreed}
                  name="consent"
                  label={
                    "I consent to the processing of personal data for the purpose of responding to my inquiry."
                  }
                  id="consent"
                  isRequired={true}
                />

                <Button type="submit">
                  {isLoading ? <Spinner /> : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
