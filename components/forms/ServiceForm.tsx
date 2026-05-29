"use client";

import { useState, useRef } from "react";
import { upload } from "@vercel/blob/client";

const PRODUCT_OPTIONS = ["Sliding", "Casement", "Grande Entry", "Slide & Fold", "Mixed / Not sure"];
type FormState = "idle" | "uploading" | "submitting" | "success" | "error";

export default function ServiceForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget; // capture before async gap

    // Step 1 — upload files directly to Blob
    const fileUrls: string[] = [];
    if (selectedFiles.length > 0) {
      setState("uploading");
      try {
        for (const file of selectedFiles) {
          const blob = await upload(
            `service/${Date.now()}-${file.name}`,
            file,
            { access: "public", handleUploadUrl: "/api/upload" }
          );
          fileUrls.push(blob.url);
        }
      } catch {
        setState("error");
        setErrorMsg("File upload failed. Please remove the files and try again, or call us directly.");
        return;
      }
    }

    // Step 2 — submit form data with URLs
    setState("submitting");
    const fd = new FormData(form);
    fd.delete("files");
    fd.append("fileUrls", JSON.stringify(fileUrls));

    try {
      const res = await fetch("/api/service", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setState("success");
      form.reset();
      setSelectedFiles([]);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please call 1800 309 0280.");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-16">
        <span className="brass-rule mx-auto mb-8" />
        <h2
          className="font-display text-4xl font-light text-[#1F3D2E] mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Request received.
        </h2>
        <p className="text-[#1F3D2E]/60 mb-8 max-w-sm mx-auto leading-relaxed">
          Our service team will contact you within 24 hours. For urgent matters call <a href="tel:18003090280" className="text-[#A9712F]">1800 309 0280</a>.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-[0.65rem] tracking-[0.18em] uppercase text-[#A9712F] border border-[#A9712F] px-6 py-2 hover:bg-[#A9712F] hover:text-white transition-colors"
        >
          Submit another
        </button>
      </div>
    );
  }

  const isWorking = state === "uploading" || state === "submitting";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
      <fieldset>
        <legend className="label text-[#A9712F] mb-6">Your details</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" name="name" required />
          <Field label="Contact number" name="phone" type="tel" required />
          <Field label="Email address" name="email" type="email" required className="sm:col-span-2" />
          <Field label="Installation address" name="address" required className="sm:col-span-2" />
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label text-[#A9712F] mb-2 block" htmlFor="product">
            Product type installed <span className="text-[#A9712F]">*</span>
          </label>
          <select
            id="product"
            name="product"
            required
            className="w-full border border-[#1F3D2E]/20 bg-[#F6F5F0] px-4 py-3 text-sm text-[#1F3D2E] focus:outline-none focus:border-[#1F3D2E]/60"
          >
            <option value="">Select…</option>
            {PRODUCT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <Field label="Tentative installation date" name="installDate" type="date" />
      </div>

      <div>
        <label className="label text-[#A9712F] mb-2 block" htmlFor="problem">
          Describe the problem <span className="text-[#A9712F]">*</span>
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={5}
          required
          className="w-full border border-[#1F3D2E]/20 bg-transparent px-4 py-3 text-sm text-[#1F3D2E] placeholder:text-[#1F3D2E]/30 focus:outline-none focus:border-[#1F3D2E]/60 resize-none"
          placeholder="Describe the issue in as much detail as you can — when it started, which unit, what you have tried."
        />
      </div>

      <fieldset>
        <legend className="label text-[#A9712F] mb-3">Photos / Videos</legend>
        <p className="text-xs text-[#1F3D2E]/50 mb-3">
          Photos or short videos showing the problem help us dispatch the right technician.
        </p>
        <input
          name="files"
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={(e) => setSelectedFiles(Array.from(e.target.files ?? []))}
          className="block w-full text-sm text-[#1F3D2E]/60 file:mr-4 file:py-2 file:px-4 file:border file:border-[#1F3D2E]/30 file:text-[0.65rem] file:tracking-[0.15em] file:uppercase file:bg-transparent file:text-[#1F3D2E]/60 file:cursor-pointer hover:file:border-[#1F3D2E]/60 transition-colors"
        />
        {selectedFiles.length > 0 && (
          <p className="text-xs text-[#1F3D2E]/40 mt-2">
            {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
            {state === "uploading" && " — uploading…"}
          </p>
        )}
      </fieldset>

      {errorMsg && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isWorking}
        className="w-full bg-[#1F3D2E] text-[#F6F5F0] py-4 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#2D6A4F] disabled:opacity-50 transition-colors"
      >
        {state === "uploading" ? "Uploading files…" : state === "submitting" ? "Sending…" : "Submit service request"}
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, className,
}: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="label text-[#A9712F] mb-2 block" htmlFor={name}>
        {label}{required && <span className="text-[#A9712F] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[#1F3D2E]/20 bg-transparent px-4 py-3 text-sm text-[#1F3D2E] placeholder:text-[#1F3D2E]/30 focus:outline-none focus:border-[#1F3D2E]/60 transition-colors"
      />
    </div>
  );
}
