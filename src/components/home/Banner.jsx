const Banner = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        // backgroundImage: `url(https://i.ibb.co/hLQfPrj/Banner-Img.jpg)`,
        backgroundImage: `url(/resources/bannerImg.png)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-10">
        <div className="text-center">
          <h1 className="text-center text-5xl font-extrabold text-black">
            Welcome to Our Website
          </h1>
          <p className="text-center mt-4 text-lg font-extrabold text-black">
            Discover amazing features and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
