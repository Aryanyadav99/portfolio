import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <footer className="mt-20 border-t border-violet-500/10 bg-[#09090d]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-10">

          {/* Left Spacer */}
          <div className="w-12" />

          {/* Center Copyright */}
          <div className="text-center flex-1">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              ARYAN YADAV
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              © 2026 Aryan Yadav. All Rights Reserved.
            </p>

            <p className="mt-1 text-[11px] uppercase tracking-[4px] text-violet-400/60">
              Designed & Developed by Aryan
            </p>
          </div>

          {/* Right Button */}
          <button
              onClick={scrollToTop}
              className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-400
            hover:bg-violet-500/10
            hover:shadow-[0_0_18px_rgba(168,85,247,.35)]
          "
              title="Back to Top"
          >
            <ArrowUp
                size={20}
                className="text-violet-300 transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>
      </footer>
  );
};

export default Footer;