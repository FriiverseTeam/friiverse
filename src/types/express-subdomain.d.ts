declare module 'express-subdomain' {
  import { Router } from 'express';
  function subdomain(name: string, router: Router): any;
  export = subdomain;
}