import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white animate-fade-up">
      {/* HERO SECTION */}
<section
  id="home"
  className="relative min-h-[90vh] bg-fixed bg-framed"
  style={{ backgroundImage: "url(/images/livingroom.png)" }}
>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-48">
          <div className="max-w-xl space-y-6">
            <Image
              src="/images/portrait.jpg"
              alt="Zach Boston"
              width={240}
              height={240}
              className="rounded-full ring-2 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              priority
            />

            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              Hi, I&apos;m Zach.
              <span className="block font-normal whitespace-nowrap">
                Software Engineer & Web Designer.
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-md">
              I build sleek, high-performing websites that bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
<section
  id="portfolio"
  className="relative min-h-[75vh] bg-fixed bg-framed animate-fade-up [animation-delay:200ms]"
  style={{ backgroundImage: "url(/images/canvas.png)" }}
>
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-44 text-center">
          <span className="text-sm tracking-widest text-emerald-400 uppercase">
            Portfolio
          </span>

          <h2 className="text-4xl font-light mt-4 mb-14">
            Client Showcases
          </h2>

          <a
            href="https://www.kennymeyer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/images/homepage.png"
              alt="Kenny Meyer Website"
              className="
                mx-auto
                max-w-sm
                rounded-lg
                shadow-[0_0_35px_rgba(255,255,255,0.35)]
                transition
                duration-300
                hover:scale-105
              "
            />
          </a>
        </div>
      </section>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative bg-white text-black scroll-mt-16"
>
  <div className="max-w-6xl mx-auto px-8 py-40">
    <div className="max-w-xl space-y-6">
      <span className="text-sm tracking-widest uppercase text-gray-500">
        Contact
      </span>

      <h2 className="text-4xl font-light">
        Let&apos;s bring your ideas to life!
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Have a project in mind or want to collaborate? I&apos;m always open to
        discussing new ideas, creative work, or opportunities to build something
        great.
      </p>

      <a
        href="mailto:zacheryboston@gmail.com"
        className="inline-block mt-6 border border-black px-6 py-3 text-sm tracking-wide uppercase hover:bg-black hover:text-white transition"
      >
        Contact Me
      </a>
    </div>
  </div>
</section>

      {/* ABOUT SECTION */}
<section
  id="about"
  className="relative min-h-[90vh] bg-fixed bg-framed animate-fade-up [animation-delay:400ms]"
  style={{ backgroundImage: "url(/images/livingroom.png)" }}
>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-44">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl font-light">
              I&apos;m Zach.
            </h2>

            <p className="text-white/80 leading-relaxed">
              A software engineer and web designer with three years of experience,
              passionate about building clean, modern, and user-friendly digital
              experiences. In my free time, I enjoy designing for fun and
              competing in triathlons.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}