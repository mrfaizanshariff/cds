"use server";

export interface ContactFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // Success: Log inside server console or store in database
  console.log("Contact submission received:", { name, email, company, message });

  return {
    success: true,
    message: "Thank you! Your message has been received. Our solutions team will reach out within 24 business hours.",
  };
}


export interface BriefingFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    company?: string;
    focus?: string;
    objectives?: string;
  };
}

export async function submitBriefingForm(
  prevState: BriefingFormState | null,
  formData: FormData
): Promise<BriefingFormState> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const focus = formData.get("focus")?.toString().trim();
  const objectives = formData.get("objectives")?.toString().trim();

  const errors: BriefingFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid corporate email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the highlights on the briefing request.",
      errors,
    };
  }

  console.log("Briefing submission received:", { name, email, company, focus, objectives });

  return {
    success: true,
    message: "Our Enterprise Architecture group has received your briefing request. A calendar invitation with technical diagnostic materials has been dispatched to your corporate email.",
  };
}
