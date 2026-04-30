// components/career/CurrentOpenings.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Building2, MapPin, Loader2, AlertTriangle } from 'lucide-react';
import { fetchPublicJobsWithError, type PublicJob } from '@/lib/jobs';

const CurrentOpenings = () => {
  const [jobs, setJobs] = useState<PublicJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPublicJobsWithError()
      .then(({ jobs, error }) => {
        if (!mounted) return;
        setJobs(jobs);
        setError(error);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-xl text-gray-600">
            Find your perfect role in our growing team
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center py-16 text-gray-500">
              <Loader2 className="w-8 h-8 animate-spin mb-3" />
              <p>Loading current openings...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center py-16 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertTriangle className="w-10 h-10 mb-3 text-amber-500" />
              <p className="font-medium">Could not load openings</p>
              <p className="text-sm mt-1">{error}</p>
              <p className="text-xs mt-2 text-amber-600">
                Open browser DevTools → Network tab to see the failing request,
                or DevTools → Console for the exact error.
              </p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-gray-500 border border-dashed rounded-lg">
              <Briefcase className="w-10 h-10 mb-3 text-gray-400" />
              <p className="font-medium">No openings right now</p>
              <p className="text-sm">Please check back soon.</p>
            </div>
          ) : (
            jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0">
                        <CardTitle className="text-xl mb-2 truncate">
                          {job.name}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          {job.company?.name || '—'}
                        </CardDescription>
                      </div>
                      <Button asChild>
                        <Link href={`/career/${encodeURIComponent(job.slug)}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {job.department?.name && (
                        <Badge variant="secondary">{job.department.name}</Badge>
                      )}
                      {job.location && (
                        <Badge variant="secondary" className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                      )}
                      {job.jobType && <Badge variant="secondary">{job.jobType}</Badge>}
                      {job.requiredExperience && (
                        <Badge variant="secondary">{job.requiredExperience}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
