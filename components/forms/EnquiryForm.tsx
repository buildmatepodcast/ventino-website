"use client";

import { useState, useRef } from "react";
import { upload } from "@vercel/blob/client";

const SYSTEM_OPTIONS = ["Sliding", "Casement", "Grande Entry", "Slide & Fold", "Not sure yet"];
const GLASS_OPTIONS = ["Single glazed", "Double glazed (DGU)", "Acoustic laminated", "Solar-control", "Not sure"];
const STAGE_OPTIONS = ["Planning", "Under construction", "Renovation", "Other"];

type FormState = "idle" | "uploading" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [systems, setSystems] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [scheduleFiles, setScheduleFiles] = useState<File[]>([]);
  const [floorPlanFiles, setFloorPlanFiles] = useState<File[]>([]);
  const [otherFiles, setOtherFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleSystem = (s: string) =>
    setSystems((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget; // capture before async gap

    // Step 1 — upload all files directly to Blob (bypasses 4.5 MB server limit)
    const allFiles = [
      ...scheduleFiles.map((f) => ({ file: f, folder: "schedules" })),
      ...floorPlanFiles.map((f) => ({ file: f, folder: "floor-plans" })),
      ...otherFiles.map((f) => ({ file: f, folder: "other" })),
    ];
    const fileUrls: string[] = [];
    if (allFiles.length > 0) {
      setState("uploading");
      try {
        for (const { file, folder } of allFiles) {
          const blob = await upload(
            `enquiries/${folder}/${Date.now()}-${file.name}`,
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

    // Step 2 — submit form data with URLs (no files in the body)
    setState("submitting");
    const fd = new FormData(form);
    fd.delete("systems");
    fd.delete("scheduleFiles");
    fd.delete("floorPlanFiles");
    fd.delete("otherFiles");
    systems.forEach((s) => fd.append("systems", s));
    fd.append("fileUrls", JSON.stringify(fileUrls));

    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setState("success");
      form.reset();
      setSystems([]);
      setScheduleFiles([]);
      setFloorPlanFiles([]);
      setOtherFiles([]);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again or call us.");
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
          Thank you.
        </h2>
        <p className="text-[#1F3D2E]/60 mb-8 max-w-sm mx-auto leading-relaxed">
          We&apos;ve received your enquiry and will be in touch within one working day to arrange a site visit.
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
      {/* Personal details */}
      <fieldset>
        <legend className="label text-[#A9712F] mb-6">Your details</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" name="name" required />
          <Field label="Contact number" name="phone" type="tel" required />
          <Field label="Email address" name="email" type="email" required className="sm:col-span-2" />
          <Field label="Site address" name="address" required className="sm:col-span-2" />
        </div>
      </fieldset>

      {/* Systems */}
      <fieldset>
        <legend className="label text-[#A9712F] mb-5">Systems of interest</legend>
        <div className="flex flex-wrap gap-3">
          {SYSTEM_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleSystem(s)}
              className={`px-4 py-2 border text-[0.65rem] tracking-[0.15em] uppercase transition-all ${
                systems.includes(s)
                  ? "border-[#1F3D2E] bg-[#1F3D2E] text-[#F6F5F0]"
                  : "border-[#1F3D2E]/30 text-[#1F3D2E]/60 hover:border-[#1F3D2E]/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Glass + Stage */}
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField label="Preferred glass type" name="glass" options={GLASS_OPTIONS} />
        <SelectField label="Project stage" name="stage" options={STAGE_OPTIONS} required />
      </div>

      {/* File uploads */}
      <fieldset>
        <legend className="label text-[#A9712F] mb-5">Documents (optional)</legend>
        <div className="space-y-5">
          <FileField
            label="Door & window schedule / drawing"
            name="scheduleFiles"
            hint="PDF, DWG, images accepted"
            files={scheduleFiles}
            onChange={setScheduleFiles}
            uploading={state === "uploading"}
          />
          <FileField
            label="Floor plans"
            name="floorPlanFiles"
            hint="PDF, DWG, images accepted"
            files={floorPlanFiles}
            onChange={setFloorPlanFiles}
            uploading={state === "uploading"}
          />
          <FileField
            label="Other documents"
            name="otherFiles"
            hint="Any additional references — images, DOC, XLS, PDF"
            files={otherFiles}
            onChange={setOtherFiles}
            uploading={state === "uploading"}
          />
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label className="label text-[#A9712F] mb-3 block" htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-[#1F3D2E]/20 bg-transparent px-4 py-3 text-sm text-[#1F3D2E] placeholder:text-[#1F3D2E]/30 focus:outline-none focus:border-[#1F3D2E]/60 resize-none"
          placeholder="What are you building? What does it need to feel like? How did you hear about us?"
        />
      </div>

      {errorMsg && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isWorking}
        className="w-full bg-[#1F3D2E] text-[#F6F5F0] py-4 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#2D6A4F] disabled:opacity-50 transition-colors"
      >
        {state === "uploading" ? "Uploading files…" : state === "submitting" ? "Sending…" : "Submit enquiry"}
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

function FileField({
  label, name, hint, files, onChange, uploading,
}: {
  label: string; name: string; hint: string;
  files: File[]; onChange: (f: File[]) => void; uploading: boolean;
}) {
  return (
    <div>
      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1F3D2E]/70 mb-1">{label}</p>
      <p className="text-xs text-[#1F3D2E]/40 mb-2">{hint}</p>
      <input
        name={name}
        type="file"
        multiple
        accept=".pdf,.dwg,.png,.jpg,.jpeg,.gif,.webp,.doc,.docx,.xls,.xlsx"
        onChange={(e) => onChange(Array.from(e.target.files ?? []))}
        className="block w-full text-sm text-[#1F3D2E]/60 file:mr-4 file:py-2 file:px-4 file:border file:border-[#1F3D2E]/30 file:text-[0.65rem] file:tracking-[0.15em] file:uppercase file:bg-transparent file:text-[#1F3D2E]/60 file:cursor-pointer hover:file:border-[#1F3D2E]/60 transition-colors"
      />
      {files.length > 0 && (
        <p className="text-xs text-[#1F3D2E]/40 mt-1">
          {files.length} file{files.length > 1 ? "s" : ""} selected
          {uploading && " — uploading…"}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean;
}) {
  return (
    <div>
      <label className="label text-[#A9712F] mb-2 block" htmlFor={name}>
        {label}{required && <span className="text-[#A9712F] ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full border border-[#1F3D2E]/20 bg-[#F6F5F0] px-4 py-3 text-sm text-[#1F3D2E] focus:outline-none focus:border-[#1F3D2E]/60"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
