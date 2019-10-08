type TMiddlewareFunction = (handler: any) => void;

interface IHttpClientOptions {
  useFetch?: boolean;
  middleware?: TMiddlewareFunction[];
}

const Xhr = (verb: string, url: string) => {
  const request = new XMLHttpRequest();

  request.addEventListener('abort', event => {
    console.log(`aborted event: ${event}`);
  });
  request.addEventListener('error', event => {
    console.log(`event errored: ${event}`);
  });
  request.addEventListener('progress', event => {
    console.log(`event: ${event}`);
  });
  request.addEventListener('load', event => {
    console.log(`loaded: ${event}`);
  });

  request.open(verb, url);

  return request;
};

const Fetch = () => {
  return {};
};

class HttpClient {
  private requestQueue: any[] = [];
  private requestTransformers: any[] = [];
  private responseTransformers: any[] = [];
  private mode: any;

  constructor(options: IHttpClientOptions) {
    this.mode = options.useFetch ? Fetch : Xhr;
  }

  get(url: string) {
    console.log(`GET ${url}`);
    let request = this.mode('GET', url).send();

    console.log(request);
    return request;
  }

  private addRequestToQueue(request: any) {
    this.requestQueue.push(request);
  }

  private removeRequestFromQueue(request: any) {
    this.requestQueue.splice(this.requestQueue.indexOf(request));
  }
}

export default HttpClient;
