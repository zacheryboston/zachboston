export default function Home() {
  return (
    <main className="text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[100svh] bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/livingroom.png)" }}
      >
        <div
          className="
            relative z-10
            mx-auto max-w-6xl
            px-4 sm:px-6 md:px-8
            pt-32 md:pt-48
          "
        >
          <div className="flex flex-col items-start gap-6 max-w-xl animate-fade-up">

            <img
              src="/images/portrait.jpg"
              alt="Zach Boston"
              className="
                w-40 h-40
                sm:w-44 sm:h-44
                md:w-56 md:h-56
                rounded-full
                object-cover
                shadow-lg
              "
            />

            <div className="space-y-3">
              <p className="text-4xl font-light">
                Hi, I’m Zach.
              </p>

              <p className="text-4xl font-light leading-tight">
                Software Engineer & Web Designer
              </p>

              <p className="text-white/80 leading-relaxed">
                I build sleek, high-performing websites that bring ideas to life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section
        id="portfolio"
        className="relative min-h-[75vh] bg-scroll md:bg-fixed bg-center bg-cover bg-framed"
        style={{ backgroundImage: "url(/images/canvas.png)" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-44 text-center animate-fade-up">

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-40 animate-fade-up">
          <div className="max-w-xl space-y-6">

            <span className="text-sm tracking-widest uppercase text-gray-500">
              Contact
            </span>

            <h2 className="text-4xl font-light">
              Let’s Bring Your Ideas to Life
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Have a project in mind or want to collaborate? I’m always open to
              discussing new ideas, creative work, or opportunities to build
              something great.
            </p>

            <a
              href="mailto:zacheryboston@gmail.com"
              className="
                inline-block
                mt-6
                border border-black
                px-6 py-3
                text-sm tracking-wide uppercase
                hover:bg-black hover:text-white
                transition
              "
            >
              Contact Me
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-[90vh] bg-scroll md:bg-fixed bg-center bg-cover bg-framed"
        style={{ backgroundImage: "url(/images/livingroom.png)" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-44 animate-fade-up">
          <div className="max-w-xl space-y-6">

            <h2 className="text-4xl font-light">
              I’m Zach.
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