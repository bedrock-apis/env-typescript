declare type Console = {
        log: (...data: any[]) => void;
        warn: (...data: any[]) => void;
        error: (...data: any[]) => void;
        info: (...data: any[]) => void;
};
declare var console: Console;
declare var print: Console["info"];

declare var __clock_time: ()=>number;