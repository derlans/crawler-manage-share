import { isObject } from './is';

// 获取json指定的键值 递归
export function getJsonValue(json, key: string): any[] {
  const result: any[] = [];
  const getJsonValue = (json: Record<string, any>, key: string) => {
    if (json[key]) {
      result.push(json[key]);
    }
    for (const k in json) {
      if (json[k] instanceof Object) {
        getJsonValue(json[k], key);
      }
    }
  };
  getJsonValue(json, key);
  return result;
}

// 获取json的所有字符串值 递归
export function getJsonString(json): string[] {
  const result: string[] = [];
  const getJsonString = (json: Record<string, any>) => {
    for (const k in json) {
      if (typeof json[k] === 'string') {
        result.push(json[k]);
      } else if (json[k] instanceof Object) {
        getJsonString(json[k]);
      }
    }
  };
  getJsonString(json);
  return result;
}

// 统计json中各key的数量 递归
export function getJsonKeyCount(json): Record<string, number> {
  const result: Record<string, number> = {};
  const getJsonKeyCount = (json) => {
    if (Array.isArray(json)) {
      json.forEach((item) => {
        getJsonKeyCount(item);
      });
      return;
    }
    if (isObject(json)) {
      for (const k in json) {
        if (result[k]) {
          result[k] += 1;
        } else {
          result[k] = 1;
        }
        getJsonKeyCount(json[k]);
      }
      return;
    }
  };
  getJsonKeyCount(json);
  return result;
}

// 统计json中string、number、boolean、null、undefined的数量 递归
export function getJsonTypeCount(json): Record<string, number> {
  const result: Record<string, number> = {};
  const getJsonTypeCount = (json) => {
    if (Array.isArray(json)) {
      result['array'] = result['array'] ? result['array'] + 1 : 1;
      json.forEach((item) => {
        getJsonTypeCount(item);
      });
      return;
    }
    if (isObject(json)) {
      for (const k in json) {
        const type = typeof json[k];
        if (result[type]) {
          result[type] += 1;
        } else {
          result[type] = 1;
        }
        getJsonTypeCount(json[k]);
      }
      return;
    }
    const type = typeof json;
    if (result[type]) {
      result[type] += 1;
    } else {
      result[type] = 1;
    }
  };
  getJsonTypeCount(json);
  return result;
}

// 分析json的数据结构
export function getJsonStructure(json): Record<string, any> {
  const result: Record<string, any> = {};
  const getJsonStructure = (json, path: string) => {
    for (const k in json) {
      const type = typeof json[k];
      if (result[path]) {
        if (result[path][type]) {
          result[path][type] += 1;
        } else {
          result[path][type] = 1;
        }
      } else {
        result[path] = {
          [type]: 1,
        };
      }
      if (json[k] instanceof Object) {
        getJsonStructure(json[k], `${path}.${k}`);
      }
    }
  };
  getJsonStructure(json, '');
  return result;
}

// 大小
export function getJsonSize(json) {
  return JSON.stringify(json).length;
}

// 聚合上述函数 analyseJson
export function analyseJson(json: Record<string, any>) {
  return {
    size: getJsonSize(json),
    stringValues: getJsonString(json),
    keyCount: getJsonKeyCount(json),
    typeCount: getJsonTypeCount(json),
    structure: getJsonStructure(json),
  };
}
