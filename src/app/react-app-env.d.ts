interface Window {
    ga: (command: string, typeModifier: string, path?: string) => void;
    addEventListener: (name: string, callback: () => void) => void;
    removeEventListener: (name: string, callback: () => void) => void;
}
