type OptionalMods = Record<string, boolean>;

export function classNames(mainClass: string[], optionalMods?: OptionalMods): string {
  const mods = optionalMods
    ? Object.entries(optionalMods)
        .filter(([_, val]) => val)
        .map(([key]) => key)
    : [];

  return [...mainClass, ...mods].join(' ').trim();
}