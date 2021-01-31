export declare type Kind = 'info' | 'positive' | 'negative' | 'warning';
export declare type KindMap = Record<Kind, string>;
export interface AlertProps {
    /**
     * @default info
     */
    kind?: 'success' | 'info' | 'positive' | 'negative' | 'warning';
    className?: string;
    title?: string;
    closeable?: boolean;
}
