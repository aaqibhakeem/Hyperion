"use client";
import React, { useRef, useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export default function SignupFormDemo() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("_template", "table"); // Optional: Formats email nicely
    
    try {
        const response = await fetch("e93168cc9fde77ecfdea538d83611bc4", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Email sent successfully!");
            e.currentTarget.reset();
        } else {
            alert("Failed to send email.");
        }
    } catch (error) {
        alert("An error occurred while sending the email.");
        console.error("Email error:", error);
    }
};


  return (
    <div className="shadow-input mx-auto w-full max-w-xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-transparent tech-font">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 justify-center text-center">
        Get in touch with us and realize the true potential within your project.
      </h2>

      <form className="my-8 quicksand-font" action="https://formsubmit.co/aqibhkeemclg@gmail.com" method="POST">
        <LabelInputContainer>
            {/* <input type="hidden" name="_captcha" value="false" /> */}
            <input type="hidden" name="_autoresponse" value="Your Submission has been successfully recorded. We will get back to you in a few days. Thank you." />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
        </LabelInputContainer>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-1xl">First name</Label>
            <Input id="firstname" placeholder="Jim" type="text" name="First Name" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-1xl">Last name</Label>
            <Input id="lastname" placeholder="Halpert" type="text" name="Last name"/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-1xl">Email Address</Label>
          <Input id="email" placeholder="jim.halpert@dundermifflin.com" type="email" name="email"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number" className="text-1xl">Phone Number</Label>
          <Input id="number" placeholder="So we can contact you" type="tel" name="Phone Number"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject" className="text-1xl">Subject</Label>
          <Input id="subject" placeholder="The headline of your message" type="text" name="Subject"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="content" className="text-1xl">Message</Label>
          <Textarea id="content" placeholder="Anything you wanna tell us :)" name="Message"/>
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send us a mail &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// Auto-resizing Textarea Component
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 300; // Adjust hover effect radius
    const [visible, setVisible] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState("");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // Reset height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
      }
    }, [value]);

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #cbfe00,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          ref={(el) => {
            (textareaRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
            if (typeof ref === "function") {
              ref(el);
            } else if (ref) {
              if (el) {
                (ref as React.MutableRefObject<HTMLTextAreaElement>).current = el;
              }
            }
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1} // Minimum row height
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600 resize-none overflow-hidden`,
            className,
          )}
          {...props}
        />
      </motion.div>
    );
  },
);
Textarea.displayName = "Textarea";
