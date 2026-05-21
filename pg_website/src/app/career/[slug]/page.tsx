// app/career/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Calendar as CalendarIcon,
  Clock,
  DollarSign,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { fetchPublicJobBySlug } from '@/lib/jobs';
import ApplyNowClient from '@/components/career/ApplyNowClient';

const formatDate = (d?: string | null) => {
  if (!d) return null;
  try {
    return new Date(d).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return null;
  }
};

const formatSalary = (raw?: string | null) => {
  if (!raw) return null;
  const text = raw.trim();
  if (!text) return null;
  const hasDigit = /\d/.test(text);
  return hasDigit ? `৳${text}` : text;
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await fetchPublicJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const salary = formatSalary(job.salaryRange);
  const publishDate = formatDate(job.publishDate);
  const applyDate = formatDate(job.applyLastDate);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero / cover */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            'linear-gradient(135deg, #1e3a8a 0%, #2b4eaa 35%, #c97a23 70%, #faa91c 100%)',
        }}
      >
        {/* Decorative orbs */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="container mx-auto px-4 pt-16 pb-14 sm:pt-20 sm:pb-16 relative">
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all openings
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20">
                <Sparkles className="w-3 h-3 mr-1" />
                {job.status === 'ACTIVE' ? 'Now Hiring' : 'Closed'}
              </Badge>
              {job.jobType && (
                <Badge className="bg-white/15 text-white border-white/20 hover:bg-white/20">
                  {job.jobType}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              {job.name}
            </h1>
            <p className="text-lg text-white/90 flex items-center gap-2 flex-wrap">
              <Building2 className="w-4 h-4" />
              {job.company?.name || '—'}
              {job.location && (
                <>
                  <span className="opacity-60">·</span>
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </>
              )}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {salary && (
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <DollarSign className="w-3.5 h-3.5" />
                  {salary}
                </span>
              )}
              {job.requiredExperience && (
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <Users className="w-3.5 h-3.5" />
                  {job.requiredExperience}
                </span>
              )}
              {publishDate && (
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  Posted {publishDate}
                </span>
              )}
              {applyDate && (
                <span className="inline-flex items-center gap-2 bg-amber-300/30 border border-amber-200/40 px-3 py-1.5 rounded-full text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  Apply by {applyDate}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: rich content */}
          <div className="lg:col-span-2 space-y-8">
            {job.aboutCompany ? (
              <article className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                  <Building2 className="w-5 h-5 text-indigo-600" />
                  About the company
                </h2>
                <div
                  className="prose prose-slate max-w-none prose-p:leading-relaxed prose-a:text-indigo-600"
                  dangerouslySetInnerHTML={{ __html: job.aboutCompany }}
                />
              </article>
            ) : null}

            {job.jobDescription ? (
              <article className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  Job description
                </h2>
                <div
                  className="prose prose-slate max-w-none prose-p:leading-relaxed prose-a:text-indigo-600"
                  dangerouslySetInnerHTML={{ __html: job.jobDescription }}
                />
              </article>
            ) : null}

            {!job.aboutCompany && !job.jobDescription && (
              <article className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <p className="text-gray-500 text-center py-8">
                  No additional details have been provided for this role yet.
                </p>
              </article>
            )}
          </div>

          {/* Right: sticky summary + apply */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Job overview
              </h3>
              <ul className="space-y-3 text-sm">
                <SummaryRow icon={<Building2 className="w-4 h-4" />} label="Company" value={job.company?.name} />
                <SummaryRow icon={<Building2 className="w-4 h-4" />} label="Department" value={job.department?.name} />
                <SummaryRow icon={<Briefcase className="w-4 h-4" />} label="Job type" value={job.jobType} />
                <SummaryRow icon={<Users className="w-4 h-4" />} label="Experience" value={job.requiredExperience} />
                <SummaryRow icon={<MapPin className="w-4 h-4" />} label="Location" value={job.location} />
                <SummaryRow icon={<DollarSign className="w-4 h-4" />} label="Salary" value={salary} />
                <SummaryRow icon={<CalendarIcon className="w-4 h-4" />} label="Posted on" value={publishDate} />
                <SummaryRow icon={<Clock className="w-4 h-4" />} label="Apply before" value={applyDate} />
              </ul>
            </div>

            <ApplyNowClient slug={job.slug} title={job.name} />
          </aside>
        </div>
      </section>
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-medium text-gray-900 truncate">{value || '—'}</p>
      </div>
    </li>
  );
}

