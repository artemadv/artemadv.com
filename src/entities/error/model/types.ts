export type PropsWithError<P = unknown> = P & {
    error: Error & { digest?: string };
    reset: () => void;
};
