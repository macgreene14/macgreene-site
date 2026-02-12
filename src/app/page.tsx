"use client";

import { useEffect, useRef } from "react";

/* ─── Data ─── */

const projects = [
  {
    title: "Skimail",
    description:
      "Interactive ski resort explorer with live snow data, 3D globe visualization, and 127+ resorts across Ikon and Epic passes.",
    tags: ["Next.js", "Mapbox GL", "Open-Meteo", "Tailwind"],
    href: "https://macgreene14.github.io/skimail-mvp/",
  },
  {
    title: "OSM Intelligence",
    description:
      "Static vector tile viewer for OpenStreetMap trail and recreation data. PMTiles served from GitHub with MapLibre GL, color-coded by trail type with 3D terrain.",
    tags: ["MapLibre GL", "PMTiles", "tippecanoe", "OSM"],
    href: "https://macgreene14.github.io/osm-intelligence/",
  },
  // {
  //   title: "Forest Fuel Finder",
  //   description:
  //     "Interactive map for locating and identifying forest fuels to support wildfire risk assessment. Built for field crews and land managers.",
  //   tags: ["React", "Mapbox", "Firebase"],
  // },
  // {
  //   title: "Air Label",
  //   description:
  //     "A nutrition-label-style breakdown of local air quality data. Makes AQI readings easy to understand at a glance.",
  //   tags: ["React", "AQI API", "Data Viz"],
  // },
  // {
  //   title: "Hire a Shovel",
  //   description:
  //     "Marketplace connecting homeowners with snow-shoveling services. On-demand labor platform for winter weather.",
  //   tags: ["React Native", "Firebase", "Stripe"],
  // },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/macgreene14",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mac-greene-2019",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:macgreene14@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

/* ─── Intersection Observer Hook ─── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Small delay to ensure layout is ready, then observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0");
            el.classList.add("animate-fade-in-up");
            observer.unobserve(el);
          }
        },
        { threshold: 0.05, rootMargin: "50px" }
      );
      observer.observe(el);
      // Fallback: if still hidden after 2s, reveal anyway
      const fallback = setTimeout(() => {
        if (el.classList.contains("opacity-0")) {
          el.classList.remove("opacity-0");
          el.classList.add("animate-fade-in-up");
        }
      }, 2000);
      return () => { observer.disconnect(); clearTimeout(fallback); };
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return ref;
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 max-w-3xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <a href="#" className="font-semibold tracking-tight">
            Mac Greene
          </a>
          <div className="flex gap-6">
            {["About", "Projects", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20 animate-fade-in-up">
        <p className="text-sm text-neutral-500 mb-3">Bozeman, MT</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Mac Greene
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 mb-6">
          Software Engineer
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          Building tools at the intersection of geospatial data, outdoor
          recreation, and the web. Focused on shipping things that are useful,
          fast, and well-crafted.
        </p>
      </section>

      {/* About */}
      <Section id="about">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">About</h2>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I&apos;m a software engineer based in Bozeman, Montana. I build
            full-stack web applications with a focus on geospatial tools, data
            visualization, and products for the outdoor industry.
          </p>
          <p>
            My work spans from interactive mapping platforms to automated data
            pipelines to consumer-facing apps. I care about clean design,
            performance, and solving real problems.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m usually skiing, mountain
            biking, or exploring somewhere in the Northern Rockies.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Projects
        </h2>
        <div className="grid gap-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href ?? "#"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium">{p.title}</h3>
                {p.href && (
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                )}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-32">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Get in touch
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Always open to interesting projects and conversations.
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} Mac Greene
        </div>
      </footer>
    </main>
  );
}
