export default class {

  static VERSION = '__BUILD_VERSION__';
  static SERVER_URL = 'http://120.27.13.225';

  static APIS = {
    baseUrl: '/api/v1',
    items: {
      'upload': ['post', '/system/upload'],
      'signin': ['post', '/auth/signin'],

      'user_get': ['get', '/auth/admin/user'],
      'user_create': ['post', '/auth/admin/user'],
      'user_delete': ['delete', '/auth/admin/user/{id}'],
      'user_update': ['post', '/auth/admin/user/{id}'],

      'query_permission_delete': ['delete', '/account/permission/{id}'],
      'query_permission_create': ['post', '/account/permission'],

      'banner_get': ['get', '/system/banner'],
      'banner_create': ['post', '/system/banners'],
      'banner_delete': ['delete', '/system/banner/{id}'],
      'banner_update': ['put', '/system/banner/{id}'],
    }
  };
}



