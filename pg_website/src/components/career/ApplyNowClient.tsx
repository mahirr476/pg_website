'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ApplyDialog from './ApplyDialog';

interface Props {
  slug: string;
  title: string;
}

/**
 * Beam-animated "Apply Now" button + the slide-down apply dialog.
 * Used on the /career/[slug] detail page.
 */
export default function ApplyNowClient({ slug, title }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background:
            'linear-gradient(135deg, #1e3a8a 0%, #2b4eaa 35%, #c97a23 70%, #faa91c 100%)',
        }}
        className="
          relative block w-full overflow-hidden rounded-xl
          p-[2px] shadow-lg shadow-blue-900/30
          transition-transform duration-300 hover:scale-[1.02]
          group
        "
      >
        {/* Beam shimmer */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute inset-0 rounded-xl
            before:absolute before:inset-0 before:rounded-xl
            before:bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.6)_50%,transparent_55%)]
            before:bg-[length:200%_100%]
            before:animate-[beam_2.4s_linear_infinite]
          "
        />
        <span
          className="
            relative z-10 flex items-center justify-center gap-2
            rounded-[10px] bg-white/95 group-hover:bg-white
            py-4 text-base font-semibold text-gray-900
            transition-colors
          "
        >
          <Sparkles className="w-4 h-4 text-[#1e3a8a]" />
          Apply Now
          <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>

        <style>{`
          @keyframes beam {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </button>

      <ApplyDialog
        open={open}
        onClose={() => setOpen(false)}
        jobSlug={slug}
        jobTitle={title}
      />
    </>
  );
}
