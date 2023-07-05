import { footerLinksLeft, footerLinksRight } from "../constant/footerLinks";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-12 border-t flex items-center px-3 md:px-0 bg-white">
      <div className="w-full container mx-auto h-full">
        <div className="hidden md:flex items-center justify-between h-full">
          <section className="flex flex-wrap space-x-2 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Airbnb, Inc.</p>

            {footerLinksLeft.map(({ title }) => (
              <>
                <div className="h-1 w-1 rounded-full bg-[#0d0d0d] self-center" />
                <p
                  key={title}
                  className="cursor-pointer"
                >
                  {title}
                </p>
              </>
            ))}
          </section>

          <section className="flex space-x-3 font-medium text-sm">
            {footerLinksRight.map(({ title }) => (
              <div key={title} className="flex items-center space-x-1 cursor-pointer w-max">
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
                <p
                  className="self-center"
                >
                  {title}
                </p>

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
      </div>
    </footer>
  );
};

export default Footer;
