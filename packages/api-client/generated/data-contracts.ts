/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ConsturctorOptions {
  componentName: string;
  packageName: string;
  src: string;
}

export interface Component {
  id: string;
  componentName: string;
  packageName: string;
  src: string;
}

export type AppControllerGetData = any;

export type CreateData = Component;

export interface FindByParams {
  id?: string;
  componentName?: string;
  packageName?: string;
  src?: string;
}

export type FindByData = Component[];

export type FindByIdData = Component;

export type RemoveData = Component;
