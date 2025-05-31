
export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4">
        {/* Background with full width and height */}
        <div className="w-screen h-60 bg-[url(/mainimg.jpg)] bg-cover bg-center flex items-center justify-center">
          {/* Glass effect only behind text */}
          <div className="bg-white/40 backdrop-blur-md px-6 py-3 rounded-xl">
            <h1 className={` text-center dark:text-neutral-400`}>
              Blogs
            </h1>
          </div>
        </div>
  
        <div className="text-center justify-center">{children}</div>
      </section>
    );
  }
  