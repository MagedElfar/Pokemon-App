// src/api/request.ts
import type { AxiosRequestConfig } from 'axios';
import client from './client';

type ApiId = string | number

export const get = async <T>(url: string, config: AxiosRequestConfig = {}): Promise<T> => {
    const response = await client.get<T>(url, config);
    return response.data;
};

export const getById = async <T>(url: string, id: ApiId, config: AxiosRequestConfig = {}): Promise<T> => {
    const response = await client.get<T>(`${url}/${id}`, config);
    return response.data;
};

export const post = async <T, D = unknown>(url: string, data: D, config: AxiosRequestConfig = {}): Promise<T> => {
    const response = await client.post<T>(url, data, config);
    return response.data;
};

export const patch = async <T, D = unknown>(url: string, id: ApiId, data: D, config: AxiosRequestConfig = {}): Promise<T> => {
    const response = await client.patch<T>(`${url}/${id}`, data, config);
    return response.data;
};

export const del = async <T>(url: string, id: ApiId, config: AxiosRequestConfig = {}): Promise<T> => {
    const response = await client.delete<T>(`${url}/${id}`, config);
    return response.data;
};
