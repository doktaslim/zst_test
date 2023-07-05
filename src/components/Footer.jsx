import { footerLinksLeft, footerLinksRight } from "../constant/footerLinks";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-14 md:h-12 border-t flex items-center px-3 md:px-0 bg-white">
      <div className="w-full container mx-auto h-full">
        <div className="hidden md:flex items-center justify-between h-full">
          <section className="flex flex-wrap space-x-2 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Airbnb, Inc.</p>

            {footerLinksLeft.map(({ id, title }) => (
              <div
                className="flex items-center gap-2"
                key={id}
              >
                <div
                  key={id}
                  className="h-1 w-1 rounded-full bg-[#0d0d0d] self-center"
                />
                <p
                  key={title}
                  className="cursor-pointer"
                >
                  {title}
                </p>
              </div>
            ))}
          </section>

          <section className="flex space-x-3 font-medium text-sm">
            {footerLinksRight.map(({ id, title }) => (
              <div
                key={id}
                className="flex items-center space-x-1 cursor-pointer w-max"
              >
                {title === "English" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 self-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                ) : title === "USD" ? (
                  <span className="self-center">$</span>
                ) : null}
                <p className="self-center">{title}</p>

                {title === "Support & Resources" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 self-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </div>
            ))}
          </section>
        </div>

        <div className="h-full flex items-center justify-center gap-10 w-full md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="gray"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <span className="text-[10px] font-medium text-zinc-500">Explore</span>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="gray"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </span>
            <span className="text-[10px] font-medium text-zinc-500">Wishlists</span>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="gray"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className="text-[10px] font-medium text-zinc-500">Login</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
