'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  Sparkles,
  Loader2,
  CheckCircle2,
  Upload,
  User,
  Mail,
  Phone,
  Calendar as CalendarIcon,
  Building2,
  Clock,
  Briefcase,
  Image as ImageIcon,
  FileText,
  GraduationCap,
  Award,
  IdCard,
} from 'lucide-react';
import { submitJobApplication } from '@/lib/jobs';

interface ApplyDialogProps {
  open: boolean;
  onClose: () => void;
  jobSlug: string;
  jobTitle: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  lastEducation: string;
  passingYear: string;
  yearsOfExperience: string;
  currentCompany: string;
  currentDesignation: string;
  noticePeriod: string;
}

const emptyForm: FormState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  lastEducation: '',
  passingYear: '',
  yearsOfExperience: '',
  currentCompany: '',
  currentDesignation: '',
  noticePeriod: '',
};

const PHOTO_MIN_MB = 1;
const PHOTO_MAX_MB = 2;

// Brand gradient used across the apply experience.
const BRAND_GRADIENT =
  'linear-gradient(135deg, #1e3a8a 0%, #2b4eaa 35%, #c97a23 70%, #faa91c 100%)';

export default function ApplyDialog({ open, onClose, jobSlug, jobTitle }: ApplyDialogProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const photoInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  // Lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Reset state on every open
  useEffect(() => {
    if (open) {
      setForm(emptyForm);
      setResume(null);
      setPhoto(null);
      setPhotoPreview(null);
      setErrors({});
      setSuccess(false);
    }
  }, [open]);

  // Generate object URL preview for photo and revoke on change/unmount.
  useEffect(() => {
    if (!photo) {
      setPhotoPreview(null);
      return;
    }
    const url = URL.createObjectURL(photo);
    setPhotoPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: '' }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.dateOfBirth) e.dateOfBirth = 'Date of birth is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.lastEducation.trim()) e.lastEducation = 'Education is required';
    if (!form.passingYear.trim()) e.passingYear = 'Passing year is required';
    if (!form.yearsOfExperience.trim()) e.yearsOfExperience = 'Years of experience is required';
    if (!form.currentCompany.trim()) e.currentCompany = 'Current company is required';
    if (!form.currentDesignation.trim()) e.currentDesignation = 'Current designation is required';
    if (!form.noticePeriod.trim()) e.noticePeriod = 'Notice period is required';

    if (photo) {
      const mb = photo.size / (1024 * 1024);
      if (mb < PHOTO_MIN_MB || mb > PHOTO_MAX_MB) {
        e.photo = `Photo must be between ${PHOTO_MIN_MB} MB and ${PHOTO_MAX_MB} MB`;
      }
      if (!/^image\/(jpeg|jpg|png)$/.test(photo.type)) {
        e.photo = 'Photo must be JPEG, JPG or PNG';
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const result = await submitJobApplication({
      ...form,
      jobSlug,
      resume,
      photo,
    });
    setSubmitting(false);
    if (result.ok) {
      setSuccess(true);
    } else {
      setErrors((p) => ({ ...p, _global: result.error }));
    }
  };

  /* ----- Animation variants ----- */
  const panelVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 18, mass: 0.9 },
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  } as const;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="apply-backdrop"
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Full-screen panel sliding from the top */}
          <motion.div
            key="apply-panel"
            className="fixed inset-0 z-50 flex flex-col bg-white"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div
              className="relative text-white px-6 sm:px-10 py-6 flex items-start justify-between shrink-0 overflow-hidden"
              style={{ background: BRAND_GRADIENT }}
            >
              {/* Decorative shapes */}
              <span aria-hidden className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <span aria-hidden className="absolute top-10 right-10 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.18em] text-white/80 mb-2">
                  Apply for
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3 leading-tight">
                  <Sparkles className="w-6 h-6" />
                  {jobTitle}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="relative p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body — scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8">
                {success ? (
                  <SuccessView onClose={onClose} />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {errors._global && (
                      <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                        {errors._global}
                      </div>
                    )}

                    {/* Premium intro */}
                    <div className="text-center max-w-2xl mx-auto">
                      <p className="text-slate-500 text-sm">
                        We&apos;re excited to learn about you. Please fill out the form below
                        — it only takes a couple of minutes.
                      </p>
                    </div>

                    {/* Personal info section */}
                    <SectionCard title="Personal Information">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field
                          delay={0.05}
                          fromLeft
                          icon={<User className="w-4 h-4" />}
                          label="First Name"
                          required
                          error={errors.firstName}
                        >
                          <input
                            value={form.firstName}
                            onChange={(e) => setField('firstName', e.target.value)}
                            placeholder="e.g., John"
                            className={inputClass(!!errors.firstName)}
                          />
                        </Field>

                        <Field
                          delay={0.1}
                          fromLeft={false}
                          icon={<User className="w-4 h-4" />}
                          label="Last Name"
                          required
                          error={errors.lastName}
                        >
                          <input
                            value={form.lastName}
                            onChange={(e) => setField('lastName', e.target.value)}
                            placeholder="e.g., Doe"
                            className={inputClass(!!errors.lastName)}
                          />
                        </Field>

                        <Field
                          delay={0.15}
                          fromLeft
                          icon={<CalendarIcon className="w-4 h-4" />}
                          label="Date Of Birth"
                          required
                          error={errors.dateOfBirth}
                        >
                          <input
                            type="date"
                            value={form.dateOfBirth}
                            onChange={(e) => setField('dateOfBirth', e.target.value)}
                            className={inputClass(!!errors.dateOfBirth)}
                          />
                        </Field>

                        <Field
                          delay={0.2}
                          fromLeft={false}
                          icon={<Phone className="w-4 h-4" />}
                          label="Phone Number"
                          required
                          error={errors.phone}
                        >
                          <input
                            value={form.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            placeholder="+880..."
                            className={inputClass(!!errors.phone)}
                          />
                        </Field>

                        <Field
                          delay={0.25}
                          fromLeft
                          icon={<Mail className="w-4 h-4" />}
                          label="Email"
                          required
                          error={errors.email}
                        >
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setField('email', e.target.value)}
                            placeholder="you@example.com"
                            className={inputClass(!!errors.email)}
                          />
                        </Field>

                        {/* Education + Passing Year sit side-by-side on the right of Email */}
                        <Field
                          delay={0.3}
                          fromLeft={false}
                          icon={<GraduationCap className="w-4 h-4" />}
                          label="Last Educational Qualification"
                          required
                          error={errors.lastEducation || errors.passingYear}
                        >
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <input
                              value={form.lastEducation}
                              onChange={(e) => setField('lastEducation', e.target.value)}
                              placeholder="e.g., BSc in CSE"
                              className={inputClass(!!errors.lastEducation)}
                            />
                            <input
                              value={form.passingYear}
                              onChange={(e) => setField('passingYear', e.target.value)}
                              placeholder="Passing year"
                              maxLength={4}
                              className={`${inputClass(!!errors.passingYear)} w-[130px]`}
                            />
                          </div>
                        </Field>
                      </div>
                    </SectionCard>

                    {/* Professional info */}
                    <SectionCard title="Professional Information">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field
                          delay={0.05}
                          fromLeft
                          icon={<Briefcase className="w-4 h-4" />}
                          label="Years Of Experience (in relevant field)"
                          required
                          error={errors.yearsOfExperience}
                        >
                          <input
                            value={form.yearsOfExperience}
                            onChange={(e) => setField('yearsOfExperience', e.target.value)}
                            placeholder="e.g., 3 years"
                            className={inputClass(!!errors.yearsOfExperience)}
                          />
                        </Field>

                        <Field
                          delay={0.1}
                          fromLeft={false}
                          icon={<Building2 className="w-4 h-4" />}
                          label="Current Company"
                          required
                          error={errors.currentCompany}
                        >
                          <input
                            value={form.currentCompany}
                            onChange={(e) => setField('currentCompany', e.target.value)}
                            placeholder="e.g., Acme Corp"
                            className={inputClass(!!errors.currentCompany)}
                          />
                        </Field>

                        <Field
                          delay={0.15}
                          fromLeft
                          icon={<IdCard className="w-4 h-4" />}
                          label="Current Designation"
                          required
                          error={errors.currentDesignation}
                        >
                          <input
                            value={form.currentDesignation}
                            onChange={(e) => setField('currentDesignation', e.target.value)}
                            placeholder="e.g., Software Engineer"
                            className={inputClass(!!errors.currentDesignation)}
                          />
                        </Field>

                        <Field
                          delay={0.2}
                          fromLeft={false}
                          icon={<Clock className="w-4 h-4" />}
                          label="Notice Period"
                          required
                          error={errors.noticePeriod}
                        >
                          <input
                            value={form.noticePeriod}
                            onChange={(e) => setField('noticePeriod', e.target.value)}
                            placeholder="e.g., 30 days"
                            className={inputClass(!!errors.noticePeriod)}
                          />
                        </Field>
                      </div>
                    </SectionCard>

                    {/* Attachments */}
                    <SectionCard title="Attachments">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field
                          delay={0.05}
                          fromLeft
                          icon={<FileText className="w-4 h-4" />}
                          label="CV / Resume"
                          helper="PDF, DOC or DOCX"
                        >
                          <FilePickerButton
                            inputRef={resumeInputRef}
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            file={resume}
                            onChange={(f) => setResume(f)}
                            placeholder="Select your resume"
                          />
                        </Field>

                        <Field
                          delay={0.1}
                          fromLeft={false}
                          icon={<ImageIcon className="w-4 h-4" />}
                          label="Photo (35×45 mm)"
                          helper={`JPEG / JPG / PNG (${PHOTO_MIN_MB}-${PHOTO_MAX_MB} MB)`}
                          error={errors.photo}
                        >
                          <PhotoPicker
                            inputRef={photoInputRef}
                            file={photo}
                            preview={photoPreview}
                            onChange={(f) => setPhoto(f)}
                          />
                        </Field>
                      </div>
                    </SectionCard>

                    {/* Actions */}
                    <motion.div
                      className="flex justify-end gap-3 pt-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.4 }}
                    >
                      <button
                        type="button"
                        onClick={onClose}
                        disabled={submitting}
                        className="px-6 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{ background: BRAND_GRADIENT }}
                        className="
                          px-7 py-3 rounded-lg text-sm font-semibold text-white
                          shadow-lg shadow-blue-900/20
                          hover:scale-[1.02] active:scale-[0.99]
                          transition-transform disabled:opacity-60 disabled:cursor-not-allowed
                          flex items-center gap-2
                        "
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            Submit Application
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Helpers ──────────────────────────────────────────────────────────── */

function inputClass(invalid: boolean) {
  return [
    'w-full h-12 rounded-lg border bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400',
    'focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/50',
    'shadow-sm transition-all',
    invalid ? 'border-red-400' : 'border-slate-200 hover:border-slate-300',
  ].join(' ');
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-8px_rgba(30,58,138,0.12)] p-6 sm:p-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="inline-block h-8 w-1.5 rounded-full"
          style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #faa91c 100%)' }}
        />
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      {children}
    </motion.section>
  );
}

