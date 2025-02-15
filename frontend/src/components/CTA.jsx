export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-20 sm:px-8 sm:py-20 px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 shadow-2xl rounded-3xl sm:px-16 md:py-16 sm:py-0 lg:flex lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 ">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Take Control of Your Health Today?
            </h2>
            <p className="mt-5 text-pretty sm:text-xl text-md text-gray-300">
              Connect with certified doctors today and get the care you deserve.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
