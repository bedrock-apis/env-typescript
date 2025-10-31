declare module globalThis {
    var print: (...data: any[]) => void;
    var console: {
        log: (...data: any[]) => void;
        warn: (...data: any[]) => void;
        error: (...data: any[]) => void;
        info: (...data: any[]) => void;
    }
}