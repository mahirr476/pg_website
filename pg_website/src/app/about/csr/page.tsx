// src/app/about/csr/page.tsx
import CSRHero from '@/components/about/csr/CSRHero';
import CSRFramework from '@/components/about/csr/CSRFramework';
import CSRActivities from '@/components/about/csr/CSRActivities';
import ImpactMetrics from '@/components/about/csr/ImpactMetrics';

export default function CSRPage() {
  return (
    <main className="pt-16">
      <CSRHero />
      <CSRFramework />
      <CSRActivities />
      <ImpactMetrics />
    </main>
  );
}