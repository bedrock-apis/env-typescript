type Console = {
    log: (...data: any[]) => void;
    warn: (...data: any[]) => void;
    error: (...data: any[]) => void;
    info: (...data: any[]) => void;
};
declare var console: Console;
declare var print: Console["info"]; //iS it log, or info? is info equal to log? 

interface InternalError extends Error { }
interface InternalErrorConstructor {
    new(message?: string): InternalError;
    (message?: string): InternalError;
    readonly prototype: InternalError;
}
declare var InternalError: new () => InternalError;

interface ObjectConstructor {
    /**
     * Get class name
     * @param value 
     */
    __getClass(value?: any): string;
}

interface String {
    /**
     * Quotes the string
     * @param value 
     */
    __quote(): string;
}