type OptionalMods = Record<string, boolean>;

export function classNames(mainClass: string[] | string, optionalMods?: OptionalMods): string {
  const mods = optionalMods
    ? Object.entries(optionalMods)
        .filter(([_, val]) => val)
        .map(([key]) => key)
    : [];

    const cls = typeof mainClass === "string"  ? [mainClass] : mainClass;  

  return [...cls.filter(Boolean), ...mods].join(' ').trim();
}