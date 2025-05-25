const isProd = process.env.NODE_ENV === "production";


console.log("building with process.env.NEXT_PUBLIC_BASE_PATH",process.env.NEXT_PUBLIC_BASE_PATH,process.env.NODE_ENV)
const nextConfig = {
    output: "export",
    assetPrefix: isProd ? "/powermetica" : "",
    basePath: isProd ? "/powermetica" : "",
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/powermetica" : "",
        NEXT_PUBLIC_API_URL: "https://api.example.com",
    },
};

export default nextConfig;
