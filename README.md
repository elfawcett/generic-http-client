# HTTP Client

A practice project for making HTTP requests. Use either XMLHttpRequests or Fetch. Should support request and response transformers and request queues.

## Rough Idea

```
import { HttpClient } from 'http-client'

const http = new HttpClient({
  mode: 'fetch' | 'xhr',
  middleware: [(context, next?) => context],
})

// Promises
http.get(url).then(response => console.log(response)).catch(err => console.log(err))

// With 401 interceptor middleware
const interceptor = async (context, next) => {
  let result
  try {
    result = await context.request()

    if (result.statusCode === 401) {
      context.requestQueue.add(context.request)

      /* Do something to handle 401s (show login modal, etc.) */
    }

    next(context)

  } catch(err) {
    console.log(`Network error during request: ${err}`)
  }
}

```
