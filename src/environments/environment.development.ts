export const environmentDev = {
  baseUrl: 'http://localhost:8000',
  production: false,
  api:{
    endpoint:{
      login: 'token/',
      users:{
        getAll: 'users/',
        create: 'users/',
        update: 'users/',
        delete: 'users/',
      },
      teachers:{
        getAll: 'teachers/',
        create: 'teachers/',
        update: 'teachers/',
        delete: 'teachers/',
      },
      students:{
        getAll: 'students/',
        create: 'students/',
        update: 'students/',
        delete: 'students/',
      },
    }
  }
}
