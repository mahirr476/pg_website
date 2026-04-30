// src/lib/jobs.ts
//
// Tiny client for the Task-Ticket recruitment public API.
// Used by the /career page (list) and /career/[slug] page (detail).

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5010/api/v1";

export interface PublicJob {
  id: string;
  name: string;
  slug: string;
  aboutCompany?: string | null;
  jobDescription?: string | null;
  location?: string | null;
  salaryRange?: string | null;
  jobType?: string | null;
  requiredExperience?: string | null;
  publishDate?: string | null;
  applyLastDate?: string | null;
  status: string;
  company?: { id: string; name: string; logo?: string | null } | null;
  department?: { id: string; name: string } | null;
}

const PUBLIC_LIST_URL = `${API_BASE}/recruitment/public/job-titles`;

/**
 * Fetch the list of currently active job postings.
 *
 * Returns an empty array on any failure but logs the cause to the browser
 * console so it's easy to diagnose CORS, network or backend issues.
 */
export async function fetchPublicJobs(): Promise<PublicJob[]> {
  const url = `${PUBLIC_LIST_URL}?limit=50`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error(
        `[career] fetchPublicJobs failed: ${res.status} ${res.statusText} from ${url}`,
      );
      return [];
    }
    const json = await res.json();
    return Array.isArray(json?.data) ? (json.data as PublicJob[]) : [];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[career] fetchPublicJobs network/CORS error from ${url}:`, err);
    return [];
  }
}

/**
 * Fetch a single active job by its slug. Returns null if not found.
 */
export async function fetchPublicJobBySlug(
  slug: string,
): Promise<PublicJob | null> {
  const url = `${PUBLIC_LIST_URL}/${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error(
        `[career] fetchPublicJobBySlug failed: ${res.status} ${res.statusText} from ${url}`,
      );
      return null;
    }
    const json = await res.json();
    return (json?.data as PublicJob) ?? null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[career] fetchPublicJobBySlug error from ${url}:`, err);
    return null;
  }
}

/**
 * Helper for components that want to surface the actual error to the UI
 * (e.g. show "Cannot reach server" instead of just "No openings").
 */
export async function fetchPublicJobsWithError(): Promise<{
  jobs: PublicJob[];
  error: string | null;
}> {
  const url = `${PUBLIC_LIST_URL}?limit=50`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return {
        jobs: [],
        error: `Server returned ${res.status} ${res.statusText}`,
      };
    }
    const json = await res.json();
    return {
      jobs: Array.isArray(json?.data) ? (json.data as PublicJob[]) : [],
      error: null,
    };
  } catch (err: any) {
    return {
      jobs: [],
      error: err?.message || "Network error — is the API server running?",
    };
  }
}

/**
 * Submit a job application as multipart/form-data so we can include the
 * applicant's CV (PDF) and photo (JPEG/PNG) alongside the text fields.
 */
export interface ApplyFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;     // ISO yyyy-mm-dd
  lastEducation: string;
  passingYear: string;
  yearsOfExperience: string;
  currentCompany: string;
  currentDesignation: string;
  noticePeriod: string;
  jobSlug: string;
  resume?: File | null;
  photo?: File | null;
}

export async function submitJobApplication(
  payload: ApplyFormPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const url = `${API_BASE}/recruitment/public/applications`;
  const fd = new FormData();
  fd.append("firstName", payload.firstName);
  fd.append("lastName", payload.lastName);
  fd.append("email", payload.email);
  fd.append("phone", payload.phone);
  fd.append("dateOfBirth", payload.dateOfBirth);
  fd.append("lastEducation", payload.lastEducation);
  fd.append("passingYear", payload.passingYear);
  fd.append("yearsOfExperience", payload.yearsOfExperience);
  fd.append("currentCompany", payload.currentCompany);
  fd.append("currentDesignation", payload.currentDesignation);
  fd.append("noticePeriod", payload.noticePeriod);
  fd.append("jobSlug", payload.jobSlug);
  if (payload.resume) fd.append("resume", payload.resume);
  if (payload.photo) fd.append("photo", payload.photo);

  try {
    const res = await fetch(url, { method: "POST", body: fd });
    if (!res.ok) {
      let message = `Server returned ${res.status}`;
      try {
        const json = await res.json();
        if (json?.message) message = json.message;
      } catch {
        /* ignore */
      }
      return { ok: false, error: message };
    }
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message || "Network error" };
  }
}
