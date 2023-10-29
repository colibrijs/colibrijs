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

import {
  ConsturctorOptions,
  CreateData,
  FindByData,
  FindByIdData,
  FindByParams,
  RemoveData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Components<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Components
   * @name Create
   * @request POST:/components
   */
  create = (data: ConsturctorOptions, params: RequestParams = {}) =>
    this.request<CreateData, any>({
      path: `/components`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name FindBy
   * @request GET:/components
   */
  findBy = (query: FindByParams, params: RequestParams = {}) =>
    this.request<FindByData, any>({
      path: `/components`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name FindById
   * @request GET:/components/{id}
   */
  findById = (id: string, params: RequestParams = {}) =>
    this.request<FindByIdData, any>({
      path: `/components/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name Remove
   * @request DELETE:/components/{id}
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData, any>({
      path: `/components/${id}`,
      method: 'DELETE',
      ...params,
    });
}
