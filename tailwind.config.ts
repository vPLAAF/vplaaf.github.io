import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/pages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [typography],
};

export default config;
