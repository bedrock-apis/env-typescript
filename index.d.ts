/// <reference no-default-lib="true"/>
/// <reference path="./lib/lib.es5.d.ts"/>
/// <reference path="./lib/lib.es2015.d.ts"/>
/// <reference path="./lib/lib.es2016.array.include.d.ts" />

//<reference path="./main.d.ts" />
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
declare var InternalError: new ()=> InternalError;
