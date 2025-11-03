/*! *****************************************************************************
Copyright 2026 Bedrock APIs

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */

type Console = {
    log(...data: any[]): void;
    warn(...data: any[]): void;
    error(...data: any[]): void;
    info(...data: any[]): void;
};
declare var console: Console;
declare var print: Console["info"]; //iS it log, or info? is info equal to log?

interface InternalError extends Error {}
interface InternalErrorConstructor {
    new (message?: string): InternalError;
    (message?: string): InternalError;
    readonly prototype: InternalError;
}
declare var InternalError: new () => InternalError;

interface ObjectConstructor {
    /**
     * Get class name
     *
     * @param value
     */
    __getClass(value?: any): string;

    // The following are added for better typing on these methods.
    /**
     * Gets the own property descriptor of the specified object.
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
     * @param o Object that contains the property.
     * @param p Name of the property.
     */
    getOwnPropertyDescriptor<T extends any>(o: T, p: keyof T): PropertyDescriptor | undefined;
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param p The property name.
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
     */
    defineProperty<T>(o: T, p: keyof T, attributes: PropertyDescriptor & ThisType<any>): T;
    defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     */
    defineProperties<T>(
        o: T,
        properties: {
            [key in keyof T]: PropertyDescriptor;
        } & {
            [key: PropertyKey]: PropertyDescriptor;
        } & ThisType<any>
    ): T;
}

interface Object {
    hasOwnProperty(v: keyof this): boolean;
    propertyIsEnumerable(v: keyof this): boolean;
    __defineGetter__<P extends keyof this | string>(prop: P, func: Function): undefined;
    __defineSetter__<P extends keyof this | string>(prop: P, func: (val: any) => any): undefined;
    __defineGetter__<P extends string>(prop: P, func: () => any): undefined;
    __defineSetter__<P extends string>(prop: P, func: (val: any) => void): undefined;
    __lookupGetter__<P extends keyof this>(prop: P): (() => this[P]) | undefined;
    __lookupSetter__<P extends keyof this>(prop: P): ((val: this[P]) => this[P]) | undefined;
    get __proto__(): Object;
    set __proto__(prototype: Object | null);
}

interface String {
    /**
     * Quotes the string
     *
     * @param value
     */
    __quote(): string;
}

interface Function {
    /**
     * The line number where the function was defined.
     */
    readonly lineNumber: number;
    /**
     * The file name where the function was defined.
     */
    readonly fileName: string;
}

interface Class {
    /**
     * The line number where the class was defined.
     */
    readonly lineNumber: number;
    /**
     * The file name where the class was defined.
     */
    readonly fileName: string;
}