function Field({
  label,
  icon,
  required,
  error,
  helper,
  delay,
  fromLeft,
  fullWidth,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  required?: boolean;
  error?: string;
  helper?: string;
  delay: number;
  fromLeft: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`flex flex-col gap-2 ${fullWidth ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18, delay }}
    >
      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
        <span className="text-[#1e3a8a]">{icon}</span>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {helper && !error && (
        <p className="text-[11px] text-slate-500">{helper}</p>
      )}
      {error && <p className="text-[12px] text-red-500">{error}</p>}
    </motion.div>
  );
}

function FilePickerButton({
  inputRef,
  accept,
  file,
  onChange,
  placeholder,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  accept: string;
  file: File | null;
  onChange: (f: File | null) => void;
  placeholder: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="
          flex-1 h-12 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/60
          hover:border-[#1e3a8a]/40 hover:bg-[#1e3a8a]/5 transition-colors
          flex items-center gap-2 px-4 text-sm text-slate-600
        "
      >
        <Upload className="w-4 h-4 text-[#1e3a8a]" />
        <span className="truncate">{file ? file.name : placeholder}</span>
      </button>
      {file && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="px-2 h-12 text-slate-400 hover:text-red-500"
          aria-label="Remove file"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
}

function PhotoPicker({
  inputRef,
  file,
  preview,
  onChange,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  file: File | null;
  preview: string | null;
  onChange: (f: File | null) => void;
}) {
  return (
    <div className="flex items-stretch gap-3">
      <div className="flex-1 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            h-12 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/60
            hover:border-[#faa91c]/50 hover:bg-[#faa91c]/5 transition-colors
            flex items-center gap-2 px-4 text-sm text-slate-600
          "
        >
          <Upload className="w-4 h-4 text-[#faa91c]" />
          <span className="truncate">{file ? file.name : 'Upload your photo'}</span>
        </button>
        {file && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="self-start text-xs text-red-500 hover:text-red-600 inline-flex items-center gap-1"
          >
            <X className="w-3 h-3" /> Remove photo
          </button>
        )}
      </div>

      {/* Preview thumbnail to the right — 35x45 mm aspect (~7:9) */}
      <div
        className="shrink-0 relative w-[70px] h-[90px] rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center"
        title={file ? `Selected: ${file.name}` : 'No photo selected'}
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="Photo preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageIcon className="w-6 h-6 text-slate-300" />
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center py-20"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30"
        style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}
      >
        <CheckCircle2 className="w-11 h-11 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-slate-900 mb-2">Application submitted!</h3>
      <p className="text-slate-600 max-w-md text-base">
        Thank you for applying. We&apos;ve received your details and our recruitment team
        will be in touch if your profile matches the role.
      </p>
      <button
        onClick={onClose}
        className="mt-7 px-7 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
      >
        Close
      </button>
    </motion.div>
  );
}
