/// <reference lib="es2015"/>

declare type Console = {
        log: (...data: any[]) => void;
        warn: (...data: any[]) => void;
        error: (...data: any[]) => void;
        info: (...data: any[]) => void;
};
declare var console: Console;
declare var print: Console["info"];

declare var __clock_time: ()=>number;

interface InternalError extends Error { }
interface InternalErrorConstructor {
    new(message?: string): InternalError;
    (message?: string): InternalError;
    readonly prototype: InternalError;
}

declare var InternalError: InternalErrorConstructor;