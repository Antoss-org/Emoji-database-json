interface RebuildSettings {
    directory: string;
}
declare function rebuildDirectory({ directory }: RebuildSettings): Promise<void>;

export { type RebuildSettings, rebuildDirectory };
