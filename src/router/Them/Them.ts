export const ThemWebsite = {
    light: "light",
    dark: "dark"
} as const;

export type ThemWebsite = keyof typeof ThemWebsite;